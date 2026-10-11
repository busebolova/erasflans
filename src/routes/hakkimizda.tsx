import { createFileRoute } from '@tanstack/react-router';
import { Award, Factory, Globe2, Handshake, Ruler, ShieldCheck } from 'lucide-react';
import { CtaBand, IconCards, PageHero, Section, SectionHead, Stats, useBi } from '@/components/PageParts';
import { SITE_URL } from '@/lib/catalog';
import workshop from '@/assets/flange-workshop.jpg';
import cnc from '@/assets/cnc.asset.json';

const title = 'Hakkımızda | ERAS FLANŞ – Eras Makine';
const desc = 'ERAS FLANŞ, Eras Makine bünyesinde Kocaeli Başiskele’de paslanmaz çelik flanş üretimine odaklanır.';
export const Route = createFileRoute('/hakkimizda')({
 head: () => ({ meta: [{ title }, { name: 'description', content: desc }, { property: 'og:title', content: title }, { property: 'og:description', content: desc }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'canonical', href: `${SITE_URL}/hakkimizda` }] }),
 component: Page,
});

function Page() {
 const L = useBi();
 return <main>
   <PageHero image={workshop} label={{ tr: 'HAKKIMIZDA', en: 'ABOUT US' }} title={{ tr: 'Türkiye’de üretilir, dünyaya tedarik edilir', en: 'Engineered in Türkiye. Delivered worldwide.' }} text={{ tr: 'ERAS FLANŞ, Eras Makine bünyesinde Kocaeli Başiskele’de paslanmaz çelik flanş üretir.', en: 'ERAS FLANŞ manufactures stainless steel flanges within Eras Makine in Başiskele, Kocaeli.' }} />
   <Stats items={[{ value: 'DN25–3000', label: { tr: 'Üretim aralığı', en: 'Production range' } }, { value: '15+', label: { tr: 'Yıllık tecrübe', en: 'Years of experience' } }, { value: '1000+', label: { tr: 'Tamamlanan proje', en: 'Projects delivered' } }, { value: '20+', label: { tr: 'İhracat ülkesi', en: 'Export countries' } }]} />
   <section className="container"><p className="export-strip">{L({ tr: 'İhracat: Almanya · Hollanda · BAE · Suudi Arabistan · Polonya · İtalya', en: 'Exporting to Germany · Netherlands · UAE · Saudi Arabia · Poland · Italy' })}</p></section>
  <Section>
   <div className="page-split">
    <div><SectionHead label={{ tr: 'BİZ KİMİZ', en: 'WHO WE ARE' }} title={{ tr: 'Güçlü altyapı, global tedarik', en: 'Strong infrastructure, global supply' }} />
      <div className="info-copy"><p>{L({ tr: 'ERAS FLANŞ, Eras Makine bünyesindeki tesisinde paslanmaz çelik flanş üretir. EN 1092-1, DIN, ANSI B16.5 ve JIS standartlarında; AISI 304/304L, 316/316L ve 310S kalitelerde DN25’ten DN3000’e kadar flanş tedarik ederiz.', en: 'ERAS FLANŞ manufactures stainless steel flanges at our facility within Eras Makine. We supply flanges to EN 1092-1, DIN, ANSI B16.5 and JIS in AISI 304/304L, 316/316L and 310S, from DN25 up to DN3000.' })}</p>
      <p>{L({ tr: 'CNC işleme altyapımız ve sıkı kalite kontrolümüzle denizcilik, enerji, makine, kimya, gıda ve altyapı sektörlerine Avrupa ve Orta Doğu’da hizmet veriyoruz.', en: 'Our CNC machining capability and stringent quality control let us serve the marine, energy, machinery, chemical, food and infrastructure sectors across Europe and the Middle East.' })}</p></div></div>
    <img src={cnc.url} alt={L({ tr: 'CNC flanş üretim tezgâhı', en: 'CNC flange machining centre' })} className="page-image" loading="lazy" />
   </div>
  </Section>
  <Section tone="muted">
   <SectionHead label={{ tr: 'DEĞERLERİMİZ', en: 'OUR VALUES' }} title={{ tr: 'Neden ERAS FLANŞ?', en: 'Why ERAS FLANŞ?' }} />
   <IconCards items={[
    { icon: Ruler, title: { tr: 'Hassas işleme', en: 'Precision machining' }, text: { tr: 'CNC tezgâhlarda ±0.05 mm toleransla üretim.', en: 'CNC production with ±0.05 mm tolerance.' } },
    { icon: ShieldCheck, title: { tr: 'Sertifikalı malzeme', en: 'Certified material' }, text: { tr: 'EN 10204 3.1 malzeme sertifikası ile izlenebilirlik.', en: 'Traceability with EN 10204 3.1 certificates.' } },
    { icon: Factory, title: { tr: 'Özel üretim', en: 'Custom production' }, text: { tr: 'PDF, DWG, STEP teknik resminize göre üretim.', en: 'Made to your PDF, DWG or STEP drawing.' } },
    { icon: Globe2, title: { tr: 'İhracat', en: 'Export' }, text: { tr: 'AB, Orta Doğu ve Körfez ülkelerine sevkiyat.', en: 'Shipping to the EU, MENA and GCC.' } },
    { icon: Award, title: { tr: 'Standartlara uygunluk', en: 'Standards compliance' }, text: { tr: 'EN 1092-1, DIN, ANSI B16.5 ve JIS normları.', en: 'EN 1092-1, DIN, ANSI B16.5 and JIS.' } },
    { icon: Handshake, title: { tr: 'Teknik destek', en: 'Technical support' }, text: { tr: 'Projenize uygun flanş seçiminde mühendislik desteği.', en: 'Engineering support in choosing the right flange.' } },
   ]} />
  </Section>
  <CtaBand />
 </main>;
}
