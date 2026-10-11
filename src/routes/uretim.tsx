import { createFileRoute } from '@tanstack/react-router';
import { CtaBand, PageHero, Section, SectionHead, Stats, Steps, useBi } from '@/components/PageParts';
import { SITE_URL } from '@/lib/catalog';
import cnc from '@/assets/cnc.asset.json';
import workshop from '@/assets/flange-workshop.jpg';

const title = 'Hassas CNC Flanş Üretimi | ERAS FLANŞ';
const desc = 'CNC işleme altyapısıyla DN25–DN3000 paslanmaz çelik flanş üretimi ve teknik resme göre özel üretim.';
export const Route = createFileRoute('/uretim')({
 head: () => ({ meta: [{ title }, { name: 'description', content: desc }, { property: 'og:title', content: title }, { property: 'og:description', content: desc }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'canonical', href: `${SITE_URL}/uretim` }] }),
 component: Page,
});

function Page() {
 const L = useBi();
 return <main>
  <PageHero image={cnc.url} label={{ tr: 'ÜRETİM', en: 'PRODUCTION' }} title={{ tr: 'Hassas CNC Üretim', en: 'Precision CNC Production' }} text={{ tr: 'Ham malzemeden sevkiyata kadar kontrollü üretim süreci.', en: 'A controlled process from raw material to shipment.' }} />
  <Stats items={[{ value: '±0.05 mm', label: { tr: 'CNC toleransı', en: 'CNC tolerance' } }, { value: 'DN3000', label: { tr: 'Maksimum çap', en: 'Max. diameter' } }, { value: 'Ra 3.2', label: { tr: 'Yüzey kalitesi', en: 'Surface finish' } }, { value: '%100', label: { tr: 'Ölçü kontrolü', en: 'Inspection' } }]} />
  <Section>
   <SectionHead label={{ tr: 'SÜREÇ', en: 'PROCESS' }} title={{ tr: 'Üretim adımlarımız', en: 'Our production steps' }} />
   <Steps items={[
    { title: { tr: 'Teknik inceleme', en: 'Technical review' }, text: { tr: 'Talebiniz, standart veya teknik resminiz mühendislerimizce incelenir.', en: 'Our engineers review your request, standard or drawing.' } },
    { title: { tr: 'Malzeme tedariki', en: 'Material supply' }, text: { tr: 'Sertifikalı 304, 316L veya 310S paslanmaz levha ve çubuk.', en: 'Certified 304, 316L or 310S stainless plate and bar.' } },
    { title: { tr: 'Kesim', en: 'Cutting' }, text: { tr: 'Plazma, lazer veya testere ile hassas kesim.', en: 'Precision cutting by plasma, laser or saw.' } },
    { title: { tr: 'CNC işleme', en: 'CNC machining' }, text: { tr: 'Torna ve işleme merkezlerinde yüzey, delik ve diş işleme.', en: 'Facing, drilling and threading on lathes and machining centres.' } },
    { title: { tr: 'Kalite kontrol', en: 'Quality control' }, text: { tr: '%100 ölçüsel kontrol ve yüzey muayenesi.', en: '100% dimensional and surface inspection.' } },
    { title: { tr: 'Paketleme ve sevkiyat', en: 'Packing and shipping' }, text: { tr: 'Korumalı paketleme, DAP / FCA teslimat.', en: 'Protective packing, DAP / FCA delivery.' } },
   ]} />
  </Section>
  <Section tone="muted">
   <div className="page-split"><img src={workshop} alt={L({ tr: 'CNC tezgâhında işlenmiş paslanmaz flanşlar', en: 'Stainless flanges machined on CNC' })} className="page-image" loading="lazy" />
    <div><SectionHead label={{ tr: 'ÖZEL ÜRETİM', en: 'CUSTOM PRODUCTION' }} title={{ tr: 'Teknik resminize göre üretim', en: 'Made to your drawing' }} text={{ tr: 'Standart ürünlerin yanı sıra teknik çiziminize uygun özel ölçü ve geometrilerde üretim seçenekleri sunuyoruz. PDF, DWG veya STEP dosyanızı gönderin.', en: 'Besides standard products, we produce custom sizes and geometries to your drawing. Send your PDF, DWG or STEP file.' }} /></div>
   </div>
  </Section>
  <CtaBand />
 </main>;
}
