const perfumeCatalog = [
  {
    id: 101, nameAr: "بكرات روج 540", nameEn: "Baccarat Rouge 540", brand: "MFK", category: "unisex",
    price50ml: 300, price60ml: 330, rating: 4.9,
    description: "روح العطور الفاخرة مجسّدةً في كل رذاذة. مزيج ساحر من الزعفران والياسمين يتلاشى نحو قاعدة راتنج الشجر الدافئة في تركيبة خالدة لا تُنسى.",
    notes: { top: ["زعفران", "ياسمين"], heart: ["خشب العنبر", "أمبرجيس"], base: ["راتنج التنوب", "أرز"] }
  },
  {
    id: 102, nameAr: "إيربا بورا", nameEn: "Erba Pura", brand: "Xerjoff", category: "unisex",
    price50ml: 300, price60ml: 330, rating: 4.7,
    description: "صرخة الصيف في زجاجة. نضارة الحمضيات تفتح الطريق لقلب زهري ناعم قبل أن يستقر العطر على مسك أبيض دافئ يبقى طوال اليوم.",
    notes: { top: ["برغموت", "برتقال", "ليمون"], heart: ["ياسمين", "مسك أبيض"], base: ["صندل", "مسك", "فانيليا"] }
  },
  {
    id: 103, nameAr: "ناكسوس", nameEn: "Naxos", brand: "Xerjoff", category: "unisex",
    price50ml: 300, price60ml: 330, rating: 4.8,
    description: "استوحى من جزيرة ناكسوس اليونانية رائحةً تجمع بين الحرية والأناقة. اللافندر والفانيليا يرقصان معًا في تناغم نادر.",
    notes: { top: ["برغموت", "ليمون"], heart: ["لافندر", "إيريس", "نيرولي"], base: ["فانيليا", "توباكو", "مسك"] }
  },
  {
    id: 104, nameAr: "لايتون", nameEn: "Layton", brand: "PDM", category: "unisex",
    price50ml: 300, price60ml: 330, rating: 4.8,
    description: "كلاسيكية راقية في قارورة فاخرة. التفاح الطازج يلتقي بالياسمين والفانيليا في تكوين مثالي يناسب كل المناسبات.",
    notes: { top: ["تفاح", "برغموت", "لافندر"], heart: ["ياسمين", "بنفسج", "جيرانيوم"], base: ["صندل", "فانيليا", "خشب الغواياك"] }
  },
  {
    id: 105, nameAr: "هالتان", nameEn: "Haltane", brand: "PDM", category: "unisex",
    price50ml: 350, price60ml: 400, rating: 4.6,
    description: "عطر شرقي فاخر يعانق الروح بدفء. جوزة الطيب والعنبر يبنيان قصيدةً من الرقي والأصالة.",
    notes: { top: ["جوزة الطيب", "حمضيات"], heart: ["ورد", "عنبر"], base: ["عود", "مسك"] }
  },
  {
    id: 106, nameAr: "إمبيريال فالي", nameEn: "Imperial Valley", brand: "Gissah", category: "unisex",
    price50ml: 350, price60ml: 400, rating: 4.5,
    description: "رحلة في وادٍ ملكي بعيد. الحمضيات الإمبراطورية تفتح أبوابًا من العنبر والصندل لتجربة تدوم ساعات.",
    notes: { top: ["برغموت", "حمضيات"], heart: ["ورد", "عنبر"], base: ["مسك", "صندل"] }
  },
  {
    id: 107, nameAr: "خمره", nameEn: "Khamrah", brand: "Lattafa", category: "unisex",
    price50ml: 300, price60ml: 330, rating: 4.7,
    description: "سُكرٌ من نوع آخر. الزعفران الذهبي والعود الشرقي يتآلفان في تركيبة تأسر الحواس وتبقى على الجلد أياماً.",
    notes: { top: ["زعفران", "ورد"], heart: ["عود", "عنبر"], base: ["مسك", "فانيليا"] }
  },
  {
    id: 108, nameAr: "خمره قهوة", nameEn: "Khamrah Qahwa", brand: "Lattafa", category: "unisex",
    price50ml: 300, price60ml: 330, rating: 4.9,
    description: "أول رشة هي صحوة. القهوة المُحمّصة والهيل الأخضر يُشعلان المزاج قبل أن تهدأ التركيبة في أحضان العود الدافئ والفانيليا.",
    notes: { top: ["قهوة", "هيل"], heart: ["عود", "ورد"], base: ["فانيليا", "عنبر", "مسك"] }
  },
  {
    id: 109, nameAr: "إكلير", nameEn: "Eclair", brand: "Lattafa", category: "unisex",
    price50ml: null, price60ml: 330, rating: 4.4,
    description: "حلاوة متطورة لا تُقاوم. مثل حلوى الإكلير الفرنسية تمامًا، طازج من الخارج وغني وكريمي من الداخل.",
    notes: { top: ["برغموت", "ليمون"], heart: ["إيريس", "ياسمين"], base: ["فانيليا", "مسك"] }
  },
  {
    id: 110, nameAr: "روزز فانيلا", nameEn: "Roses Vanille", brand: "Mancera", category: "unisex",
    price50ml: 250, price60ml: 300, rating: 4.6,
    description: "ثنائي الورد والفانيليا في أروع صوره. دفء استثنائي يلفّ الجسد برومانسية عميقة تناسب المساءات الهادئة.",
    notes: { top: ["ورد", "توت العليق"], heart: ["ورد تركي", "باتشولي"], base: ["فانيليا", "مسك"] }
  },
  {
    id: 111, nameAr: "عود ماراكوجا", nameEn: "Oud Maracuja", brand: "Crivelli", category: "unisex",
    price50ml: 300, price60ml: 330, rating: 4.5,
    description: "الشرق يلتقي الاستوائية في ابتكار جريء. فاكهة المارَكوجا الاستوائية الحادة تتوازن مع العود الأصيل في تعارض مثير.",
    notes: { top: ["فاكهة الماراكوجا", "برغموت"], heart: ["عود", "ورد"], base: ["صندل", "مسك"] }
  },
  {
    id: 112, nameAr: "أنجل شير", nameEn: "Angel's Share", brand: "Kilian", category: "unisex",
    price50ml: 350, price60ml: 400, rating: 4.9,
    description: "الجزء المُبخَّر من البرميل يسمّيه صانعو الكونياك 'حصة الملاك'. كونياك ودافئ مع خشب البلوط يجعلك تشعر أنك تشرب الفاخر.",
    notes: { top: ["كونياك", "قرفة"], heart: ["لوز", "توليكا بيان"], base: ["صندل", "فانيليا", "خشب البلوط"] }
  },
  {
    id: 113, nameAr: "الثائر", nameEn: "Al Thair", brand: "Lattafa", category: "unisex",
    price50ml: 300, price60ml: 330, rating: 4.5,
    description: "اسمه يحكي قصته. برغموت ثائر يفتح المشهد قبل أن تهيمن القاعدة الشرقية العميقة بعودها وعنبرها.",
    notes: { top: ["برغموت", "ليمون"], heart: ["ورد", "عنبر"], base: ["مسك", "عود"] }
  },
  {
    id: 114, nameAr: "بستاشيو", nameEn: "Pistachio", brand: "Sweet", category: "unisex",
    price50ml: 350, price60ml: 400, rating: 4.6,
    description: "ترف الفستق الأخضر في عطر لا يُشبه غيره. تركيبة حلوة وراقية تجعل من كل رشة لحظة متعة.",
    notes: { top: ["فستق", "برغموت"], heart: ["لوز", "فانيليا"], base: ["مسك", "صندل"] }
  },
  {
    id: 201, nameAr: "سي الأحمر", nameEn: "Si Red", brand: "Giorgio Armani", category: "women",
    price50ml: 300, price60ml: 330, rating: 4.7,
    description: "للمرأة التي تجرؤ على الاختلاف. كشمش أسود يُشعل الحواس قبل أن تنساب الوردة لتهمس بالأنوثة.",
    notes: { top: ["كشمش أسود", "برغموت"], heart: ["ورد", "ياسمين"], base: ["فانيليا", "باتشولي"] }
  },
  {
    id: 202, nameAr: "بريري هير", nameEn: "Burberry Her", brand: "Burberry", category: "women",
    price50ml: 300, price60ml: 330, rating: 4.5,
    description: "أنوثة معاصرة وجريئة كروح لندن الشابة. الفراولة الطازجة والبنفسجية الأرجوانية يصنعان بيانًا عطريًا لامرأة تعرف ما تريد.",
    notes: { top: ["فراولة", "ليمون", "بنفسج"], heart: ["ياسمين", "مسك"], base: ["عنبر", "صندل"] }
  },
  {
    id: 203, nameAr: "لاف إز هيفنلي", nameEn: "Love Is Heavenly", brand: "VS", category: "women",
    price50ml: 300, price60ml: 330, rating: 4.4,
    description: "الحب الحقيقي يشبه هذا العطر تمامًا. خوخ ناعم وليلي أبيض يصنعان فردوسًا خاصًا على بشرتك.",
    notes: { top: ["خوخ", "زنبق"], heart: ["ياسمين", "ورد"], base: ["مسك", "فانيليا"] }
  },
  {
    id: 204, nameAr: "فالنتينو بينك", nameEn: "Valentino Pink", brand: "Valentino", category: "women",
    price50ml: 300, price60ml: 330, rating: 4.6,
    description: "وردي بامتياز. البيوني الفاتح والإيريس الرومانسي يرسمان صورة المرأة الفالنتينو الكاملة.",
    notes: { top: ["بيوني", "برغموت"], heart: ["ورد", "إيريس"], base: ["مسك", "صندل"] }
  },
  {
    id: 205, nameAr: "يارا كاندي", nameEn: "Yara Candy", brand: "Lattafa", category: "women",
    price50ml: 300, price60ml: 330, rating: 4.6,
    description: "حلاوة لا تُقاوم مغلّفة بأنوثة حقيقية. توت العليق والفراولة يُطلقان عروضًا من الفرح قبل أن يهدئها الياسمين.",
    notes: { top: ["فراولة", "توت العليق"], heart: ["ورد", "ياسمين"], base: ["فانيليا", "مسك"] }
  },
  {
    id: 206, nameAr: "بينك شوجر", nameEn: "Pink Sugar", brand: "Aquolina", category: "women",
    price50ml: 300, price60ml: 330, rating: 4.4,
    description: "طفولة وأنوثة في آنٍ واحد. السكر الوردي الحلو المرح مع الفانيليا الكريمية يخلقان توقيعًا لا يُنسى.",
    notes: { top: ["برتقال أحمر", "ورد بري"], heart: ["حلوى قطنية", "زنبق"], base: ["فانيليا", "مسك", "كراميل"] }
  },
  {
    id: 301, nameAr: "سوفاج", nameEn: "Sauvage", brand: "Dior", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.9,
    description: "الطبيعة في أجمل تجلياتها. برغموت كالصاعقة، فلفل يُوقظ الحواس، وأمبروكسان يُكمل الرواية بدفء يدوم ساعات طويلة.",
    notes: { top: ["برغموت", "فلفل"], heart: ["لافندر", "فلفل وردي", "فيتيفر"], base: ["أمبروكسان", "أرز"] }
  },
  {
    id: 302, nameAr: "بلو دي شانيل", nameEn: "Bleu de Chanel", brand: "Chanel", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.9,
    description: "حرية الرجل المعاصر في أبهى صورها. حمضيات طازجة مع نعناع خفي وجنجر يُذكّي العقل قبل أن تهيمن قاعدة الصندل والأرز الملكية.",
    notes: { top: ["حمضيات", "نعناع", "فلفل وردي"], heart: ["جنجر", "جوزة الطيب", "ياسمين"], base: ["صندل", "أرز", "بخور"] }
  },
  {
    id: 303, nameAr: "إنفكتوس", nameEn: "Invictus", brand: "Paco Rabanne", category: "men",
    price50ml: null, price60ml: 250, rating: 4.6,
    description: "لمن يعرف معنى الانتصار. الجريب فروت المنعش والمحيط الأزرق يُعلنان الهيمنة بثقة لا تهتز.",
    notes: { top: ["جريب فروت", "بحرية"], heart: ["ياسمين", "هيديون"], base: ["أمبرجيس", "خزب البلوط", "باتشولي"] }
  },
  {
    id: 304, nameAr: "لومال إكسير", nameEn: "Le Male Elixir", brand: "JPG", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.8,
    description: "الإكسير المُلكي لرجل لا يرضى بأقل من الأفضل. هيل مُتلظٍّ وفانيليا دافئة تحتضن الإيريس في توليفة لا تُقاوم.",
    notes: { top: ["هيل", "لافندر"], heart: ["إيريس", "فانيليا"], base: ["توليكا بيان", "عنبر", "مسك"] }
  },
  {
    id: 305, nameAr: "لومال لو بارفان", nameEn: "Le Male Le Parfum", brand: "JPG", category: "men",
    price50ml: null, price60ml: 300, rating: 4.7,
    description: "النسخة المُكثّفة من أيقونة عصرنا. اللافندر والبرغموت يفتحان بابًا إلى عالم من الفانيليا العميقة والمسك الراسخ.",
    notes: { top: ["لافندر", "برغموت"], heart: ["نعناع", "فانيليا"], base: ["مسك", "عنبر"] }
  },
  {
    id: 306, nameAr: "ألتراميل", nameEn: "Ultra Male", brand: "JPG", category: "men",
    price50ml: 250, price60ml: 300, rating: 4.7,
    description: "مذهل في جرأته. كمثرى طازجة تلتقي بلافندر مُلتهب في تجربة تبقى في الذاكرة طويلًا.",
    notes: { top: ["كمثرى", "برغموت"], heart: ["لافندر", "قرفة"], base: ["فانيليا", "توليكا بيان", "عنبر"] }
  },
  {
    id: 307, nameAr: "كريد أفينتوس", nameEn: "Creed Aventus", brand: "Creed", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.9,
    description: "ملك العطور بلا منازع. الأناناس الاستوائي المتقلب يُعلن وصوله قبل أن تنشر القاعدة من المسك والأمبرجيس بساط الملكية.",
    notes: { top: ["أناناس", "برغموت", "تفاح"], heart: ["ورد", "ياسمين", "باتشولي"], base: ["مسك", "أمبرجيس", "خزب البلوط"] }
  },
  {
    id: 308, nameAr: "واي", nameEn: "Y", brand: "YSL", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.7,
    description: "جيل جديد من الرجال يحمل هذا العطر بفخر. برغموت حيوي مع جنجر منعش وقاعدة أرز دافئة.",
    notes: { top: ["برغموت", "تفاح", "جنجر"], heart: ["جيرانيوم", "مريمية"], base: ["عنبر", "أرز", "مسك"] }
  },
  {
    id: 309, nameAr: "سترونجر ويذ يو", nameEn: "Stronger With You", brand: "Armani", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.9,
    description: "الحب الذي يقوّيك. بهارات الهيل الدافئة وفلفل أحمر حاد يُعلنان الانتماء قبل أن يأتي الكستناء والفانيليا ليقولا ما عجز عنه الكلام.",
    notes: { top: ["هيل", "فلفل وردي"], heart: ["مريمية", "بنفسج", "كستناء"], base: ["فانيليا", "مسك", "عنبر"] }
  },
  {
    id: 310, nameAr: "ديور هوم إنتنس", nameEn: "Dior Homme Intense", brand: "Dior", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.7,
    description: "الغموض الفرنسي في أعمق تجلياته. إيريس رجالي جريء يرتكز على أرضية مسكية ناعمة لا يملكها إلا من يعرف الفن الحقيقي.",
    notes: { top: ["إيريس", "لافندر"], heart: ["ورد", "فيتيفر"], base: ["مسك", "صندل", "عنبر"] }
  },
  {
    id: 311, nameAr: "فالنتينو بورن إن روما", nameEn: "Born in Roma", brand: "Valentino", category: "men",
    price50ml: 250, price60ml: 300, rating: 4.6,
    description: "وُلد في قلب روما الأبدية. القهوة والفيتيفر يصنعان شخصية متمردة لكنها شاعرية في آنٍ واحد.",
    notes: { top: ["قهوة", "برغموت"], heart: ["ورد", "فيتيفر"], base: ["مسك", "عنبر"] }
  },
  {
    id: 312, nameAr: "فيرساتشي إيروس", nameEn: "Versace Eros", brand: "Versace", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.7,
    description: "إيروس إله الحب والرغبة والعطر يحمل روحه كاملة. نعناع متفجر وتفاح ليمزجا مع أمبروكسان وسرو في قوة لا تُهزم.",
    notes: { top: ["نعناع", "تفاح", "ليمون"], heart: ["توليكا بيان", "أمبروكسان", "جيرانيوم"], base: ["فيتيفر", "خزب البلوط", "أرز"] }
  },
  {
    id: 313, nameAr: "فهرنهايت", nameEn: "Fahrenheit", brand: "Dior", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.6,
    description: "درجة حرارة الجنون والإبداع. لافندر وجلد دافئ في تركيبة شكّلت عقودًا من المعجبين حول العالم.",
    notes: { top: ["لافندر", "برغموت"], heart: ["زهرة الزيزفون", "بنفسج"], base: ["صندل", "جلد", "مسك"] }
  },
  {
    id: 314, nameAr: "فوايج", nameEn: "Voyage", brand: "Nautica", category: "men",
    price50ml: null, price60ml: 250, rating: 4.5,
    description: "مسافر بلا قيود. الرذاذ البحري وعشب الجبال يصنعان خريطة لعطر يدعوك لاستكشاف ما وراء الأفق.",
    notes: { top: ["ليمون", "برغموت"], heart: ["نوتات بحرية", "سيكلامين"], base: ["مسك", "أمبروكسان"] }
  },
  {
    id: 315, nameAr: "لاكوسيت وايت", nameEn: "Lacoste White", brand: "Lacoste", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.4,
    description: "نقاء الأبيض في عطر. برغموت منعش وإيريس ناصع يعبّران عن الملعب والحياة في آنٍ واحد.",
    notes: { top: ["برغموت", "يوسفي"], heart: ["ياسمين", "إيريس"], base: ["مسك", "صندل"] }
  },
  {
    id: 316, nameAr: "ذا ون", nameEn: "The One", brand: "D&G", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.7,
    description: "الواحد الأوحد. جريب فروت وريحان يبدأن رحلة تنتهي بالأرز الحار والتبغ الناعم لرجل لا يُعوّض.",
    notes: { top: ["جريب فروت", "ريحان", "كزبرة"], heart: ["جنجر", "هيل", "زهرة البرتقال"], base: ["أرز", "عنبر", "تبغ", "مسك"] }
  },
  {
    id: 317, nameAr: "أمير العود", nameEn: "Ameer Al Oudh", brand: "Lattafa", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.8,
    description: "من يُريد التاج لا بدّ أن يحمل عطر الملوك. زعفران ملكي فوق عود أصيل في تركيبة تجعلك أميرًا أينما حللت.",
    notes: { top: ["زعفران", "ورد"], heart: ["عود", "عنبر"], base: ["مسك", "صندل"] }
  },
  {
    id: 318, nameAr: "بي إم دبليو إنتنس", nameEn: "BMW Intense", brand: "BMW", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.4,
    description: "دقة الهندسة الألمانية في عطر. الحمضيات الصارمة مع البنفسج والمسك الراقي لرجل يُقدّر الجودة فوق كل شيء.",
    notes: { top: ["حمضيات", "برغموت"], heart: ["بنفسج", "جيرانيوم"], base: ["مسك", "باتشولي"] }
  },
  {
    id: 319, nameAr: "توباكو فانيلا", nameEn: "Tobacco Vanille", brand: "Tom Ford", category: "men",
    price50ml: 300, price60ml: null, rating: 4.9,
    description: "أفخم تعبير عن التبغ في عالم العطور. تبغ حلو ومدخّن يتمازج مع فانيليا كريمية وفواكه مجففة في تجربة حسية نادرة.",
    notes: { top: ["تبغ", "بهارات"], heart: ["زهرة التبغ", "ياسمين", "جنجر"], base: ["فانيليا", "كاكاو", "فواكه مجففة", "مسك"] }
  },
  {
    id: 320, nameAr: "بلاك ليكسس", nameEn: "Black Lexus", brand: "", category: "men",
    price50ml: 250, price60ml: null, rating: 4.5,
    description: "الأسود الأنيق في أبهى تجلياته. فلفل أسود وأرز فاخر يُكوّنان شخصية رجل يتركز كلفته خلفه أثرًا لا يُنسى.",
    notes: { top: ["برغموت", "فلفل"], heart: ["فيتيفر", "أرز"], base: ["مسك", "عنبر"] }
  },
  {
    id: 321, nameAr: "جيمي شو", nameEn: "Jimmy Choo", brand: "Jimmy Choo", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.5,
    description: "العطر الذي يرتدي الموضة. أناناس وجوز الهند يُبشّران بمغامرة قبل أن يهدأ الياسمين والمسك برومانسية مدروسة.",
    notes: { top: ["أناناس", "جوز الهند", "بطيخ"], heart: ["ياسمين", "فرانجيباني"], base: ["مسك", "صندل"] }
  },
  {
    id: 322, nameAr: "ديزاير بلو", nameEn: "Desire Blue", brand: "", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.4,
    description: "الرغبة الزرقاء لا تُوصف بالكلمات. برغموت نظيف وتفاح منعش يبنيان معًا عطرًا يومياً لا غنى عنه.",
    notes: { top: ["برغموت", "تفاح"], heart: ["أرز", "عنبر"], base: ["مسك", "فيتيفر"] }
  },
  {
    id: 323, nameAr: "سلفر سنت", nameEn: "Silver Scent", brand: "", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.4,
    description: "فضة العطور. برغموت وليمون منعشان يُطلقان رحلة تنتهي بصندل فاخر ومسك ذهبي.",
    notes: { top: ["برغموت", "ليمون"], heart: ["أرز", "صندل"], base: ["مسك", "عنبر"] }
  },
  {
    id: 324, nameAr: "مرسيدس", nameEn: "Mercedes-Benz", brand: "Mercedes", category: "men",
    price50ml: 300, price60ml: 330, rating: 4.5,
    description: "أداء يُشبه السيارة تمامًا. تفاح وليمون ينطلقان بسرعة قبل أن تأتي البنفسجية والجنجر لتأخذ المقود بهدوء الطريق السريع.",
    notes: { top: ["تفاح", "برغموت", "ليمون"], heart: ["بنفسج", "جنجر"], base: ["صندل", "مسك"] }
  }
];

