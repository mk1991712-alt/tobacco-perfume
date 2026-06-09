// ============================================================
//  Tobacco Perfume — Paymob Serverless Function
//  Vercel Edge / Node.js runtime
//  ⚠️ لا تكتب أي مفاتيح هنا — كلها في Environment Variables
// ============================================================

export default async function handler(req, res) {

  // CORS headers (عشان checkout.html يقدر يتصل بيها)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, address, amount, orderId } = req.body;

    if (!name || !phone || !amount) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // ────────────────────────────────────────────────
    // الخطوة 1: Authentication — الحصول على auth_token
    // ────────────────────────────────────────────────
    const authRes = await fetch('https://accept.paymob.com/api/auth/tokens', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: process.env.PAYMOB_API_KEY })
    });

    if (!authRes.ok) {
      throw new Error(`Paymob Auth failed: ${authRes.status}`);
    }

    const authData   = await authRes.json();
    const authToken  = authData.token;

    // ────────────────────────────────────────────────
    // الخطوة 2: Order Registration — تسجيل الطلب
    // ────────────────────────────────────────────────
    const amountCents = Math.round(parseFloat(amount) * 100);

    const orderRes = await fetch('https://accept.paymob.com/api/ecommerce/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        auth_token:       authToken,
        delivery_needed:  false,
        amount_cents:     amountCents,
        currency:         'EGP',
        merchant_order_id: orderId,
        items:            []
      })
    });

    if (!orderRes.ok) {
      throw new Error(`Paymob Order failed: ${orderRes.status}`);
    }

    const orderData  = await orderRes.json();
    const paymobOId  = orderData.id;

    // ────────────────────────────────────────────────
    // الخطوة 3: Payment Key — الحصول على token الدفع
    // ────────────────────────────────────────────────
    const nameParts  = (name || '').trim().split(/\s+/);
    const firstName  = nameParts[0] || 'Customer';
    const lastName   = nameParts.slice(1).join(' ') || firstName;

    const payKeyRes  = await fetch('https://accept.paymob.com/api/acceptance/payment_keys', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        auth_token:    authToken,
        amount_cents:  amountCents,
        expiration:    3600,
        order_id:      paymobOId,
        currency:      'EGP',
        integration_id: parseInt(process.env.PAYMOB_INTEGRATION_ID, 10),
        billing_data:  {
          first_name:      firstName,
          last_name:       lastName,
          phone_number:    phone    || '+201000000000',
          email:           email    || 'customer@tobacco-perfume.com',
          street:          address  || 'N/A',
          building:        'N/A',
          floor:           'N/A',
          apartment:       'N/A',
          city:            'Cairo',
          country:         'EG',
          state:           'N/A',
          postal_code:     'N/A',
          shipping_method: 'PKG'
        }
      })
    });

    if (!payKeyRes.ok) {
      throw new Error(`Paymob PayKey failed: ${payKeyRes.status}`);
    }

    const payKeyData    = await payKeyRes.json();
    const paymentToken  = payKeyData.token;

    // ────────────────────────────────────────────────
    // الرد على الـ Frontend
    // ────────────────────────────────────────────────
    return res.status(200).json({
      payment_token:  paymentToken,
      paymob_order:   paymobOId,
      iframe_id:      process.env.PAYMOB_IFRAME_ID  // هيتبعت للـ iframe URL
    });

  } catch (err) {
    console.error('[Paymob Error]', err.message);
    return res.status(500).json({
      error:   'payment_init_failed',
      message: err.message
    });
  }
}
