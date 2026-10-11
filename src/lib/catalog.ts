import duz from '@/assets/duz-photo.jpg';
import boyunlu from '@/assets/boyunlu-photo.jpg';
import hareketli from '@/assets/hareketli-photo.jpg';
import disli from '@/assets/disli-photo.jpg';
import kor from '@/assets/kor-photo.jpg';
import jis from '@/assets/jis-photo.jpg';
import egzoz from '@/assets/egzoz-photo.jpg';
import kare from '@/assets/kare-photo.jpg';
import dublin from '@/assets/dublin-photo.jpg';
import yaka from '@/assets/yaka-photo.jpg';

export const SITE_URL = 'https://www.erasflans.com';
export const company = { name:'ERAS FLANŞ', legalName:'Eras Makine', phone: '0506 098 14 05', phoneHref: '+905060981405', email: 'info@erflans.com', address: 'Vezir Çiftliği Mah. Dülger Sok. No:18/1', district:'Başiskele', city:'Kocaeli', postalCode:'41180', location: 'Başiskele / Kocaeli' };

/** Shared technical specification for all stainless flange types. */
export const specs = {
 size: 'DN25 – DN3000',
 pressure: 'PN6 · PN10 · PN16 · PN25 · PN40',
 grades: 'AISI 304 / 304L · 316 / 316L · 310S',
 wnr: '1.4301 · 1.4307 · 1.4401 · 1.4404 · 1.4845',
 finish: 'Ra ≤ 3.2 µm',
 tolerance: 'ISO 2768-mK / ±0.05 mm (CNC)',
 certificate: 'EN 10204 3.1',
};

type Faq = { q:string; a:string };
type P = { id:string; slug:string; name:string; nameEn:string; standard:string; image:string; tagline:string; taglineEn:string; description:string; descriptionEn:string; uses:string[]; usesEn:string[]; faq:Faq[]; faqEn:Faq[] };

const commonFaq = (n:string):Faq[] => [
 { q:`${n} hangi malzemelerden üretilir?`, a:`${n}; AISI 304/304L (1.4301/1.4307), AISI 316/316L (1.4401/1.4404) ve yüksek sıcaklık için AISI 310S (1.4845) paslanmaz çelik kalitelerinde üretilir. EN 10204 3.1 malzeme sertifikası sağlanabilir.` },
 { q:`${n} hangi ölçü ve basınç sınıflarında üretilir?`, a:`DN25'ten DN3000'e kadar, PN6, PN10, PN16, PN25 ve PN40 basınç sınıflarında; EN 1092-1, DIN, ANSI B16.5 ve JIS normlarına veya müşteri teknik resmine göre üretilir.` },
 { q:`${n} için nasıl teklif alırım?`, a:`Çap (DN), basınç sınıfı (PN), malzeme kalitesi, adet ve varsa teknik resmi (PDF, DWG, STEP) info@erflans.com adresine gönderin veya 0506 098 14 05 numarasından WhatsApp ile ulaşın.` },
];
const commonFaqEn = (n:string):Faq[] => [
 { q:`What materials is the ${n} made from?`, a:`The ${n} is manufactured in AISI 304/304L (1.4301/1.4307), AISI 316/316L (1.4401/1.4404) and, for high temperatures, AISI 310S (1.4845) stainless steel. EN 10204 3.1 material certificates are available.` },
 { q:`Which sizes and pressure ratings are available?`, a:`From DN25 up to DN3000 in PN6, PN10, PN16, PN25 and PN40, manufactured to EN 1092-1, DIN, ANSI B16.5, JIS or to the customer's drawing.` },
 { q:`How do I request a quote?`, a:`Send the size (DN), pressure rating (PN), steel grade, quantity and any drawing (PDF, DWG, STEP) to info@erflans.com or contact +90 506 098 14 05 on WhatsApp.` },
];

