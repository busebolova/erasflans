import { createFileRoute } from '@tanstack/react-router';
import { CtaBand, PageHero, Section, SectionHead, useBi, type Bi } from '@/components/PageParts';
import { SITE_URL } from '@/lib/catalog';
import bars from '@/assets/stainless-bars.jpg';

const title = 'Paslanmaz Çelik Malzeme Kaliteleri | ERAS FLANŞ';
const desc = 'AISI 304/304L, 316/316L ve 310S paslanmaz çelik flanşlar. EN 10204 3.1 malzeme sertifikası.';
export const Route = createFileRoute('/malzemeler')({
 head: () => ({ meta: [{ title }, { name: 'description', content: desc }, { property: 'og:title', content: title }, { property: 'og:description', content: desc }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'canonical', href: `${SITE_URL}/malzemeler` }] }),
 component: Page,
});

const grades: { name: string; wnr: string; tag: Bi; text: Bi; points: Bi[] }[] = [
 { name: 'AISI 304 / 304L', wnr: '1.4301 / 1.4307', tag: { tr: 'Standart', en: 'Standard' }, text: { tr: 'Genel endüstriyel uygulamalarda en çok tercih edilen paslanmaz çelik.', en: 'The most widely used stainless steel for general industrial use.' }, points: [{ tr: 'Gıda ve su hatları', en: 'Food and water lines' }, { tr: 'İyi kaynak kabiliyeti', en: 'Good weldability' }, { tr: 'Ekonomik çözüm', en: 'Economical choice' }] },
 { name: 'AISI 316 / 316L', wnr: '1.4401 / 1.4404', tag: { tr: 'Yüksek korozyon direnci', en: 'High corrosion resistance' }, text: { tr: 'Molibden içerir; klorür ve kimyasal ortamlarda üstün dayanım.', en: 'Contains molybdenum; superior resistance in chloride and chemical environments.' }, points: [{ tr: 'Kimya ve ilaç', en: 'Chemical and pharma' }, { tr: 'Deniz suyu ortamı', en: 'Seawater environments' }, { tr: 'Hijyenik prosesler', en: 'Hygienic processes' }] },
 { name: 'AISI 310S', wnr: '1.4845', tag: { tr: 'Yüksek sıcaklık', en: 'High temperature' }, text: { tr: 'Yüksek krom-nikel içeriğiyle ısıya ve oksidasyona dayanıklı.', en: 'High chromium-nickel content for heat and oxidation resistance.' }, points: [{ tr: 'Egzoz sistemleri', en: 'Exhaust systems' }, { tr: 'Fırın ve brülörler', en: 'Furnaces and burners' }, { tr: '1000 °C’ye kadar', en: 'Up to 1000 °C' }] },
];

function Page() {
 const L = useBi();
 return <main>
  <PageHero image={bars} label={{ tr: 'MALZEMELER', en: 'MATERIALS' }} title={{ tr: 'Paslanmaz Çelik Kalite Seçenekleri', en: 'Stainless Steel Grade Options' }} text={{ tr: 'Uygulamanıza uygun paslanmaz kalitesini birlikte seçelim.', en: 'Let’s choose the right stainless grade for your application.' }} />
  <Section>
   <SectionHead label={{ tr: 'KALİTELER', en: 'GRADES' }} title={{ tr: 'Kullandığımız paslanmaz çelikler', en: 'Stainless steels we use' }} text={{ tr: 'Tüm malzemeler EN 10204 3.1 sertifikası ile tedarik edilebilir.', en: 'All materials can be supplied with EN 10204 3.1 certificates.' }} />
   <div className="grade-cards">{grades.map(g => <article key={g.name} className="grade-card"><span className="grade-tag">{L(g.tag)}</span><h3>{g.name}</h3><small>W.Nr. {g.wnr}</small><p>{L(g.text)}</p><ul>{g.points.map(p => <li key={p.tr}>{L(p)}</li>)}</ul></article>)}</div>
  </Section>
  <Section tone="muted">
   <SectionHead label={{ tr: 'KARŞILAŞTIRMA', en: 'COMPARISON' }} title={{ tr: 'Hangi kalite, hangi ortam?', en: 'Which grade for which environment?' }} />
   <div className="table-scroll"><table className="spec-table card compare"><thead><tr><th>{L({ tr: 'Özellik', en: 'Property' })}</th><th>304 / 304L</th><th>316 / 316L</th><th>310S</th></tr></thead><tbody>
    <tr><th scope="row">{L({ tr: 'Genel korozyon', en: 'General corrosion' })}</th><td>●●●○</td><td>●●●●</td><td>●●●○</td></tr>
    <tr><th scope="row">{L({ tr: 'Klorür / deniz suyu', en: 'Chloride / seawater' })}</th><td>●●○○</td><td>●●●●</td><td>●●○○</td></tr>
    <tr><th scope="row">{L({ tr: 'Yüksek sıcaklık', en: 'High temperature' })}</th><td>●●○○</td><td>●●○○</td><td>●●●●</td></tr>
    <tr><th scope="row">{L({ tr: 'Maliyet', en: 'Cost' })}</th><td>{L({ tr: 'Ekonomik', en: 'Economical' })}</td><td>{L({ tr: 'Orta', en: 'Medium' })}</td><td>{L({ tr: 'Yüksek', en: 'High' })}</td></tr>
   </tbody></table></div>
  </Section>
  <CtaBand />
 </main>;
}