// ============================================================
// صور العطور الأصلية من Fragrantica CDN
// ============================================================
const PERFUME_IMAGES = {
  101: 'https://fimgs.net/mdimg/perfume/375x500.33519.jpg',  // Baccarat Rouge 540
  102: 'https://fimgs.net/mdimg/perfume/375x500.55157.jpg',  // Erba Pura
  103: 'https://fimgs.net/mdimg/perfume/375x500.30529.jpg',  // Naxos
  104: 'https://fimgs.net/mdimg/perfume/375x500.39314.jpg',  // Layton
  105: 'https://fimgs.net/mdimg/perfume/375x500.70776.jpg',  // Haltane
  107: 'https://fimgs.net/mdimg/perfume/375x500.75805.jpg',  // Khamrah
  108: 'https://fimgs.net/mdimg/perfume/375x500.88175.jpg',  // Khamrah Qahwa
  109: 'https://fimgs.net/mdimg/perfume/375x500.93628.jpg',  // Eclair
  110: 'https://fimgs.net/mdimg/perfume/375x500.15210.jpg',  // Roses Vanille
  112: 'https://fimgs.net/mdimg/perfume/375x500.62615.jpg',  // Angel's Share
  205: 'https://fimgs.net/mdimg/perfume/375x500.95752.jpg',  // Yara Candy
  206: 'https://fimgs.net/mdimg/perfume/375x500.975.jpg',    // Pink Sugar
  301: 'https://fimgs.net/mdimg/perfume/375x500.31861.jpg',  // Sauvage
  302: 'https://fimgs.net/mdimg/perfume/375x500.9099.jpg',   // Bleu de Chanel
  303: 'https://fimgs.net/mdimg/perfume/375x500.18471.jpg',  // Invictus
  304: 'https://fimgs.net/mdimg/perfume/375x500.81642.jpg',  // Le Male Elixir
  305: 'https://fimgs.net/mdimg/perfume/375x500.61856.jpg',  // Le Male Le Parfum
  306: 'https://fimgs.net/mdimg/perfume/375x500.30947.jpg',  // Ultra Male
  307: 'https://fimgs.net/mdimg/perfume/375x500.9828.jpg',   // Aventus
  308: 'https://fimgs.net/mdimg/perfume/375x500.45956.jpg',  // Y (YSL)
  309: 'https://fimgs.net/mdimg/perfume/375x500.45258.jpg',  // Stronger With You
  310: 'https://fimgs.net/mdimg/perfume/375x500.13016.jpg',  // Dior Homme Intense
  311: 'https://fimgs.net/mdimg/perfume/375x500.55963.jpg',  // Born in Roma
  312: 'https://fimgs.net/mdimg/perfume/375x500.16657.jpg',  // Versace Eros
  313: 'https://fimgs.net/mdimg/perfume/375x500.228.jpg',    // Fahrenheit
  314: 'https://fimgs.net/mdimg/perfume/375x500.913.jpg',    // Voyage
  315: 'https://fimgs.net/mdimg/perfume/375x500.11043.jpg',  // Lacoste White
  316: 'https://fimgs.net/mdimg/perfume/375x500.2056.jpg',   // The One
  317: 'https://fimgs.net/mdimg/perfume/375x500.25826.jpg',  // Ameer Al Oudh
  319: 'https://fimgs.net/mdimg/perfume/375x500.1825.jpg',   // Tobacco Vanille
  324: 'https://fimgs.net/mdimg/perfume/375x500.13496.jpg',  // Mercedes-Benz
};
// ربط الصور بالكاتالوج
perfumeCatalog.forEach(p => { p.image = PERFUME_IMAGES[p.id] || null; });

