import { createFileRoute } from '@tanstack/react-router';
import { type FormEvent } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/PageParts';
import cnc from '@/assets/cnc.asset.json';
import { company, products, quotationUrl, SITE_URL } from '@/lib/catalog';
import { useLanguage } from '@/lib/language';

export const Route = createFileRoute('/iletisim')({
 validateSearch: (s: Record<string, unknown>): { urun?: string } => (typeof s['urun'] === 'string' ? { urun: s['urun'] } : {}),
 head: () => ({ meta: [
  { title: 'İletişim ve Teklif Talebi | ERAS FLANŞ' },
  { name: 'description', content: 'Paslanmaz çelik flanş teklifi için ERAS FLANŞ ile iletişime geçin: 0506 098 14 05, info@erflans.com, Başiskele / Kocaeli.' },
  { property: 'og:title', content: 'İletişim ve Teklif Talebi | ERAS FLANŞ' },
  { property: 'og:description', content: 'Ölçü, basınç sınıfı ve malzeme bilgileriyle paslanmaz flanş teklifi isteyin.' },
  { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
 ], links: [{ rel: 'canonical', href: `${SITE_URL}/iletisim` }] }),
 component: ContactPage,
});

function ContactPage() {
 const { t, language } = useLanguage();
 const { urun } = Route.useSearch();
 const initial = products.some(p => p.name === urun) ? urun! : 'Genel talep';
 function send(e: FormEvent<HTMLFormElement>) { e.preventDefault(); const d = new FormData(e.currentTarget); const brief = [t(String(d.get('country'))), String(d.get('standard')), String(d.get('material'))].filter(Boolean).join(' · '); window.location.href = quotationUrl(String(d.get('name')), String(d.get('email')), t(String(d.get('product'))), `${brief}\n${String(d.get('message'))}`, language); }
 return <main>
  <PageHero image={cnc.url} label={{tr:'İLETİŞİM',en:'CONTACT'}} title={{tr:'Ekibimizle görüşün',en:'Talk to our team'}} text={{tr:'Teklif, teknik sorular ve numune talepleri — 24 saat içinde dönüş yapıyoruz.',en:'Quotes, technical questions and samples — we reply within 24 hours.'}} />
  <section className="container page-body page-split contact-layout">
   <div className="contact-card">
    <a className="contact-detail" href={`tel:${company.phoneHref}`}><Phone />{company.phone}</a>
    <a className="contact-detail" href={`mailto:${company.email}`}><Mail />{company.email}</a>
    <a className="contact-detail" href="https://www.google.com/maps/search/?api=1&query=Eras+Makine+Başiskele+Kocaeli" target="_blank" rel="noreferrer"><MapPin /><span>{company.address}<br />{company.location}</span></a>
    <Button variant="industrial" asChild><a href="https://wa.me/905060981405" target="_blank" rel="noreferrer">{t('WHATSAPP İLE İLETİŞİM')}<ArrowRight /></a></Button>
   </div>
   <form className="quote-form form-card" onSubmit={send} key={initial}>
    <label>{t('Ad Soyad / Firma')}<input required name="name" placeholder={t('Adınız veya firma adı')} /></label>
    <label>{t('E-posta')}<input required type="email" name="email" placeholder={t('ornek@firma.com')} /></label>
     <label>{t('Ürün')}<select name="product" defaultValue={initial}><option value="Genel talep">{t('Genel talep')}</option>{products.map(p => <option key={p.id} value={p.name}>{t(p.name)}</option>)}</select></label>
     <div className="form-row">
      <label>{t('Ülke')}<select name="country" defaultValue="Türkiye">{['Türkiye','Almanya','Hollanda','BAE','Suudi Arabistan','Polonya','İtalya','Diğer'].map(c => <option key={c} value={c}>{t(c)}</option>)}</select></label>
      <label>{t('Standart')}<select name="standard" defaultValue="EN 1092-1">{['EN 1092-1','DIN','ANSI B16.5','JIS',t('Müşteri teknik resmi')].map(s => <option key={s} value={s}>{s}</option>)}</select></label>
      <label>{t('Malzeme')}<select name="material" defaultValue="AISI 304 / 304L">{['AISI 304 / 304L','AISI 316 / 316L','AISI 310S'].map(m => <option key={m} value={m}>{m}</option>)}</select></label>
     </div>
     <label>{t('Talep detayları')}<textarea required name="message" placeholder={t('Çap, basınç sınıfı, malzeme kalitesi ve adet…')} /></label>
    <small>{t('Talebiniz e-posta uygulamanızda açılır; göndermeden önce kontrol edebilirsiniz.')}</small>
    <Button variant="industrial" type="submit">{t('E-POSTA İLE TEKLİF İSTE')}<ArrowRight /></Button>
   </form>
  </section>
 </main>;
}
