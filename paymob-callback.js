// ============================================================
//  Tobacco Perfume — Paymob Webhook Callback
//  Vercel يستقبل إشعار الدفع من Paymob ويتحقق من HMAC
// ============================================================
import crypto from 'crypto';

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const data      = req.body;
    const hmacKey   = process.env.PAYMOB_HMAC;

    // ── التحقق من صحة الـ HMAC ──────────────────────────
    // Paymob بيبعت hmac في الـ query string
    const receivedHmac = req.query.hmac;

    if (hmacKey && receivedHmac) {
      // الحقول المطلوبة للـ HMAC حسب ترتيب Paymob
      const obj = data?.obj || {};
      const concat = [
        obj.amount_cents,
        obj.created_at,
        obj.currency,
        obj.error_occured,
        obj.has_parent_transaction,
        obj.id,
        obj.integration_id,
        obj.is_3d_secure,
        obj.is_auth,
        obj.is_capture,
        obj.is_refunded,
        obj.is_standalone_payment,
        obj.is_voided,
        obj.order?.id,
        obj.owner,
        obj.pending,
        obj.source_data?.pan,
        obj.source_data?.sub_type,
        obj.source_data?.type,
        obj.success,
      ].map(v => (v === undefined || v === null ? '' : String(v))).join('');

      const expectedHmac = crypto
        .createHmac('sha512', hmacKey)
        .update(concat)
        .digest('hex');

      if (receivedHmac !== expectedHmac) {
        console.warn('[Paymob Callback] HMAC mismatch — rejected');
        return res.status(401).json({ error: 'Invalid HMAC' });
      }
    }

    // ── معالجة نتيجة الدفع ──────────────────────────────
    const transaction = data?.obj || {};
    const success     = transaction.success === true || transaction.success === 'true';
    const orderId     = transaction.order?.merchant_order_id;
    const amount      = (transaction.amount_cents / 100).toFixed(2);

    console.log(`[Paymob Callback] order=${orderId} success=${success} amount=${amount} EGP`);

    // هنا تقدر تضيف كود لتحديث Google Sheet أو قاعدة البيانات
    // مثال: await updateOrderStatus(orderId, success ? 'paid' : 'failed');

    return res.status(200).json({ received: true });

  } catch (err) {
    console.error('[Paymob Callback Error]', err.message);
    return res.status(500).json({ error: err.message });
  }
}
