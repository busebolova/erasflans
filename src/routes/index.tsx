import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BadgeCheck, Cog, Download, Factory, FileText, Globe2, Pause, Play, ShieldCheck, Truck, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { homeLd, products, SITE_URL } from '@/lib/catalog';
import { sectors } from '@/lib/content';
import { useLanguage } from '@/lib/language';
import { ProductGrid } from '@/components/ProductGrid';
import hero from '@/assets/flange-workshop.jpg';
import heroVideo from '@/assets/flange-product-hero.mp4.asset.json';

export const Route = createFileRoute('/')({
 head: () => ({ meta: [
  { title:'ERAS FLANŞ | Paslanmaz Çelik Flanş Üreticisi' },
  { name:'description', content:'ERAS FLANŞ: düz, kaynak boyunlu, dişli ve kör paslanmaz çelik flanşlar. EN, DIN, ANSI ve JIS standartlarında CNC hassas üretim. Başiskele, Kocaeli.' },
  { property:'og:title', content:'ERAS FLANŞ | Paslanmaz Çelik Flanş Üreticisi' },
  { property:'og:description', content:'Paslanmaz çelik flanş çeşitleri, uluslararası standartlar ve projeye özel CNC üretim.' },
  { property:'og:type', content:'website' }, { name:'twitter:card', content:'summary_large_image' }, { property:'og:url', content:SITE_URL },
 ], links:[{ rel:'canonical', href:SITE_URL }], scripts:[{ type:'application/ld+json', children:JSON.stringify(homeLd()) }] }),
 component: Index,
});

const benefits = [
 { icon:Cog, title:'DN25 – DN3000', subtitle:'Geniş çap üretim kapasitesi' },
 { icon:FileText, title:'EN / DIN / ANSI', subtitle:'Uluslararası standartlar' },
 { icon:Factory, title:'CNC İşleme', subtitle:'Yüksek hassasiyet' },
 { icon:Truck, title:'Hızlı Teslimat', subtitle:'Zamanında sevkiyat' },
 { icon:Globe2, title:'Dünya Çapında İhracat', subtitle:'Global tedarik' },
];

const heroFeatures = [
 { icon:Cog, title:'HASSAS CNC İŞLEME', text:'CNC tornada flanş yüzeyi ve kanal işleme.' },
 { icon:ShieldCheck, title:'SERTİFİKALI MALZEME', text:'304L, 316L ve 310S paslanmaz çelik.' },
 { icon:BadgeCheck, title:'KALİTE KONTROL', text:'Boyutsal kontrol ve EN 10204 3.1 belgesi.' },
 { icon:Truck, title:'HIZLI TEDARİK', text:'Standart ebatlarda hızlı sevkiyat.' },
 { icon:Wrench, title:'PROJEYE ÖZEL ÜRETİM', text:'PDF, DWG ve STEP dosyadan üretim.' },
 { icon:Globe2, title:'KÜRESEL İHRACAT', text:'20+ ülkeye dünya çapında sevkiyat.' },
];

function Index() {
 const { t, language } = useLanguage();
 const videoRef = useRef<HTMLVideoElement>(null);
 const [playing, setPlaying] = useState(false);
 const play = () => videoRef.current?.play().catch(() => setPlaying(false));
 useEffect(() => {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const sync = () => { if (motion.matches) videoRef.current?.pause(); else play(); };
  sync(); motion.addEventListener('change', sync); return () => motion.removeEventListener('change', sync);
 }, []);
 const label = language === 'tr' ? (playing ? 'Videoyu duraklat' : 'Videoyu oynat') : (playing ? 'Pause video' : 'Play video');
 return <main>
  <section className="hero">
   <video ref={videoRef} className="hero-image" poster={hero} muted loop playsInline autoPlay preload="auto" aria-label={t('CNC tezgâhında hassas işlenmiş paslanmaz çelik flanşlar')} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setPlaying(false)}><source src={heroVideo.url} type="video/mp4" /></video>
    <div className="container hero-content"><p className="hero-badge">{t('DN25 — DN3000')}</p><h1 className="hero-title"><span>{t('PASLANMAZ ÇELİK')}</span><span>{t('FLANŞ')}</span><span className="hero-title-accent">{t('ÜRETİCİSİ')}</span></h1><p className="hero-subtitle">{t('CNC hassas işleme · paslanmaz çelik · dünya çapında tedarik')}</p><p className="hero-description">{t("EN, DIN, ANSI ve JIS standartlarında standart ve projeye özel paslanmaz çelik flanş üretimi — Türkiye'den dünyaya sevkiyat.")}</p>
      <div className="hero-actions"><Button variant="industrial" asChild><Link to="/iletisim">{t('TEKLİF AL')}<ArrowRight /></Link></Button><Button variant="blueprint" asChild><Link to="/urunler">{t('ÜRÜN KATALOĞU')}<Download /></Link></Button></div>
      <div className="hero-thumbs">{products.slice(0, 4).map(p => <img key={p.id} src={p.image} alt={t(language === 'tr' ? p.name : p.nameEn)} loading="lazy" />)}</div></div>
    <div className="hero-features">{heroFeatures.map(f => <div className="hero-feature" key={f.title}><f.icon /><div><strong>{t(f.title)}</strong><p>{t(f.text)}</p></div></div>)}</div>
    <Button variant="blueprint" size="icon" className="video-control" aria-label={label} title={label} onClick={() => playing ? videoRef.current?.pause() : play()}>{playing ? <Pause /> : <Play />}</Button>
  </section>
  <section className="benefits" aria-label={t('Üretim kabiliyetleri')}><div className="container benefits-inner">{benefits.map(b => <div className="benefit" key={b.title}><b.icon /><div><strong>{t(b.title)}</strong><p>{t(b.subtitle)}</p></div></div>)}</div></section>
  <section className="container products-section"><div className="section-heading"><div><p className="section-label">{t('ÜRÜN GRUPLARIMIZ')}</p><h2>{t('Paslanmaz Çelik Flanş Çeşitlerimiz')}</h2></div><Link className="all-products" to="/urunler">{t('Tüm Ürünleri Gör')}<ArrowRight /></Link></div><ProductGrid limit={6} /></section>
  <section className="container sectors"><div className="section-heading"><div><p className="section-label">{t('SEKTÖRLER')}</p><h2>{t('Hizmet Verdiğimiz Sektörler')}</h2></div><Link className="all-products" to="/sektorler">{t('Tümünü Gör')}<ArrowRight /></Link></div><div className="sector-grid">{sectors.slice(0, 5).map(x => <div className="sector-card" key={x.title}><Factory /><strong>{t(x.title)}</strong><p>{t(x.text)}</p></div>)}</div></section>
 </main>;
}
