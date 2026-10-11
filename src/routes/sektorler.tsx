import { createFileRoute } from '@tanstack/react-router';
import { Anchor, Building2, Cog, Droplets, Flame, FlaskConical, Fuel, Milk, Truck, Zap } from 'lucide-react';
import { CtaBand, IconCards, PageHero, Section, SectionHead } from '@/components/PageParts';
import { SITE_URL } from '@/lib/catalog';
import { english } from '@/lib/translations';
import { sectors } from '@/lib/content';
import workshop from '@/assets/flange-workshop.jpg';

const title = 'Hizmet Verilen Sektörler | ERAS FLANŞ';
const desc = 'Gıda, kimya, enerji, tersane, akaryakıt, LPG, su ve altyapı sektörleri için paslanmaz çelik flanşlar.';
export const Route = createFileRoute('/sektorler')({
 head: () => ({ meta: [{ title }, { name: 'description', content: desc }, { property: 'og:title', content: title }, { property: 'og:description', content: desc }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'canonical', href: `${SITE_URL}/sektorler` }] }),
 component: Page,
});

const icons = [Milk, Truck, FlaskConical, Zap, Anchor, Fuel, Droplets, Flame, Cog, Building2];
const bi = (s: string) => ({ tr: s, en: english[s] ?? s });

function Page() {
 return <main>
  <PageHero image={workshop} label={{ tr: 'SEKTÖRLER', en: 'SECTORS' }} title={{ tr: 'Hizmet Verdiğimiz Sektörler', en: 'Industries We Serve' }} text={{ tr: 'Her sektörün ortam koşullarına uygun paslanmaz flanş çözümleri.', en: 'Stainless flange solutions matched to each industry’s conditions.' }} />
  <Section>
   <SectionHead label={{ tr: 'UYGULAMALAR', en: 'APPLICATIONS' }} title={{ tr: '10 farklı sektöre tedarik', en: 'Supplying 10 industries' }} />
   <IconCards cols={4} items={sectors.map((s, i) => ({ icon: icons[i] ?? Cog, title: bi(s.title), text: bi(s.text) }))} />
  </Section>
  <CtaBand />
 </main>;
}