const raw: Omit<P,'faq'|'faqEn'>[] = [
 { id:'duz', slug:'duz-flans', name:'Düz Flanş', nameEn:'Flat Flange', standard:'EN 1092-1 / DIN', image:duz,
  tagline:'Düz yüzeyli paslanmaz çelik bağlantı flanşı', taglineEn:'Flat-face stainless steel connection flange',
  description:'Düz flanş (plate / flat flange), boru ucuna geçirilip kaynaklanan, düz yüzeyli paslanmaz çelik bağlantı elemanıdır. Düşük ve orta basınçlı su, hava, gıda ve kimyasal hatlarında ekonomik ve güvenilir bir çözümdür. EN 1092-1 Tip 01 ve DIN normlarına uygun, CNC tezgâhlarında hassas olarak işlenir.',
  descriptionEn:'A flat (plate) flange is a flat-face stainless steel connection that slides over the pipe end and is welded in place. It is an economical, reliable choice for low- and medium-pressure water, air, food and chemical lines. Precision CNC machined to EN 1092-1 Type 01 and DIN.',
  uses:['Su ve atık su hatları','Gıda ve içecek tesisleri','Havalandırma ve basınçlı hava','Tank ve ekipman bağlantıları'], usesEn:['Water and wastewater lines','Food and beverage plants','Ventilation and compressed air','Tank and equipment connections'] },
 { id:'boyunlu', slug:'kaynak-boyunlu-flans', name:'Kaynak Boyunlu Flanş', nameEn:'Weld Neck Flange', standard:'EN 1092-1 / ANSI B16.5', image:boyunlu,
  tagline:'Yüksek basınç ve sıcaklık için alın kaynaklı flanş', taglineEn:'Butt-weld flange for high pressure and temperature',
  description:'Kaynak boyunlu flanş, konik boyun yapısıyla boruya alın kaynağı ile bağlanır ve gerilimi boru hattına dengeli dağıtır. Yüksek basınç, yüksek sıcaklık ve titreşimli hatlarda en güvenli flanş tipidir. EN 1092-1 Tip 11 ve ANSI B16.5 Weld Neck standartlarında üretilir.',
  descriptionEn:'A weld neck flange is butt-welded to the pipe through its tapered hub, distributing stress evenly into the line. It is the safest flange type for high-pressure, high-temperature and vibrating systems. Made to EN 1092-1 Type 11 and ANSI B16.5 Weld Neck.',
  uses:['Petrokimya ve rafineri','Enerji santralleri','Buhar ve sıcak akışkan hatları','LPG ve basınçlı tanklar'], usesEn:['Petrochemical and refineries','Power plants','Steam and hot-fluid lines','LPG and pressure vessels'] },
 { id:'hareketli', slug:'hareketli-flans', name:'Hareketli Flanş', nameEn:'Slip-On (Loose) Flange', standard:'EN 1092-1 / DIN', image:hareketli,
  tagline:'Yaka ile kullanılan döner (lap-joint) flanş', taglineEn:'Lap-joint loose flange used with a collar',
  description:'Hareketli flanş (loose / lap-joint flange), boruya kaynaklanan yaka üzerinde serbestçe döner; cıvata deliklerinin kolayca hizalanmasını sağlar. Sık söküm gerektiren ve paslanmaz yaka ile maliyet düşürülmek istenen hatlarda tercih edilir. EN 1092-1 Tip 02/04 standardına uygundur.',
  descriptionEn:'A loose (lap-joint) flange rotates freely on a collar welded to the pipe, making bolt-hole alignment easy. Preferred for lines that are frequently dismantled. Conforms to EN 1092-1 Type 02/04.',
  uses:['Sık bakım yapılan hatlar','Gıda ve ilaç prosesleri','Arıtma tesisleri','Gemi boru sistemleri'], usesEn:['Lines needing frequent maintenance','Food and pharma processes','Treatment plants','Marine piping'] },
 { id:'disli', slug:'disli-flans', name:'Dişli Flanş', nameEn:'Threaded Flange', standard:'EN 1092-1 / ANSI B16.5', image:disli,
  tagline:'Kaynak gerektirmeyen vidalı bağlantı', taglineEn:'Screwed connection without welding',
  description:'Dişli flanş, iç diş açılmış göbeği sayesinde dişli boruya kaynaksız monte edilir. Kaynağın riskli veya mümkün olmadığı alanlarda, küçük çaplı ve düşük basınçlı hatlarda hızlı montaj sağlar. BSP, NPT veya metrik diş seçenekleriyle EN 1092-1 Tip 13 ve ANSI B16.5 Threaded standartlarında üretilir.',
  descriptionEn:'A threaded flange screws onto a threaded pipe without welding. Ideal where welding is risky or impossible, providing fast assembly on small-bore, low-pressure lines. Available with BSP, NPT or metric threads to EN 1092-1 Type 13 and ANSI B16.5.',
  uses:['Patlayıcı ortamlar','Yangın söndürme hatları','Küçük çaplı tesisat','Ölçüm ve enstrüman hatları'], usesEn:['Explosive atmospheres','Fire-fighting lines','Small-bore installations','Instrumentation lines'] },
 { id:'kor', slug:'kor-flans', name:'Kör Flanş', nameEn:'Blind Flange', standard:'EN 1092-1 / ANSI B16.5', image:kor,
  tagline:'Boru hattı uçlarını kapatan delik­siz flanş', taglineEn:'Solid flange for closing pipe ends',
  description:'Kör flanş, merkez deliği bulunmayan ve boru hattı uçlarını, vana ve ekipman ağızlarını kapatmak için kullanılan paslanmaz çelik flanştır. Basınç testlerinde ve ileride genişletilecek hatlarda sızdırmaz kapama sağlar. EN 1092-1 Tip 05 ve ANSI B16.5 Blind standartlarında üretilir.',
  descriptionEn:'A blind flange has no centre bore and seals pipe ends, valve and vessel openings. Used for pressure testing and for lines planned for future extension. Made to EN 1092-1 Type 05 and ANSI B16.5 Blind.',
  uses:['Hat sonu kapatma','Basınç testleri','Tank ve kazan ağızları','Gelecek genişleme noktaları'], usesEn:['Line end closures','Pressure testing','Tank and boiler nozzles','Future tie-in points'] },
 { id:'jis', slug:'jis-normu-flans', name:'JIS Normu Flanş', nameEn:'JIS Standard Flange', standard:'JIS B2220', image:jis,
  tagline:'Japon endüstri standardında paslanmaz flanş', taglineEn:'Stainless flange to Japanese Industrial Standard',
  description:'JIS normu flanş, Japon endüstri standardı JIS B2220 (5K, 10K, 16K, 20K) ölçülerine uygun paslanmaz çelik flanştır. Uzak Doğu menşeli gemi, makine ve ekipmanların yedek parça ve bağlantılarında kullanılır.',
  descriptionEn:'A JIS flange is a stainless steel flange dimensioned to Japanese Industrial Standard JIS B2220 (5K, 10K, 16K, 20K). Used for connections and spares on Far-East-built ships, machinery and equipment.',
  uses:['Gemi ve tersane','Japon menşeli makineler','Soğutma sistemleri','İhracat projeleri'], usesEn:['Ships and shipyards','Japanese-built machinery','Cooling systems','Export projects'] },
 { id:'egzoz', slug:'egzoz-flans', name:'Egzoz Flanş', nameEn:'Exhaust Flange', standard:'Teknik resme göre', image:egzoz,
  tagline:'Isıya dayanıklı egzoz bağlantı flanşı', taglineEn:'Heat-resistant exhaust connection flange',
  description:'Egzoz flanşı, motor ve jeneratör egzoz hatlarında yüksek sıcaklık ve titreşime dayanacak şekilde AISI 304 veya 310S paslanmaz çelikten üretilir. Oval, iki cıvatalı, üç cıvatalı ve özel geometrilerde teknik resme göre CNC ile işlenir.',
  descriptionEn:'Exhaust flanges are made from AISI 304 or 310S stainless steel to withstand high temperature and vibration in engine and generator exhaust lines. Oval, two-bolt, three-bolt and custom shapes CNC machined to drawing.',
  uses:['Araç ve iş makinesi egzozu','Jeneratör setleri','Gemi motorları','Endüstriyel brülörler'], usesEn:['Vehicle and machinery exhausts','Generator sets','Marine engines','Industrial burners'] },
 { id:'kare', slug:'kare-flans', name:'Kare Flanş', nameEn:'Square Flange', standard:'Teknik resme göre', image:kare,
  tagline:'Kompakt kare profilli bağlantı flanşı', taglineEn:'Compact square-profile connection flange',
  description:'Kare flanş, dört köşe cıvata delikli kare gövdesiyle hidrolik, pnömatik ve makine imalatında kompakt bağlantı sağlar. Ölçü, delik dairesi ve conta yuvası müşteri teknik resmine göre paslanmaz çelikten CNC ile işlenir.',
  descriptionEn:'A square flange with four corner bolt holes provides compact connections in hydraulics, pneumatics and machine building. Dimensions, bolt pattern and seal groove are CNC machined in stainless steel to the customer drawing.',
  uses:['Hidrolik sistemler','Pompa ve kompresörler','Makine imalatı','Kanal ve ekipman bağlantıları'], usesEn:['Hydraulic systems','Pumps and compressors','Machine building','Duct and equipment connections'] },
 { id:'dublin', slug:'dublin-flans', name:'Dublin Flanş', nameEn:'Dublin Flange', standard:'DIN 11851', image:dublin,
  tagline:'Gıda sınıfı sökülebilir rakor bağlantısı', taglineEn:'Food-grade detachable union connection',
  description:'Dublin (süt rakoru) flanş, DIN 11851 standardında somunlu ve sökülebilir hijyenik bağlantıdır. Süt, gıda, içecek ve ilaç tesislerinde hızlı söküm ve kolay temizlik için AISI 304 ve 316L paslanmaz çelikten üretilir.',
  descriptionEn:'A Dublin (dairy union) flange is a detachable hygienic connection with a threaded nut to DIN 11851. Made in AISI 304 and 316L stainless steel for quick release and easy cleaning in dairy, food, beverage and pharma plants.',
  uses:['Süt ve süt ürünleri','Gıda tankerleri','İçecek dolum hatları','İlaç ve kozmetik'], usesEn:['Dairy','Food tankers','Beverage filling lines','Pharma and cosmetics'] },
 { id:'yaka', slug:'yaka-flans', name:'Yaka Flanş', nameEn:'Collar Flange', standard:'EN 1092-1 / DIN', image:yaka,
  tagline:'Hareketli flanşla kullanılan boyunlu yaka', taglineEn:'Hub collar used with loose flanges',
  description:'Yaka flanş (stub end / göbekli yaka), boruya kaynaklanarak hareketli flanş ile birlikte kullanılır. Akışkanla temas eden kısım paslanmaz olduğundan, karbon çelik hareketli flanşla birleştirilerek maliyet avantajı sağlar. EN 1092-1 Tip 32/34 ve DIN normlarına uygundur.',
  descriptionEn:'A collar flange (stub end) is welded to the pipe and used together with a loose flange. Only the wetted part is stainless, so it can be combined with a carbon-steel loose flange for cost savings. Conforms to EN 1092-1 Type 32/34 and DIN.',
  uses:['Paslanmaz proses hatları','Kimya tesisleri','Su arıtma','Tersane boru sistemleri'], usesEn:['Stainless process lines','Chemical plants','Water treatment','Shipyard piping'] },
 { id:'en1092', slug:'en-1092-1-paslanmaz-flans', name:'EN 1092-1 Paslanmaz Flanş', nameEn:'EN 1092-1 Stainless Flange', standard:'EN 1092-1', image:duz,
  tagline:'Avrupa standardında paslanmaz çelik flanş', taglineEn:'European-standard stainless steel flange',
  description:'EN 1092-1 paslanmaz flanş, Avrupa normuna uygun ölçü, delik dairesi ve basınç sınıflarında (PN6–PN40) üretilir. Tip 01, 02, 05, 11, 13 ve 32/34 seçenekleriyle AB projelerinde doğrudan kullanılabilir.',
  descriptionEn:'EN 1092-1 stainless flanges are manufactured to European dimensions, bolt circles and pressure classes (PN6–PN40). Available as Types 01, 02, 05, 11, 13 and 32/34 for direct use in EU projects.',
  uses:['AB boru hattı projeleri','Su ve enerji tesisleri','Endüstriyel proses hatları','Tank ve ekipman bağlantıları'], usesEn:['EU pipeline projects','Water and energy plants','Industrial process lines','Tank and equipment connections'] },
 { id:'ansi', slug:'ansi-b16-5-paslanmaz-flans', name:'ANSI B16.5 Paslanmaz Flanş', nameEn:'ANSI B16.5 Stainless Flange', standard:'ANSI B16.5', image:boyunlu,
  tagline:'Amerikan standardında paslanmaz çelik flanş', taglineEn:'American-standard stainless steel flange',
  description:'ANSI B16.5 paslanmaz flanş, ASME/ANSI ölçülerine göre Class 150, 300 ve üzeri basınç sınıflarında üretilir. Weld neck, slip-on, blind ve threaded tiplerinde petrol, gaz ve kimya projelerinde kullanılır.',
  descriptionEn:'ANSI B16.5 stainless flanges are made to ASME/ANSI dimensions in Class 150, 300 and higher. Available as weld neck, slip-on, blind and threaded for oil, gas and chemical projects.',
  uses:['Petrol ve gaz','Kimya tesisleri','Orta Doğu ve Körfez projeleri','Basınçlı sistemler'], usesEn:['Oil and gas','Chemical plants','MENA and GCC projects','Pressure systems'] },
 { id:'din', slug:'din-paslanmaz-flans', name:'DIN Paslanmaz Flanş', nameEn:'DIN Stainless Flange', standard:'DIN 2501 / DIN 2576', image:hareketli,
  tagline:'Alman standardında paslanmaz çelik flanş', taglineEn:'German-standard stainless steel flange',
  description:'DIN paslanmaz flanş, DIN 2501, 2573, 2576, 2633 ve 2642 gibi Alman normlarına uygun ölçülerde üretilir. Mevcut DIN tesisatlarının bakım ve yenilemesinde birebir uyum sağlar.',
  descriptionEn:'DIN stainless flanges are made to German norms such as DIN 2501, 2573, 2576, 2633 and 2642, giving an exact fit for maintaining and renewing existing DIN installations.',
  uses:['Makine imalatı','Mevcut tesis yenileme','Gıda ve içecek','Isıtma ve soğutma'], usesEn:['Machine building','Plant renewal','Food and beverage','Heating and cooling'] },
 { id:'ozel', slug:'ozel-uretim-paslanmaz-flans', name:'Özel Üretim Paslanmaz Flanş', nameEn:'Custom Stainless Flange', standard:'Teknik resme göre', image:kare,
  tagline:'Teknik resme göre üretilen paslanmaz flanş', taglineEn:'Stainless flange made to drawing',
  description:'Özel üretim paslanmaz flanş, PDF, DWG veya STEP teknik resminize göre CNC tezgâhlarında işlenir. Standart dışı çap, delik düzeni, kalınlık ve conta yuvası gerektiren projeler için tek parça veya seri üretim yapılır.',
  descriptionEn:'Custom stainless flanges are CNC machined from your PDF, DWG or STEP drawing. One-off or series production for projects needing non-standard diameters, bolt patterns, thicknesses or seal grooves.',
  uses:['Makine ve ekipman üreticileri','Gemi ve tersane','Enerji projeleri','Prototip ve yedek parça'], usesEn:['Machine and equipment makers','Ships and shipyards','Energy projects','Prototypes and spares'] },
];

