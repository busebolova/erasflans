import { createFileRoute } from '@tanstack/react-router';
import { ClipboardCheck, Eye, FileCheck2, Gauge, PackageCheck, Ruler } from 'lucide-react';
import { CtaBand, IconCards, PageHero, Section, SectionHead, Steps } from '@/components/PageParts';
import { SITE_URL } from '@/lib/catalog';
import workshop from '@/assets/flange-workshop.jpg';

const title = 'Kalite Kontrol ve Sertifikalar | ERAS FLANŞ';
const desc = '%100 ölçüsel kontrol, EN 10204 3.1 malzeme sertifikası ve ±0.05 mm CNC toleransı ile paslanmaz flanş üretimi.';
export const Route = createFileRoute('/kalite')({
 head: () => ({ meta: [{ title }, { name: 'description', content: desc }, { property: 'og:title', content: title }, { property: 'og:description', content: desc }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'canonical', href: `${SITE_URL}/kalite` }] }),
 component: Page,
});

function Page() {
 return <main>
  <PageHero image={workshop} label={{ tr: 'KALİTE', en: 'QUALITY' }} title={{ tr: 'Kalite Kontrol', en: 'Quality Control' }} text={{ tr: 'Her flanş, sevkiyattan önce ölçüsel ve görsel olarak kontrol edilir.', en: 'Every flange is dimensionally and visually inspected before shipment.' }} />
  <Section>
   <SectionHead label={{ tr: 'GÜVENCE', en: 'ASSURANCE' }} title={{ tr: 'Kalite güvencemiz', en: 'Our quality assurance' }} />
   <IconCards items={[
    { icon: Ruler, title: { tr: '%100 ölçüsel kontrol', en: '100% dimensional inspection' }, text: { tr: 'Çap, kalınlık, delik dairesi ve bağlantı yüzeyi ölçülür.', en: 'Diameter, thickness, bolt circle and facing are measured.' } },
    { icon: FileCheck2, title: { tr: 'EN 10204 3.1 sertifika', en: 'EN 10204 3.1 certificate' }, text: { tr: 'Malzeme izlenebilirliği için test sertifikası (MTC).', en: 'Material test certificate (MTC) for traceability.' } },
    { icon: Gauge, title: { tr: '±0.05 mm tolerans', en: '±0.05 mm tolerance' }, text: { tr: 'ISO 2768-mK genel toleranslarına uygun CNC işleme.', en: 'CNC machining to ISO 2768-mK general tolerances.' } },
    { icon: Eye, title: { tr: 'Yüzey muayenesi', en: 'Surface inspection' }, text: { tr: 'Ra ≤ 3.2 µm yüzey pürüzlülüğü ve görsel kontrol.', en: 'Ra ≤ 3.2 µm roughness and visual check.' } },
    { icon: ClipboardCheck, title: { tr: 'Kayıt ve raporlama', en: 'Records and reporting' }, text: { tr: 'Talep halinde ölçüm raporu paylaşılır.', en: 'Measurement reports shared on request.' } },
    { icon: PackageCheck, title: { tr: 'Güvenli paketleme', en: 'Safe packing' }, text: { tr: 'Yüzeyleri koruyan sevkiyat ambalajı.', en: 'Shipping packaging that protects surfaces.' } },
   ]} />
  </Section>
  <Section tone="muted">
   <SectionHead label={{ tr: 'KONTROL ADIMLARI', en: 'INSPECTION STEPS' }} title={{ tr: 'Malzemeden sevkiyata', en: 'From material to shipment' }} />
   <Steps items={[
    { title: { tr: 'Giriş kontrolü', en: 'Incoming inspection' }, text: { tr: 'Malzeme sertifikası ve kalite doğrulaması.', en: 'Material certificate and grade verification.' } },
    { title: { tr: 'Proses kontrolü', en: 'In-process control' }, text: { tr: 'İşleme sırasında kritik ölçüler kontrol edilir.', en: 'Critical dimensions checked during machining.' } },
    { title: { tr: 'Final kontrol', en: 'Final inspection' }, text: { tr: 'Tüm ölçüler ve yüzey son kez kontrol edilir.', en: 'All dimensions and surfaces checked a final time.' } },
   ]} />
  </Section>
  <CtaBand />
 </main>;
}
