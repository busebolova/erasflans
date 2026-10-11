import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowRight, ArrowUp, Home, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { company } from '@/lib/catalog';
import { useLanguage } from '@/lib/language';

export const navItems = [
 { label: 'Ana Sayfa', to: '/' }, { label: 'Hakkımızda', to: '/hakkimizda' }, { label: 'Ürünler', to: '/urunler' },
 { label: 'Standartlar', to: '/standartlar' }, { label: 'Malzemeler', to: '/malzemeler' }, { label: 'Sektörler', to: '/sektorler' },
 { label: 'Üretim', to: '/uretim' }, { label: 'Kalite', to: '/kalite' }, { label: 'İletişim', to: '/iletisim' },
] as const;
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Eras+Makine+Başiskele+Kocaeli';

export function Brand() { return <Link className="brand" to="/" aria-label="ERAS FLANŞ"><svg className="brand-logo" viewBox="0 0 300 100" role="img" aria-label="ERAS FLANŞ"><path className="brand-swoosh" d="M72 6C20 15 4 70 51 83C18 67 27 28 72 6Z"/><path className="brand-swoosh" d="M40 24L91 12L59 26Z"/><text className="brand-word" x="48" y="66">ERAS</text><text className="brand-flange" x="52" y="94">F L A N Ş</text></svg></Link>; }

function Contacts() {
 const { t } = useLanguage();
 return <div className="header-contacts">
  <a href={`tel:${company.phoneHref}`} className="contact-mini"><Phone/><div><strong>{company.phone}</strong><span>{t('WhatsApp')}</span></div></a>
  <a href={`mailto:${company.email}`} className="contact-mini"><Mail/><div><strong>{company.email}</strong><span>{t('E-posta')}</span></div></a>
  <a href={mapsUrl} target="_blank" rel="noreferrer" className="contact-mini"><MapPin/><div>{company.address}<span>{company.location}</span></div></a>
 </div>;
}

export function SiteHeader() {
 const { language, setLanguage, t } = useLanguage();
 const [open, setOpen] = useState(false);
 return <header className="site-header">
  <div className="container header-main"><Brand/><div className="brand-caption">{t('Paslanmaz Çelik Flanş Üreticisi')}<br/><span>{company.location}</span></div><Contacts/>
   <div className="language" role="group" aria-label="Language / Dil"><Button variant="ghost" className={`language-option ${language==='tr'?'selected':''}`} aria-pressed={language==='tr'} onClick={()=>setLanguage('tr')}>TR</Button><span>/</span><Button variant="ghost" className={`language-option ${language==='en'?'selected':''}`} aria-pressed={language==='en'} onClick={()=>setLanguage('en')}>EN</Button></div>
   <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={t(open?'Menüyü kapat':'Menüyü aç')} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button>
  </div>
  <nav className={`navigation ${open?'mobile-open':''}`} aria-label={t('Ana menü')}><div className="container nav-inner">
   {navItems.map(item => <Link key={item.to} to={item.to} className="navigation-button nav-link" activeProps={{ className: 'active' }} activeOptions={{ exact: item.to === '/' }} onClick={()=>setOpen(false)}>{t(item.label)}</Link>)}
   <Button variant="industrial" className="nav-quote" asChild><Link to="/iletisim" onClick={()=>setOpen(false)}>{t('TEKLİF AL')}<ArrowRight/></Link></Button>
  </div></nav>
 </header>;
}

export function MobileBar() {
 const { t } = useLanguage();
 return <nav className="mobile-bar" aria-label={t('Alt menü')}><div className="mobile-bar-inner">
  <Link className="mobile-bar-item" to="/" aria-label={t('Ana Sayfa')} activeProps={{ className: 'active' }} activeOptions={{ exact: true }}><Home/><span>{t('Ana Sayfa')}</span></Link>
  <Link className="mobile-bar-item" to="/iletisim" aria-label={t('İletişim')} activeProps={{ className: 'active' }}><Phone/><span>{t('İletişim')}</span></Link>
 </div></nav>;
}

export function SiteFooter() {
 const { t } = useLanguage();
 return <footer className="footer"><div className="container footer-top"><Brand/><div className="footer-caption">{t('Paslanmaz Çelik Flanş Üreticisi')}<br/><span>{company.location}</span></div><Contacts/><div className="socials"><a className="social-link" href="https://wa.me/905060981405" aria-label={t('WhatsApp ile iletişim')} target="_blank" rel="noreferrer"><Phone/></a><a className="social-link" href={`mailto:${company.email}`} aria-label={t('E-posta gönder')}><Mail/></a><Button variant="navigation" size="icon" aria-label={t('Sayfanın başına dön')} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}><ArrowUp/></Button></div></div>
  <div className="container footer-bottom"><div className="footer-links">{navItems.map(item=><Link key={item.to} to={item.to}>{t(item.label)}</Link>)}</div><p>© {new Date().getFullYear()} ERAS FLANŞ. {t('Tüm hakları saklıdır.')}</p></div></footer>;
}

export function PageIntro({ label, title, text }: { label: string; title: string; text?: string }) {
 const { t } = useLanguage();
 return <section className="page-intro"><div className="container"><p className="section-label">{t(label)}</p><h1>{t(title)}</h1>{text && <p>{t(text)}</p>}</div></section>;
}
