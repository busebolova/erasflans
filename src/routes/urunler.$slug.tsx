import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowLeft, ArrowRight, Check, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { company, productBySlug, productLd, products, specs, SITE_URL } from '@/lib/catalog';
import { useLanguage } from '@/lib/language';

export const Route = createFileRoute('/urunler/$slug')({
 loader: ({ params }) => { const product = productBySlug(params.slug); if (!product) throw notFound(); return { product }; },
 head: ({ loaderData }) => {
  const p = loaderData?.product;
  if (!p) return { meta: [{ title: 'Ürün bulunamadı | ERAS FLANŞ' }] };
  const title = `Paslanmaz ${p.name} (${p.nameEn}) | ERAS FLANŞ`;
  const desc = `${p.tagline}. ${p.standard}, DN25–DN3000, PN6–PN40, AISI 304/316L/310S. Kocaeli'de CNC üretim, EN 10204 3.1 sertifika, ihracat.`;
  const url = `${SITE_URL}/urunler/${p.slug}`;
  return {
   meta: [
    { title }, { name: 'description', content: desc },
    { name: 'keywords', content: `paslanmaz ${p.name.toLowerCase()}, ${p.name.toLowerCase()} üreticisi, stainless steel ${p.nameEn.toLowerCase()}, ${p.standard}, 304 flanş, 316L flanş, Kocaeli flanş` },
    { property: 'og:title', content: title }, { property: 'og:description', content: desc },
    { property: 'og:type', content: 'product' }, { property: 'og:url', content: url },
    { name: 'twitter:card', content: 'summary_large_image' },
   ],
   links: [{ rel: 'canonical', href: url }],
   scripts: [{ type: 'application/ld+json', children: JSON.stringify(productLd(p)) }],
  };
 },
 component: ProductPage,
 notFoundComponent: () => <main className="container product-page"><h1>Ürün bulunamadı</h1><Link to="/">Ana sayfaya dön</Link></main>,
});

function ProductPage() {
 const { product: p } = Route.useLoaderData();
 const { language: lang } = useLanguage();
 const en = lang === 'en';
 const name = en ? p.nameEn : p.name;
 const rows: [string, string][] = [
  [en ? 'Standard' : 'Standart', p.standard], [en ? 'Size range' : 'Ölçü aralığı', specs.size], [en ? 'Pressure rating' : 'Basınç sınıfı', specs.pressure],
  [en ? 'Steel grades' : 'Malzeme kalitesi', specs.grades], ['W.Nr.', specs.wnr], [en ? 'Surface finish' : 'Yüzey', specs.finish],
  [en ? 'Tolerances' : 'Tolerans', specs.tolerance], [en ? 'Certificate' : 'Sertifika', specs.certificate],
 ];
 const others = products.filter(o => o.id !== p.id).slice(0, 4);
 return <>
 <main className="container product-page">
  <div className="product-page-top">
   <nav aria-label="Breadcrumb" className="breadcrumb"><Link to="/">{en ? 'Home' : 'Ana Sayfa'}</Link> / <Link to="/urunler">{en ? 'Products' : 'Ürünler'}</Link> / <span>{name}</span></nav>
   
  </div>
  <article className="product-article">
   <img src={p.image} alt={en ? `Stainless steel ${p.nameEn}` : `Paslanmaz çelik ${p.name}`} width={1024} height={1024} className="product-page-image" />
   <div>
    <p className="section-label">{en ? 'STAINLESS STEEL FLANGE' : 'PASLANMAZ ÇELİK FLANŞ'}</p>
    <h1>{en ? `Stainless Steel ${p.nameEn}` : `Paslanmaz ${p.name}`}</h1>
    <p className="product-lead">{en ? p.taglineEn : p.tagline}</p>
    <p className="info-copy">{en ? p.descriptionEn : p.description}</p>
    <div className="hero-actions"><Button variant="industrial" asChild><Link to="/iletisim" search={{ urun: p.name }}>{en ? 'GET A QUOTE' : 'TEKLİF AL'}<ArrowRight /></Link></Button><Button variant="blueprint" className="on-light" asChild><a href="https://wa.me/905060981405" target="_blank" rel="noreferrer">WhatsApp<Phone /></a></Button></div>
   </div>
  </article>
  <section className="product-block"><h2>{en ? 'Technical specifications' : 'Teknik özellikler'}</h2><table className="spec-table"><tbody>{rows.map(([k, v]) => <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>)}</tbody></table></section>
  <section className="product-block"><h2>{en ? 'Applications' : 'Kullanım alanları'}</h2><ul className="standards-list">{(en ? p.usesEn : p.uses).map(u => <li key={u}><Check />{u}</li>)}</ul></section>
  <section className="product-block"><h2>{en ? 'Frequently asked questions' : 'Sıkça sorulan sorular'}</h2>{(en ? p.faqEn : p.faq).map(f => <details key={f.q} className="faq"><summary>{f.q}</summary><p className="info-copy">{f.a}</p></details>)}</section>
  <section className="product-block"><h2>{en ? 'Other flange types' : 'Diğer flanş çeşitleri'}</h2><div className="related">{others.map(o => <Link key={o.id} to="/urunler/$slug" params={{ slug: o.slug }} className="related-card"><img src={o.image} alt={en ? o.nameEn : o.name} width={160} height={160} loading="lazy" /><span>{en ? o.nameEn : o.name}</span></Link>)}</div></section>
  <p className="info-copy"><Mail className="inline" size={14} /> {company.email} · {company.phone} · {company.address}, {company.location}</p>
  <Link to="/" className="back-link"><ArrowLeft size={14} /> {en ? 'Back to home' : 'Ana sayfaya dön'}</Link>
 </main></>;
}