export const products: P[] = raw.map(p => ({ ...p, faq: commonFaq(p.name), faqEn: commonFaqEn(p.nameEn) }));
export type Product = P;
export const productBySlug = (slug:string) => products.find(p => p.slug === slug);

export const materials = [
 { name:'304 / 304L', label:'Standart', description:'Genel endüstriyel uygulamalarda tercih edilen paslanmaz çelik. Projenize uygun kalite ve ölçülerle üretim.' },
 { name:'316 / 316L', label:'Yüksek korozyon direnci', description:'Molibden içeren paslanmaz çelik; korozyon dayanımının ön planda olduğu uygulamalar için tercih edilir.' },
 { name:'Diğer Kaliteler', label:'Talebe göre özel üretim', description:'AISI 310 dahil farklı malzeme kaliteleri ve teknik çiziminize uygun özel üretim seçenekleri için iletişime geçin.' },
];
export function quotationUrl(name:string,email:string,product:string,message:string,language:'tr'|'en'='tr') {
 const subject = `${product} – ${language==='en'?'Quote request':'Teklif talebi'}`;
 const body = language==='en' ? `Name / Company: ${name}\nEmail: ${email}\nProduct: ${product}\n\n${message}` : `Ad Soyad / Firma: ${name}\nE-posta: ${email}\nÜrün: ${product}\n\n${message}`;
 return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** schema.org Organization / manufacturer, reused in every JSON-LD block. */
export const organizationLd = {
 '@type':['Organization','LocalBusiness'], '@id':`${SITE_URL}/#org`, name:company.name, legalName:company.legalName, url:SITE_URL, email:company.email, telephone:company.phoneHref,
 address:{ '@type':'PostalAddress', streetAddress:company.address, addressLocality:company.district, addressRegion:company.city, postalCode:company.postalCode, addressCountry:'TR' },
 areaServed:'Worldwide', knowsAbout:['Paslanmaz çelik flanş','Stainless steel flange','EN 1092-1','ANSI B16.5','DIN','JIS B2220','CNC machining'],
};

export function productLd(p:P) {
 const url = `${SITE_URL}/urunler/${p.slug}`;
 return { '@context':'https://schema.org', '@graph':[
  organizationLd,
  { '@type':'Product', '@id':`${url}#product`, name:`Paslanmaz ${p.name} (${p.nameEn})`, alternateName:[p.nameEn, `Stainless steel ${p.nameEn.toLowerCase()}`], description:p.description, url, image:`${SITE_URL}${p.image}`, category:'Stainless steel flanges', material:specs.grades,
   brand:{ '@type':'Brand', name:company.name }, manufacturer:{ '@id':`${SITE_URL}/#org` },
   additionalProperty:[
    { '@type':'PropertyValue', name:'Standart', value:p.standard },
    { '@type':'PropertyValue', name:'Ölçü aralığı', value:specs.size },
    { '@type':'PropertyValue', name:'Basınç sınıfı', value:specs.pressure },
    { '@type':'PropertyValue', name:'Malzeme (W.Nr.)', value:specs.wnr },
    { '@type':'PropertyValue', name:'Yüzey', value:specs.finish },
    { '@type':'PropertyValue', name:'Tolerans', value:specs.tolerance },
    { '@type':'PropertyValue', name:'Sertifika', value:specs.certificate },
   ],
   offers:{ '@type':'Offer', url, availability:'https://schema.org/InStock', priceSpecification:{ '@type':'PriceSpecification', priceCurrency:'TRY', description:'Fiyat talebe göre teklif ile belirlenir' }, seller:{ '@id':`${SITE_URL}/#org` } } },
  { '@type':'BreadcrumbList', itemListElement:[
   { '@type':'ListItem', position:1, name:'Ana Sayfa', item:SITE_URL },
   { '@type':'ListItem', position:2, name:'Ürünler', item:`${SITE_URL}/#urunler` },
   { '@type':'ListItem', position:3, name:p.name, item:url } ] },
  { '@type':'FAQPage', mainEntity:p.faq.map(f=>({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })) },
 ] };
}

export function homeLd() {
 return { '@context':'https://schema.org', '@graph':[
  organizationLd,
  { '@type':'WebSite', '@id':`${SITE_URL}/#site`, url:SITE_URL, name:company.name, inLanguage:['tr','en'], publisher:{ '@id':`${SITE_URL}/#org` } },
  { '@type':'ItemList', name:'Paslanmaz Çelik Flanş Çeşitleri', itemListElement:products.map((p,i)=>({ '@type':'ListItem', position:i+1, url:`${SITE_URL}/urunler/${p.slug}`, name:p.name })) },
 ] };
}
