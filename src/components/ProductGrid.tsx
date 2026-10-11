import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/catalog';
import { useLanguage } from '@/lib/language';

export function ProductGrid({ limit }: { limit?: number }) {
 const { t, language } = useLanguage();
 const list = limit ? products.slice(0, limit) : products;
 return <div className="product-grid">{list.map((p, i) => <Link key={p.id} to="/urunler/$slug" params={{ slug: p.slug }} className="product-button" aria-label={`${t(p.name)} ${language === 'tr' ? 'detayları' : 'details'}`}>
  <img className="product-image" src={p.image} alt={t(p.name)} width={300} height={230} loading="lazy" />
  <div className="product-info"><span className="product-number">{String(i + 1).padStart(2, '0')}</span><h3>{t(p.name)}</h3><p>{t(p.standard)}</p><ArrowRight className="product-arrow" /></div>
 </Link>)}</div>;
}
