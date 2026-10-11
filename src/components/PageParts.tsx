import { Link } from '@tanstack/react-router';
import { ArrowRight, Phone, type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { company } from '@/lib/catalog';
import { useLanguage } from '@/lib/language';

export type Bi = { tr: string; en: string };
export const useBi = () => { const { language } = useLanguage(); return (b: Bi) => (language === 'en' ? b.en : b.tr); };

export function PageHero({ label, title, text, image }: { label: Bi; title: Bi; text?: Bi; image: string }) {
 const L = useBi();
 return <section className="page-hero"><img src={image} alt="" aria-hidden="true" className="page-hero-bg" />
  <div className="container page-hero-inner">
   <nav aria-label="Breadcrumb" className="page-hero-crumb"><Link to="/">{L({ tr: 'Ana Sayfa', en: 'Home' })}</Link><span>/</span><span>{L(title)}</span></nav>
   <p className="eyebrow">{L(label)}</p><h1>{L(title)}</h1>{text && <p className="page-hero-text">{L(text)}</p>}
  </div></section>;
}

export function SectionHead({ label, title, text }: { label: Bi; title: Bi; text?: Bi }) {
 const L = useBi();
 return <div className="section-head"><p className="section-label">{L(label)}</p><h2>{L(title)}</h2>{text && <p>{L(text)}</p>}</div>;
}

export function Stats({ items }: { items: { value: string; label: Bi }[] }) {
 const L = useBi();
 return <div className="stats-band"><div className="container stats-inner">{items.map(s => <div key={s.value} className="stat"><strong>{s.value}</strong><span>{L(s.label)}</span></div>)}</div></div>;
}

export function IconCards({ items, cols = 3 }: { items: { icon: LucideIcon; title: Bi; text: Bi }[]; cols?: 2 | 3 | 4 }) {
 const L = useBi();
 return <div className={`icon-cards cols-${cols}`}>{items.map(c => <article key={c.title.tr} className="icon-card"><span className="icon-badge"><c.icon /></span><h3>{L(c.title)}</h3><p>{L(c.text)}</p></article>)}</div>;
}

export function Steps({ items }: { items: { title: Bi; text: Bi }[] }) {
 const L = useBi();
 return <ol className="steps">{items.map((s, i) => <li key={s.title.tr}><span className="step-no">{String(i + 1).padStart(2, '0')}</span><h3>{L(s.title)}</h3><p>{L(s.text)}</p></li>)}</ol>;
}

export function Section({ children, tone }: { children: ReactNode; tone?: 'muted' }) {
 return <section className={`page-section ${tone === 'muted' ? 'muted' : ''}`}><div className="container">{children}</div></section>;
}

export function CtaBand() {
 const L = useBi();
 return <section className="cta-band"><div className="container cta-inner">
  <div><h2>{L({ tr: 'Projeniz için paslanmaz flanş teklifi alın', en: 'Get a stainless flange quote for your project' })}</h2><p>{L({ tr: 'Ölçü, basınç sınıfı, malzeme ve adet bilgilerini gönderin; teknik ekibimiz size dönüş yapsın.', en: 'Send size, pressure rating, grade and quantity; our technical team will get back to you.' })}</p></div>
  <div className="cta-actions"><Button variant="industrial" asChild><Link to="/iletisim">{L({ tr: 'TEKLİF AL', en: 'GET A QUOTE' })}<ArrowRight /></Link></Button><Button variant="blueprint" asChild><a href="https://wa.me/905060981405" target="_blank" rel="noreferrer"><Phone />{company.phone}</a></Button></div>
 </div></section>;
}
