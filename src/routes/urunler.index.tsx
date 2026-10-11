import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { PageHero, CtaBand } from '@/components/PageParts';
import workshop from '@/assets/flange-workshop.jpg';
import { ProductGrid } from '@/components/ProductGrid';
import { products, SITE_URL } from '@/lib/catalog';
import { useLanguage } from '@/lib/language';
import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

export const Route = createFileRoute('/urunler/')({
 head: () => ({ meta: [
  { title: 'Paslanmaz Çelik Flanş Çeşitleri | ERAS FLANŞ' },
  { name: 'description', content: 'Düz, kaynak boyunlu, hareketli, dişli, kör, JIS, egzoz, kare, Dublin ve yaka paslanmaz çelik flanşlar. DN25–DN3000, PN6–PN40.' },
  { property: 'og:title', content: 'Paslanmaz Çelik Flanş Çeşitleri | ERAS FLANŞ' },
  { property: 'og:description', content: '10 farklı paslanmaz çelik flanş tipi; EN 1092-1, DIN, ANSI ve JIS standartlarında üretim.' },
  { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
 ], links: [{ rel: 'canonical', href: `${SITE_URL}/urunler` }] }),
 component: ProductsPage,
});

function ProductsPage() {
 const { t } = useLanguage();
 const [q, setQ] = useState('');
 const list = products.filter(p => `${p.name} ${p.nameEn} ${p.standard}`.toLocaleLowerCase('tr').includes(q.toLocaleLowerCase('tr')));
 return <main>
  <PageHero image={workshop} label={{tr:'ÜRÜNLER',en:'PRODUCTS'}} title={{tr:'Paslanmaz Çelik Flanş Çeşitlerimiz',en:'Our Stainless Steel Flanges'}} text={{tr:'Standart ölçülerden teknik resme göre özel üretime kadar 10 farklı flanş tipi.',en:'10 flange types, from standard sizes to made-to-drawing production.'}} />
  <section className="container products-section">
   <label className="page-search"><Search size={18} /><input value={q} onChange={e => setQ(e.target.value)} placeholder={t('Flanş adı veya standart ara…')} aria-label={t('Ürün araması')} /></label>
   {q ? <div className="product-grid">{list.map(p => <Link key={p.id} to="/urunler/$slug" params={{ slug: p.slug }} className="product-button"><img className="product-image" src={p.image} alt={t(p.name)} loading="lazy" /><div className="product-info"><h3>{t(p.name)}</h3><p>{t(p.standard)}</p><ArrowRight className="product-arrow" /></div></Link>)}</div> : <ProductGrid />}
   {list.length === 0 && <p className="no-products">{t('Aramanıza uygun ürün bulunamadı.')}</p>}
  </section>
  <CtaBand />
 </main>;
}