function getOldPrice(price, p) {
  // بدون خصم
  if (p && p.customDiscount === 0) return null;
  // خصم مخصص
  if (p && typeof p.customDiscount === 'number' && p.customDiscount > 0)
    return Math.round(price / (1 - p.customDiscount / 100) / 10) * 10;
  // حساب تلقائي
  const map = { 250: 370, 300: 450, 330: 490, 350: 520, 400: 580 };
  return map[price] || Math.round(price * 1.45 / 10) * 10;
}

function getDiscountPct(price, p) {
  if (p && p.customDiscount === 0) return 0;
  if (p && typeof p.customDiscount === 'number' && p.customDiscount > 0) return p.customDiscount;
  const old = getOldPrice(price);
  return Math.round((1 - price / old) * 100);
}

function getPerfumeById(id) {
  return perfumeCatalog.find(p => p.id === id);
}

// تطبيق تعديلات الأدمن من localStorage فوراً
(function applyAdminOverrides() {
  try {
    const saved = localStorage.getItem('tp_admin_catalog');
    if (!saved) return;
    const overrides = JSON.parse(saved);
    if (!Array.isArray(overrides) || !overrides.length) return;
    perfumeCatalog.splice(0, perfumeCatalog.length, ...overrides);
    overrides.forEach(p => {
      if (!p.image && PERFUME_IMAGES[p.id]) p.image = PERFUME_IMAGES[p.id];
    });
  } catch(e) {}
})();

// aliases للتوافق مع الـ HTML
var getOldPriceLocal = getOldPrice;
var discountPct      = getDiscountPct;
