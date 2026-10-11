import { createFileRoute } from '@tanstack/react-router';
import { BookOpen, FileText, Flag, Globe2, Landmark, PenTool } from 'lucide-react';
import { CtaBand, IconCards, PageHero, Section, SectionHead, useBi } from '@/components/PageParts';
import { SITE_URL, specs } from '@/lib/catalog';
import cnc from '@/assets/cnc.asset.json';

const title = 'Uluslararası Flanş Standartları | ERAS FLANŞ';
const desc = 'EN 1092-1, DIN, ANSI B16.5 / ASME ve JIS B2220 standartlarında PN6–PN40 paslanmaz çelik flanş üretimi.';
export const Route = createFileRoute('/standartlar')({
 head: () => ({ meta: [{ title }, { name: 'description', content: desc }, { property: 'og:title', content: title }, { property: 'og:description', content: desc }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'canonical', href: `${SITE_URL}/standartlar` }] }),
 component: Page,
});

const pressure = [
 ['PN6', '6 bar'], ['PN10', '10 bar'], ['PN16', '16 bar'], ['PN25', '25 bar'], ['PN40', '40 bar'],
];

function Page() {
 const L = useBi();
 return <main>
  <PageHero image={cnc.url} label={{ tr: 'STANDARTLAR', en: 'STANDARDS' }} title={{ tr: 'Uluslararası Standartlara Uygun Üretim', en: 'Manufactured to International Standards' }} text={{ tr: 'Avrupa, Amerikan, Alman ve Japon normlarında paslanmaz çelik flanş.', en: 'Stainless steel flanges to European, American, German and Japanese norms.' }} />
  <Section>
   <SectionHead label={{ tr: 'NORMLAR', en: 'NORMS' }} title={{ tr: 'Ürettiğimiz flanş standartları', en: 'Flange standards we manufacture' }} />
   <IconCards items={[
    { icon: Flag, title: { tr: 'EN 1092-1', en: 'EN 1092-1' }, text: { tr: 'Avrupa flanş standardı; Tip 01, 02, 05, 11, 13 ve 32/34.', en: 'European flange standard; Types 01, 02, 05, 11, 13 and 32/34.' } },
    { icon: Landmark, title: { tr: 'DIN', en: 'DIN' }, text: { tr: 'Alman normları; DIN 2576, DIN 2527, DIN 11851 (süt rakoru).', en: 'German norms; DIN 2576, DIN 2527, DIN 11851 (dairy union).' } },
    { icon: Globe2, title: { tr: 'ANSI B16.5 / ASME', en: 'ANSI B16.5 / ASME' }, text: { tr: 'Amerikan standardı; Class 150 ve 300 flanşlar.', en: 'American standard; Class 150 and 300 flanges.' } },
    { icon: BookOpen, title: { tr: 'JIS B2220', en: 'JIS B2220' }, text: { tr: 'Japon standardı; 5K, 10K, 16K, 20K.', en: 'Japanese standard; 5K, 10K, 16K, 20K.' } },
    { icon: PenTool, title: { tr: 'Teknik resme göre', en: 'Made to drawing' }, text: { tr: 'Standart dışı ölçü ve geometrilerde özel üretim.', en: 'Custom production for non-standard sizes and shapes.' } },
    { icon: FileText, title: { tr: 'EN 10204 3.1', en: 'EN 10204 3.1' }, text: { tr: 'Her sevkiyatta malzeme sertifikası sağlanabilir.', en: 'Material certificate available with every shipment.' } },
   ]} />
  </Section>
  <Section tone="muted">
   <div className="page-split">
    <div><SectionHead label={{ tr: 'BASINÇ SINIFLARI', en: 'PRESSURE RATINGS' }} title={{ tr: 'PN6’dan PN40’a', en: 'From PN6 to PN40' }} text={{ tr: 'Çap, basınç sınıfı, bağlantı yüzeyi ve malzeme kalitesi projenizin teknik gereksinimlerine göre belirlenir.', en: 'Diameter, pressure rating, facing and grade are defined by your project requirements.' }} />
     <div className="pn-grid">{pressure.map(([pn, bar]) => <div key={pn} className="pn-chip"><strong>{pn}</strong><span>{bar}</span></div>)}</div></div>
    <table className="spec-table card"><tbody>
     <tr><th scope="row">{L({ tr: 'Ölçü aralığı', en: 'Size range' })}</th><td>{specs.size}</td></tr>
     <tr><th scope="row">{L({ tr: 'Bağlantı yüzeyi', en: 'Facing' })}</th><td>{L({ tr: 'Düz (FF), yükseltilmiş (RF), dişi-erkek, kanallı', en: 'Flat (FF), raised (RF), male-female, groove' })}</td></tr>
     <tr><th scope="row">{L({ tr: 'Tolerans', en: 'Tolerance' })}</th><td>{specs.tolerance}</td></tr>
     <tr><th scope="row">{L({ tr: 'Yüzey', en: 'Surface' })}</th><td>{specs.finish}</td></tr>
     <tr><th scope="row">{L({ tr: 'Dosya formatları', en: 'File formats' })}</th><td>PDF · DWG · STEP</td></tr>
    </tbody></table>
   </div>
  </Section>
  <CtaBand />
 </main>;
}
