/* =====================================================================
   VIDA SANA — lógica de la maqueta (catálogo, header/footer, carrito)
   Réplica del comportamiento previsto en WooCommerce.
   ===================================================================== */

const WA_NUM = '5493444501788';
const NEGOCIO = {
  nombre: 'Vida Sana Almacén Natural',
  dir: 'San Antonio Norte 161, Gualeguay, Entre Ríos',
  tel: '+54 9 3444 50-1788',
  horario: 'Lun a Vie 8:00–12:30 y 16:00–20:00 · Sáb 8:30–12:30 y 17:00–19:30',
  email: 'hola@vidasana.com.ar',
  ig: 'vidasana.almacennatural'
};

/* ---- Categorías ---- */
const CATS = [
  { slug:'frutos-secos', nom:'Frutos secos',      emoji:'🥜', desc:'Nueces, almendras y castañas seleccionadas' },
  { slug:'semillas',     nom:'Semillas',          emoji:'🌱', desc:'Chía, lino, sésamo y más' },
  { slug:'legumbres',    nom:'Legumbres',         emoji:'🫘', desc:'Lentejas, garbanzos y porotos' },
  { slug:'cereales',     nom:'Cereales y harinas',emoji:'🌾', desc:'Arroces, avena, quinoa y harinas' },
  { slug:'frutas',       nom:'Frutas desecadas',  emoji:'🌴', desc:'Dátiles y frutas naturales' },
  { slug:'infusiones',   nom:'Infusiones y hierbas',emoji:'🍵', desc:'Hierbas, flores y hongos' },
  { slug:'especias',     nom:'Especias',          emoji:'🌶️', desc:'Aromas y especias del mundo' },
  { slug:'granolas',     nom:'Granolas y mixes',  emoji:'🥣', desc:'Granolas y mixes de frutos secos' },
  { slug:'almacen',      nom:'Almacén natural',   emoji:'🍯', desc:'Cacao, café, sales y más' },
];
const catNom = s => (CATS.find(c=>c.slug===s)||{}).nom || s;

/* ---- Atributos "Estilo de vida" (idénticos a los de la Fase 8 en Woo) ---- */
const ESTILOS = ['Sin TACC','Vegano','Sin azúcar','Orgánico','Apto diabéticos'];

/* ---- Catálogo (fotos reales del cliente; datos de muestra para la reunión) ---- */
const PRODUCTS = [
  // ---------- FRUTOS SECOS ----------
  { id:'p01', nom:'Almendras Nonpareil',            cat:'frutos-secos', precio:11500, peso:'500 g', attrs:['Sin TACC','Vegano','Sin azúcar'], badge:'top',   desc:'Almendras enteras de primera calidad, ideales para picar, activar o sumar a tus recetas.' },
  { id:'p02', nom:'Avellanas',                      cat:'frutos-secos', precio:12900, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Avellanas seleccionadas, perfectas para repostería o para disfrutar tal cual.' },
  { id:'p03', nom:'Castañas de cajú naturales',     cat:'frutos-secos', precio:10900, peso:'500 g', attrs:['Sin TACC','Vegano','Sin azúcar'], badge:'top', desc:'Castañas de cajú naturales, cremosas y nutritivas. Una de las favoritas de la casa.' },
  { id:'p04', nom:'Castañas de cajú saladas',       cat:'frutos-secos', precio:11200, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Castañas de cajú con un toque de sal marina, el snack que nunca falla.' },
  { id:'p05', nom:'Castañas de Pará (nuez de Brasil)',cat:'frutos-secos', precio:13900, peso:'500 g', attrs:['Sin TACC','Vegano','Sin azúcar'], badge:'nuevo', desc:'Nuez de Brasil, fuente natural de selenio. Con pocas por día ya es suficiente.' },
  { id:'p06', nom:'Maní salado',                    cat:'frutos-secos', precio:4200, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Maní tostado y salado en su punto justo, para compartir en cualquier momento.' },
  { id:'p07', nom:'Nuez mariposa extra light',      cat:'frutos-secos', precio:12500, peso:'500 g', attrs:['Sin TACC','Vegano','Sin azúcar'], badge:'top', desc:'Nuez mariposa clara y entera, calidad extra. La preferida para el desayuno.' },
  { id:'p08', nom:'Nuez pecán',                     cat:'frutos-secos', precio:13500, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Nuez pecán dulce y mantecosa, ideal para tortas y ensaladas.' },
  { id:'p09', nom:'Pistachos con cáscara',          cat:'frutos-secos', precio:12900, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Pistachos tostados con cáscara, para disfrutar sin apuro.' },
  { id:'p10', nom:'Pistachos pelados',              cat:'frutos-secos', precio:15900, peso:'500 g', attrs:['Sin TACC','Vegano','Sin azúcar'], badge:'nuevo', desc:'Pistachos pelados listos para usar en tus recetas o picar al toque.' },

  // ---------- SEMILLAS ----------
  { id:'p11', nom:'Semillas de chía',               cat:'semillas', precio:3200, peso:'500 g', attrs:['Sin TACC','Vegano','Orgánico','Apto diabéticos'], badge:'top', desc:'Chía rica en fibra y omega 3. Sumala a licuados, yogur o panificados.' },
  { id:'p12', nom:'Semillas de lino',               cat:'semillas', precio:2600, peso:'500 g', attrs:['Sin TACC','Vegano','Apto diabéticos'], desc:'Lino entero, fuente de omega 3 y fibra para tu día a día.' },
  { id:'p13', nom:'Semillas de lino dorado',        cat:'semillas', precio:2900, peso:'500 g', attrs:['Sin TACC','Vegano','Apto diabéticos'], desc:'Lino dorado de sabor suave, ideal para espolvorear o moler.' },
  { id:'p14', nom:'Sésamo blanco',                  cat:'semillas', precio:3100, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Sésamo blanco para panes, budines y tu propio gomasio.' },
  { id:'p15', nom:'Sésamo negro',                   cat:'semillas', precio:3400, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Sésamo negro de sabor intenso, lindo y nutritivo para decorar tus platos.' },
  { id:'p16', nom:'Sésamo integral',                cat:'semillas', precio:3000, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Sésamo integral con todas sus propiedades, fuente de calcio vegetal.' },
  { id:'p17', nom:'Semillas de girasol peladas',    cat:'semillas', precio:2700, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Girasol pelado listo para ensaladas, granolas o para picar.' },
  { id:'p18', nom:'Semillas de zapallo',            cat:'semillas', precio:3600, peso:'500 g', attrs:['Sin TACC','Vegano','Sin azúcar'], badge:'nuevo', desc:'Semillas de zapallo (pepitas), un snack verde lleno de nutrientes.' },
  { id:'p19', nom:'Semillas de amapola',            cat:'semillas', precio:4800, peso:'250 g', attrs:['Sin TACC','Vegano'], desc:'Amapola para darle un toque especial a panes y postres.' },
  { id:'p20', nom:'Semillas de cardo mariano',      cat:'semillas', precio:4200, peso:'250 g', attrs:['Sin TACC','Vegano','Orgánico'], desc:'Cardo mariano, tradicionalmente usado como aliado natural del hígado.' },

  // ---------- LEGUMBRES ----------
  { id:'p21', nom:'Lentejas',                       cat:'legumbres', precio:2900, peso:'500 g', attrs:['Sin TACC','Vegano','Apto diabéticos'], badge:'top', desc:'Lentejas clásicas, fuente de proteína vegetal y hierro. Para los guisos de siempre.' },
  { id:'p22', nom:'Lentejas turcas',                cat:'legumbres', precio:3400, old:4200, peso:'500 g', attrs:['Sin TACC','Vegano','Apto diabéticos'], badge:'oferta', desc:'Lentejas turcas (coral) que se cocinan rápido. Ideales para cremas y dahl.' },
  { id:'p23', nom:'Lentejas negras (caviar)',       cat:'legumbres', precio:4200, peso:'500 g', attrs:['Sin TACC','Vegano','Apto diabéticos'], badge:'nuevo', desc:'Lentejas caviar, chiquitas y elegantes. Mantienen la forma al cocinar.' },
  { id:'p24', nom:'Garbanzos',                      cat:'legumbres', precio:3200, peso:'500 g', attrs:['Sin TACC','Vegano','Sin azúcar'], badge:'top', desc:'Garbanzos para tu hummus, guisos o falafel casero.' },
  { id:'p25', nom:'Arvejas enteras',                cat:'legumbres', precio:2400, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Arvejas secas enteras, nobles y rendidoras para tus comidas.' },
  { id:'p26', nom:'Arvejas partidas',               cat:'legumbres', precio:2400, peso:'500 g', attrs:['Sin TACC','Vegano','Sin azúcar'], desc:'Arvejas partidas, perfectas para sopas espesas y reconfortantes.' },
  { id:'p27', nom:'Habas',                          cat:'legumbres', precio:3500, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Habas secas, un clásico nutritivo para guisos y ensaladas.' },
  { id:'p28', nom:'Porotos alubia',                 cat:'legumbres', precio:3300, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Porotos alubia blancos y cremosos, ideales para potajes.' },
  { id:'p29', nom:'Porotos de soja',                cat:'legumbres', precio:2800, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Porotos de soja, gran fuente de proteína vegetal.' },
  { id:'p30', nom:'Porotos manteca',                cat:'legumbres', precio:3300, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Porotos manteca de textura suave, para tus guisos preferidos.' },
  { id:'p31', nom:'Porotos tape',                   cat:'legumbres', precio:3200, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Porotos tape (negros), base de una buena feijoada o ensalada.' },
  { id:'p32', nom:'Soja texturizada',               cat:'legumbres', precio:2600, peso:'250 g', attrs:['Sin TACC','Vegano'], badge:'nuevo', desc:'Proteína de soja texturizada, base ideal para hamburguesas y salsas veganas.' },
  { id:'p33', nom:'Texturizado de arveja',          cat:'legumbres', precio:2900, peso:'250 g', attrs:['Sin TACC','Vegano'], badge:'nuevo', desc:'Texturizado de arveja, alternativa proteica liviana y muy versátil.' },

  // ---------- CEREALES Y HARINAS ----------
  { id:'p34', nom:'Arroz integral yamaní',          cat:'cereales', precio:2900, peso:'1 kg', attrs:['Sin TACC','Vegano','Apto diabéticos'], badge:'top', desc:'Arroz yamaní integral de grano entero, nutritivo y con cuerpo.' },
  { id:'p35', nom:'Arroz Carnaroli',                cat:'cereales', precio:4600, peso:'1 kg', attrs:['Sin TACC','Vegano'], desc:'Arroz Carnaroli, el secreto de un risotto cremoso y al dente.' },
  { id:'p36', nom:'Arroz Koshihikari (sushi)',      cat:'cereales', precio:5200, peso:'1 kg', attrs:['Sin TACC','Vegano'], badge:'nuevo', desc:'Arroz japonés para sushi, de grano corto y textura perfecta.' },
  { id:'p37', nom:'Arroz Basmati',                  cat:'cereales', precio:4800, peso:'1 kg', attrs:['Sin TACC','Vegano'], desc:'Basmati aromático de grano largo, suelto y delicado.' },
  { id:'p38', nom:'Arroz salvaje',                  cat:'cereales', precio:6900, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Arroz salvaje de color oscuro, con textura firme y sabor a nuez.' },
  { id:'p39', nom:'Avena gruesa',                   cat:'cereales', precio:2200, peso:'500 g', attrs:['Vegano','Sin azúcar'], desc:'Avena arrollada gruesa, base ideal del desayuno y de tus granolas.' },
  { id:'p40', nom:'Avena instantánea',              cat:'cereales', precio:2300, peso:'500 g', attrs:['Vegano','Sin azúcar'], desc:'Avena instantánea de cocción rápida, suave para porridge y licuados.' },
  { id:'p41', nom:'Quinoa',                         cat:'cereales', precio:6800, peso:'500 g', attrs:['Sin TACC','Vegano','Orgánico'], badge:'top', desc:'Quinoa, el pseudocereal completo: aporta todos los aminoácidos esenciales.' },
  { id:'p42', nom:'Quinoa tricolor',                cat:'cereales', precio:7400, peso:'500 g', attrs:['Sin TACC','Vegano','Orgánico'], badge:'nuevo', desc:'Quinoa tricolor, linda a la vista y nutritiva en el plato.' },
  { id:'p43', nom:'Cuscús',                         cat:'cereales', precio:2600, peso:'500 g', attrs:['Vegano'], desc:'Cuscús de cocción express, ideal para guarniciones y ensaladas tibias.' },
  { id:'p44', nom:'Trigo burgol',                   cat:'cereales', precio:2400, peso:'500 g', attrs:['Vegano'], desc:'Trigo burgol, el alma del tabbouleh y de la cocina árabe.' },
  { id:'p45', nom:'Trigo candeal',                  cat:'cereales', precio:2400, peso:'500 g', attrs:['Vegano'], desc:'Trigo candeal para guisos rústicos y panes caseros.' },
  { id:'p46', nom:'Maíz pisado blanco',             cat:'cereales', precio:2100, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Maíz pisado blanco, base del locro y de la buena cocina criolla.' },
  { id:'p47', nom:'Maíz pisado colorado',           cat:'cereales', precio:2100, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Maíz pisado colorado, sabor y tradición para tus guisos.' },
  { id:'p48', nom:'Maíz pisingallo',                cat:'cereales', precio:1900, peso:'500 g', attrs:['Sin TACC','Vegano','Sin azúcar'], desc:'Maíz pisingallo para pochoclo casero, sano y rendidor.' },
  { id:'p49', nom:'Harina de almendras',            cat:'cereales', precio:7900, peso:'500 g', attrs:['Sin TACC','Vegano','Sin azúcar','Apto diabéticos'], badge:'nuevo', desc:'Harina de almendras, la favorita de la repostería sin TACC y keto.' },
  { id:'p50', nom:'Harina de nuez',                 cat:'cereales', precio:8200, peso:'500 g', attrs:['Sin TACC','Vegano','Sin azúcar'], desc:'Harina de nuez, aromática y nutritiva para tus recetas sin gluten.' },
  { id:'p51', nom:'Premezcla keto',                 cat:'cereales', precio:6200, peso:'500 g', attrs:['Sin TACC','Sin azúcar','Apto diabéticos'], badge:'nuevo', desc:'Premezcla keto lista para usar, baja en carbohidratos y sin azúcar.' },
  { id:'p52', nom:'Rebozador Vida Sana sin TACC',   cat:'cereales', precio:2800, peso:'500 g', attrs:['Sin TACC','Vegano'], badge:'top', desc:'Nuestro rebozador sin TACC, crocante y de elaboración propia.' },
  { id:'p53', nom:'Rebozador multicereal',          cat:'cereales', precio:2600, peso:'500 g', attrs:['Vegano'], desc:'Rebozador multicereal con semillas, para milanesas con más sabor.' },

  // ---------- FRUTAS DESECADAS ----------
  { id:'p54', nom:'Dátiles (Irán)',                 cat:'frutas', precio:6900, peso:'500 g', attrs:['Sin TACC','Vegano','Sin azúcar'], badge:'top', desc:'Dátiles naturales, dulzura sin azúcar agregada. Energía pura para el día.' },
  { id:'p55', nom:'Dátiles de Argelia',             cat:'frutas', precio:8400, peso:'500 g', attrs:['Sin TACC','Vegano','Sin azúcar'], desc:'Dátiles de Argelia, carnosos y tiernos. Un lujo natural.' },

  // ---------- INFUSIONES Y HIERBAS ----------
  { id:'p56', nom:'Manzanilla',                     cat:'infusiones', precio:2900, peso:'100 g', attrs:['Sin TACC','Vegano','Orgánico'], badge:'top', desc:'Manzanilla en flor, la infusión tranquila de todas las noches.' },
  { id:'p57', nom:'Flor de Jamaica (hibisco)',      cat:'infusiones', precio:4100, peso:'100 g', attrs:['Sin TACC','Vegano','Orgánico'], badge:'nuevo', desc:'Flor de Jamaica para infusiones rojas, refrescantes en frío o en caliente.' },
  { id:'p58', nom:'Flores de caléndula',            cat:'infusiones', precio:4300, peso:'80 g', attrs:['Sin TACC','Vegano','Orgánico'], desc:'Caléndula en flor, suave y luminosa para tus infusiones y cuidados.' },
  { id:'p59', nom:'Flor siempreviva',               cat:'infusiones', precio:4500, peso:'80 g', attrs:['Sin TACC','Vegano','Orgánico'], desc:'Flor siempreviva, hermosa para infusiones y también para decorar.' },
  { id:'p60', nom:'Pétalos de rosa',                cat:'infusiones', precio:4600, peso:'80 g', attrs:['Sin TACC','Vegano','Orgánico'], desc:'Pétalos de rosa aromáticos, un mimo para tus tés e infusiones.' },
  { id:'p61', nom:'Regaliz (palo dulce)',           cat:'infusiones', precio:3200, peso:'100 g', attrs:['Sin TACC','Vegano','Sin azúcar'], desc:'Palo dulce (regaliz), naturalmente dulce para infusionar.' },
  { id:'p62', nom:'Yerba mate',                     cat:'infusiones', precio:3800, peso:'1 kg', attrs:['Sin TACC','Vegano'], badge:'top', desc:'Yerba mate para acompañar cada ronda. La compañera de siempre.' },
  { id:'p63', nom:'Hongo reishi',                   cat:'infusiones', precio:5900, peso:'80 g', attrs:['Sin TACC','Vegano','Orgánico'], badge:'nuevo', desc:'Reishi, el hongo funcional más conocido, para infusiones y preparaciones.' },
  { id:'p64', nom:'Hongo melena de león',           cat:'infusiones', precio:6400, peso:'80 g', attrs:['Sin TACC','Vegano','Orgánico'], badge:'nuevo', desc:'Melena de león, hongo funcional valorado por su aporte al bienestar.' },
  { id:'p65', nom:'Hongo tremella',                 cat:'infusiones', precio:6200, peso:'80 g', attrs:['Sin TACC','Vegano','Orgánico'], desc:'Tremella, el hongo de la belleza, ideal para infusiones y batidos.' },

  // ---------- ESPECIAS ----------
  { id:'p66', nom:'Canela en rama (Sri Lanka)',     cat:'especias', precio:3900, peso:'100 g', attrs:['Sin TACC','Vegano','Orgánico'], desc:'Canela de Ceilán en rama, aroma noble para dulces e infusiones.' },
  { id:'p67', nom:'Clavo de olor',                  cat:'especias', precio:3200, peso:'100 g', attrs:['Sin TACC','Vegano','Orgánico'], desc:'Clavo de olor entero, cálido y aromático para tus recetas.' },
  { id:'p68', nom:'Nuez moscada en grano',          cat:'especias', precio:4200, peso:'80 g', attrs:['Sin TACC','Vegano'], desc:'Nuez moscada entera para rallar al momento. Aroma incomparable.' },
  { id:'p69', nom:'Cardamomo',                      cat:'especias', precio:5600, peso:'80 g', attrs:['Sin TACC','Vegano','Orgánico'], badge:'nuevo', desc:'Cardamomo en vaina, exótico y perfumado para café, dulces y curris.' },
  { id:'p70', nom:'Cúrcuma en raíz',                cat:'especias', precio:3400, peso:'100 g', attrs:['Sin TACC','Vegano','Orgánico'], desc:'Cúrcuma en raíz, color y propiedades para tus comidas e infusiones.' },
  { id:'p71', nom:'Anís estrellado',                cat:'especias', precio:3600, peso:'80 g', attrs:['Sin TACC','Vegano','Orgánico'], desc:'Anís estrellado, dulce y aromático para infusiones y repostería.' },
  { id:'p72', nom:'Fenogreco',                      cat:'especias', precio:3000, peso:'100 g', attrs:['Sin TACC','Vegano'], desc:'Fenogreco en semillas, muy usado en la cocina india y en infusiones.' },
  { id:'p73', nom:'Bayas de enebro',                cat:'especias', precio:4400, peso:'80 g', attrs:['Sin TACC','Vegano'], desc:'Bayas de enebro, el toque aromático de los escabeches y guisos.' },

  // ---------- GRANOLAS Y MIXES ----------
  { id:'p74', nom:'Granola energética',             cat:'granolas', precio:4200, peso:'500 g', attrs:['Vegano'], badge:'top', desc:'Nuestra granola energética con frutos secos y semillas. Desayuno con todo.' },
  { id:'p75', nom:'Granola proteica',               cat:'granolas', precio:4600, peso:'500 g', attrs:['Vegano'], badge:'nuevo', desc:'Granola proteica para arrancar el día con más fuerza.' },
  { id:'p76', nom:'Mix premium',                    cat:'granolas', precio:6900, peso:'500 g', attrs:['Sin TACC','Vegano','Sin azúcar'], badge:'top', desc:'Mix premium de frutos secos seleccionados. El regalo saludable ideal.' },
  { id:'p77', nom:'Mix tropical',                   cat:'granolas', precio:5200, old:6400, peso:'500 g', attrs:['Sin TACC','Vegano'], badge:'oferta', desc:'Mix tropical con frutas y semillas, un viaje de sabores en cada puñado.' },
  { id:'p78', nom:'Mix salado',                     cat:'granolas', precio:4800, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Mix salado para picar, la previa perfecta.' },
  { id:'p79', nom:'Mix de frutos fileteados',       cat:'granolas', precio:5400, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Frutos secos fileteados, listos para decorar postres y ensaladas.' },
  { id:'p80', nom:'Mix económico con banana',       cat:'granolas', precio:3600, old:4400, peso:'500 g', attrs:['Sin TACC','Vegano'], badge:'oferta', desc:'Mix económico con chips de banana, rendidor y rico para todos los días.' },
  { id:'p81', nom:'Mix para mate (té)',             cat:'infusiones', precio:3400, peso:'100 g', attrs:['Sin TACC','Vegano','Orgánico'], desc:'Blend de hierbas para enriquecer tu mate, suave y aromático.' },
  { id:'p82', nom:'Mix para mate (café y cacao)',   cat:'infusiones', precio:3600, peso:'100 g', attrs:['Sin TACC','Vegano'], badge:'nuevo', desc:'Mix para mate con café y cacao, un mate con carácter.' },

  // ---------- ALMACÉN NATURAL ----------
  { id:'p83', nom:'Nibs de cacao',                  cat:'almacen', precio:6400, peso:'250 g', attrs:['Sin TACC','Vegano','Sin azúcar','Apto diabéticos'], badge:'top', desc:'Nibs de cacao puro, intensos y sin azúcar. Antioxidantes en estado natural.' },
  { id:'p84', nom:'Semillas de cacao',              cat:'almacen', precio:6200, peso:'250 g', attrs:['Sin TACC','Vegano','Sin azúcar'], desc:'Semillas de cacao para los amantes del chocolate real y sin agregados.' },
  { id:'p85', nom:'Fruta de cacao',                 cat:'almacen', precio:6900, peso:'250 g', attrs:['Sin TACC','Vegano','Sin azúcar'], badge:'nuevo', desc:'Fruta de cacao, el origen del chocolate en su forma más pura.' },
  { id:'p86', nom:'Café en grano',                  cat:'almacen', precio:7200, peso:'500 g', attrs:['Sin TACC','Vegano'], badge:'top', desc:'Café en grano para moler en casa y sentir el aroma fresco en cada taza.' },
  { id:'p87', nom:'Café en grano sin TACC',         cat:'almacen', precio:7400, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Café en grano apto sin TACC, el mismo ritual con total tranquilidad.' },
  { id:'p88', nom:'Sal del Himalaya fina',          cat:'almacen', precio:2600, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Sal rosada del Himalaya fina, para sazonar con minerales naturales.' },
  { id:'p89', nom:'Sal del Himalaya gruesa',        cat:'almacen', precio:2600, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Sal rosada del Himalaya gruesa, ideal para molinillo y carnes.' },
  { id:'p90', nom:'Sal marina fina',                cat:'almacen', precio:1800, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Sal marina fina, el sabor del mar en tu cocina.' },
  { id:'p91', nom:'Sal marina gruesa',              cat:'almacen', precio:1800, peso:'500 g', attrs:['Sin TACC','Vegano'], desc:'Sal marina gruesa, perfecta para asados y conservas.' },
  { id:'p92', nom:'Manteca de karité',              cat:'almacen', precio:5400, peso:'200 g', attrs:['Vegano','Orgánico'], badge:'nuevo', desc:'Manteca de karité pura para el cuidado natural de tu piel.' },
];
PRODUCTS.forEach(p=>{ p.img = `assets/img/productos/${p.id}.jpg`; });
const getProd = id => PRODUCTS.find(p=>p.id===id);

/* Descripción de muestra según rubro */
function descProd(p){
  const base = {
    'frutos-secos':'Frutos secos de primera selección, fuente natural de energía, proteínas y grasas saludables. Ideales para snack, repostería o ensaladas.',
    'semillas':'Semillas seleccionadas, ricas en fibra, omega 3 y antioxidantes. Sumalas a tus desayunos, panificados o licuados.',
    'legumbres':'Legumbres de excelente calidad, fuente de proteína vegetal y fibra. Perfectas para guisos, ensaladas y preparaciones nutritivas.',
    'cereales':'Cereal natural de grano entero, base de una alimentación consciente y equilibrada. Versátil para el día a día.',
    'frutas':'Fruta desecada sin agregados, dulzor natural y mucha energía. Un snack saludable para toda la familia.',
    'infusiones':'Hierbas, flores y hongos naturales seleccionados a mano para infusiones aromáticas que acompañan tus momentos.',
    'especias':'Especia natural de primera calidad, aroma y sabor para realzar tus comidas e infusiones. Mejor recién molida.',
    'granolas':'Elaboración con frutos secos, semillas y cereales seleccionados. Energía y sabor para tu desayuno o snack.',
    'almacen':'Producto natural de almacén, seleccionado por su calidad y pureza para tu cocina consciente.'
  };
  return base[p.cat] || '';
}
function precioPorUnidad(p){
  const m = p.peso.match(/([\d.]+)\s*(g|kg|ml)/i); if(!m) return '';
  let val = parseFloat(m[1]); const u = m[2].toLowerCase();
  let porKg;
  if(u==='g')  porKg = p.precio/(val/1000);
  if(u==='kg') porKg = p.precio/val;
  if(u==='ml') return `${money(Math.round(p.precio/(val/1000)))} / litro`;
  return `${money(Math.round(porKg))} / kg`;
}

/* ---- Utilidades ---- */
const money = n => '$' + Number(n).toLocaleString('es-AR');
const qs  = (s,c=document)=>c.querySelector(s);
const qsa = (s,c=document)=>[...c.querySelectorAll(s)];

/* ===================== ICONOS (SVG inline) ===================== */
const IC = {
  buscar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  carrito:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>',
  mas:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  corazon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6 9 17l-5-5"/></svg>',
  wa:'<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.4 2 7.8L.3 31.6l8-2.1c2.3 1.3 4.9 2 7.7 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.3c-2.5 0-4.8-.7-6.8-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5a12.7 12.7 0 0 1-2-6.8C2.3 8.4 8.4 2.3 16 2.3S29.7 8.4 29.7 16 23.6 28.7 16 28.7zm7.5-9.6c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.3-2-1.2-1.1-2-2.4-2.3-2.8-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.8-.6-.7-.9-.7h-.7c-.2 0-.6.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.2 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.3-.3-.7-.5z"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  reloj:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  tel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7L22 6"/></svg>',
  envio:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="18.5" cy="18.5" r="2"/></svg>',
  bolsa:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>',
  tarjeta:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l1.5-5.5A8.5 8.5 0 1 1 21 11.5z"/></svg>',
  hoja:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M11 20A7 7 0 0 1 4 13c0-6 7-10 16-10 0 8-4 15-9 17z"/><path d="M4 21c2-4 5-7 9-9"/></svg>',
  ig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  fb:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>',
};

/* ===================== HEADER + FOOTER ===================== */
function buildHeader(activo){
  const link=(href,txt,act)=>`<a href="${href}" class="${act?'activo':''}">${txt}</a>`;
  return `
  <div class="aviso-maqueta">🧪 <strong>MAQUETA DE PRESENTACIÓN</strong> · Diseño real · Productos y precios de muestra para revisión</div>
  <div class="barra-superior">🌿 Envío <strong>gratis</strong> en Gualeguay en compras superiores a <strong>$20.000</strong> · Retiro en local sin costo</div>
  <header class="site-header" id="siteHeader">
    <div class="header-inner">
      <ul class="nav-menu nav-izquierda">
        ${link('index.html','Inicio',activo==='inicio')}
        ${link('tienda.html','Tienda',activo==='tienda')}
        ${link('nosotros.html','Nosotros',activo==='nosotros')}
      </ul>
      <a href="index.html" class="header-logo"><img src="assets/img/logo.png" alt="Vida Sana Almacén Natural"></a>
      <ul class="nav-menu nav-derecha">
        ${link('mayorista.html','Mayorista',activo==='mayorista')}
        ${link('contacto.html','Contacto',activo==='contacto')}
        <div class="header-iconos">
          <button class="menu-toggle" onclick="abrirMenuMobile()">${IC.menu}</button>
          <a href="tienda.html" class="icono-btn" title="Buscar">${IC.buscar}</a>
          <button class="icono-btn" onclick="abrirCarrito()" title="Carrito">
            ${IC.carrito}<span class="cart-count" id="cartCount">0</span>
          </button>
        </div>
      </ul>
    </div>
  </header>

  <div class="mobile-menu" id="mobileMenu">
    <div class="mm-head">
      <img src="assets/img/logo.png" alt="Vida Sana">
      <button class="mm-close" onclick="cerrarMenuMobile()">&times;</button>
    </div>
    <nav>
      <a href="index.html">Inicio</a>
      <a href="tienda.html">Tienda</a>
      <a href="nosotros.html">Nosotros</a>
      <a href="mayorista.html">Mayorista</a>
      <a href="contacto.html">Contacto</a>
    </nav>
  </div>`;
}

function buildFooter(){
  return `
  <footer class="site-footer">
    <div class="contenedor footer-top">
      <div class="footer-col">
        <img src="assets/img/logo.png" class="footer-logo" alt="Vida Sana">
        <p>Almacén natural en Gualeguay, Entre Ríos. Productos naturales seleccionados con amor para acompañar tu camino hacia el bienestar.</p>
        <div class="footer-redes">
          <a href="#" title="Instagram">${IC.ig}</a>
          <a href="#" title="Facebook">${IC.fb}</a>
          <a href="https://wa.me/${WA_NUM}" title="WhatsApp">${IC.wa}</a>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-tit">Tienda</div>
        <ul>
          <li><a href="tienda.html?cat=frutos-secos">Frutos secos</a></li>
          <li><a href="tienda.html?cat=legumbres">Legumbres</a></li>
          <li><a href="tienda.html?cat=cereales">Cereales y harinas</a></li>
          <li><a href="tienda.html?cat=infusiones">Infusiones y tés</a></li>
          <li><a href="tienda.html">Ver todo</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-tit">Información</div>
        <ul>
          <li><a href="nosotros.html">Nosotros</a></li>
          <li><a href="mayorista.html">Venta mayorista</a></li>
          <li><a href="contacto.html">Contacto</a></li>
          <li><a href="#">Preguntas frecuentes</a></li>
          <li><a href="#">Mi cuenta</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-tit">Contacto</div>
        <ul class="footer-contacto">
          <li>${IC.pin}<span>${NEGOCIO.dir}</span></li>
          <li>${IC.tel}<span>${NEGOCIO.tel}</span></li>
          <li>${IC.reloj}<span>${NEGOCIO.horario}</span></li>
          <li>${IC.mail}<span>${NEGOCIO.email}</span></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="inner">
        <span>© 2026 Vida Sana Almacén Natural · Todos los derechos reservados</span>
        <span>Diseño y desarrollo · <a href="https://www.wbserviceinformatica.com.ar" target="_blank" rel="noopener">WB Service</a></span>
      </div>
    </div>
  </footer>

  <a href="https://wa.me/${WA_NUM}?text=${encodeURIComponent('¡Hola Vida Sana! Quería hacerles una consulta 🌿')}" class="wa-float" target="_blank" title="Escribinos por WhatsApp">${IC.wa}</a>

  <!-- Drawer carrito -->
  <div class="overlay" id="overlay" onclick="cerrarCarrito()"></div>
  <aside class="cart-drawer" id="cartDrawer">
    <div class="cart-head">
      <h3>Tu carrito</h3>
      <button class="cart-close" onclick="cerrarCarrito()">&times;</button>
    </div>
    <div class="cart-body" id="cartBody"></div>
    <div class="cart-foot" id="cartFoot"></div>
  </aside>
  <div class="toast" id="toast">${IC.check}<span>Producto agregado al carrito</span></div>`;
}

/* ===================== CARRITO (localStorage) ===================== */
const CART_KEY = 'vs_cart';
const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || '{}');
const setCart = c => { localStorage.setItem(CART_KEY, JSON.stringify(c)); renderCart(); updateCount(); };

function addToCart(id, qty=1){
  const c = getCart(); c[id] = (c[id]||0) + qty; setCart(c);
  mostrarToast(); abrirCarrito();
}
function setQty(id, qty){
  const c = getCart(); if(qty<=0){ delete c[id]; } else { c[id]=qty; } setCart(c);
}
function removeFromCart(id){ const c=getCart(); delete c[id]; setCart(c); }
function cartCount(){ return Object.values(getCart()).reduce((a,b)=>a+b,0); }
function cartTotal(){ return Object.entries(getCart()).reduce((t,[id,q])=>{ const p=getProd(id); return t + (p?p.precio*q:0); },0); }
function updateCount(){ const el=qs('#cartCount'); if(el) el.textContent = cartCount(); }

function renderCart(){
  const body=qs('#cartBody'), foot=qs('#cartFoot'); if(!body) return;
  const cart=getCart(), ids=Object.keys(cart);
  if(!ids.length){
    body.innerHTML = `<div class="cart-vacio">${IC.carrito}<p>Tu carrito está vacío.</p><br><a href="tienda.html" class="btn btn-secundario btn-sm">Ir a la tienda</a></div>`;
    foot.innerHTML=''; return;
  }
  body.innerHTML = ids.map(id=>{
    const p=getProd(id), q=cart[id];
    return `<div class="cart-item">
      <img src="${p.img}" alt="${p.nom}">
      <div style="flex:1">
        <div class="ci-nom">${p.nom}</div>
        <div class="ci-precio">${money(p.precio)} · ${p.peso}</div>
        <div class="ci-qty">
          <button onclick="setQty('${id}',${q-1})">−</button>
          <span>${q}</span>
          <button onclick="setQty('${id}',${q+1})">+</button>
          <button class="ci-remove" onclick="removeFromCart('${id}')">Quitar</button>
        </div>
      </div>
    </div>`;
  }).join('');
  foot.innerHTML = `
    <div class="cart-subtotal"><span>Subtotal</span><strong>${money(cartTotal())}</strong></div>
    <div class="cart-envio-nota">El envío se calcula en el siguiente paso según tu zona.</div>
    <a href="carrito.html" class="btn btn-primario btn-bloque">Finalizar compra</a>
    <a href="tienda.html" class="btn btn-secundario btn-bloque" style="margin-top:8px">Seguir comprando</a>`;
}
function abrirCarrito(){ qs('#cartDrawer')?.classList.add('activo'); qs('#overlay')?.classList.add('activo'); }
function cerrarCarrito(){ qs('#cartDrawer')?.classList.remove('activo'); qs('#overlay')?.classList.remove('activo'); }
let toastT;
function mostrarToast(){ const t=qs('#toast'); if(!t) return; t.classList.add('activo'); clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove('activo'),2200); }

function abrirMenuMobile(){ qs('#mobileMenu')?.classList.add('activo'); }
function cerrarMenuMobile(){ qs('#mobileMenu')?.classList.remove('activo'); }

/* ===================== TARJETA DE PRODUCTO ===================== */
function cardProducto(p){
  const badge = p.badge==='top' ? `<span class="badge badge-top">Más vendido</span>`
             : p.badge==='nuevo' ? `<span class="badge badge-nuevo">Nuevo</span>`
             : p.badge==='oferta' ? `<span class="badge badge-oferta">Oferta</span>` : '';
  const precio = p.old
    ? `<span class="tachado">${money(p.old)}</span>${money(p.precio)}`
    : money(p.precio);
  const attrs = p.attrs.slice(0,3).map(a=>`<span class="attr-chip">${a}</span>`).join('');
  return `<article class="prod-card">
    <div class="prod-thumb">
      <div class="prod-badges">${badge}</div>
      <button class="prod-fav" title="Favorito">${IC.corazon}</button>
      <a href="producto.html?id=${p.id}"><img src="${p.img}" alt="${p.nom}" loading="lazy"></a>
    </div>
    <div class="prod-info">
      <div class="prod-cat">${catNom(p.cat)}</div>
      <h3 class="prod-nom"><a href="producto.html?id=${p.id}">${p.nom}</a></h3>
      <div class="prod-attrs">${attrs}</div>
      <div class="prod-precio-row">
        <div class="prod-precio">${precio}<span class="x-unidad">${p.peso} · ${precioPorUnidad(p)}</span></div>
        <button class="btn-agregar" onclick="addToCart('${p.id}')" title="Agregar al carrito">${IC.mas}</button>
      </div>
    </div>
  </article>`;
}

/* ===================== INICIALIZACIÓN COMÚN ===================== */
function initChrome(activo){
  const h=qs('#header-slot'); if(h) h.innerHTML = buildHeader(activo);
  const f=qs('#footer-slot'); if(f) f.innerHTML = buildFooter();
  renderCart(); updateCount();
  // Header fijo: siempre visible. Solo agrega sombra al hacer scroll.
  const hd=qs('#siteHeader');
  window.addEventListener('scroll',()=>{
    if(hd) hd.classList.toggle('scrolled', window.scrollY>10);
  });
}

/* Carrusel: botones prev/next */
function scrollCarrusel(id, dir){
  const t=qs('#'+id); if(!t) return;
  t.scrollBy({ left: dir * (t.clientWidth*0.8), behavior:'smooth' });
}
