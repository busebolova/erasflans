# SEO teslim notları

## Uygulananlar

- Türkçe ve İngilizce toplam 84 sunucuda oluşturulan sayfa.
- Her sayfada benzersiz başlık, açıklama, tek H1, kendi canonical adresi ve karşılıklı tr/en/x-default hreflang.
- 308 kalıcı ana sayfa yönlendirmesi, bulunmayan adreslerde 404, robots.txt ve XML site haritası.
- Organization, WebSite, WebPage/CollectionPage/ContactPage/AboutPage ve BreadcrumbList JSON-LD; ürün listesinde ItemList.
- Ürün sayfalarında gerçek katalog içeriğiyle Product verisi. Fiyat veya yorum bulunmadığı için Google Product rich-result uygunluğu iddia edilmez; sahte fiyat/puan eklenmez.
- Sektöre özgü seçim ve teknik talep içerikleri; ürünler arasında bağlama uygun iç bağlantılar; ana sayfada teklif ve ürün seçimi soruları.
- Makine parkuru listesi erflans.com/machine-park kaynağından aktarıldı: 16 ekipman, Ø3400 dik torna ve 10 ton vinç.
- Mobilde 400px ürün görsel seçenekleri, WebP, sabit görsel ölçüleri, aşağıdaki görsellerde lazy loading ve hero görselinde yüksek öncelik.
- Mobil başlıklar, menü dokunma alanları, makine listeleri ve sabit header için 320px genişliğe kadar CSS düzenlemeleri.

## Doğrulama sınırları

Yerel otomatik tarama; 84 sayfada durum kodu, başlık/açıklama benzersizliği, dil, canonical, hreflang, JSON-LD sözdizimi, iç bağlantılar ve görselleri kontrol eder. Bunlar Google sıralama veya Rich Results Test sonucu değildir. Gerçek cihaz testleri, Lighthouse ve saha Core Web Vitals ölçümü henüz yapılmadı.

## Yayına geçişte gerekenler

1. Asıl alan adı netleşince lib/catalog.ts içindeki origin güncellenmeli ve Sites alan adı bağlanmalıdır. Bilinmeyen bir alan adı canonical olarak uydurulmadı.
2. Site hâlen sahibiyle sınırlı özel erişimdedir; Google giriş duvarını geçerek indeksleyemez. Genel yayın kullanıcının kararıyla açılmalıdır.
3. Kullanıcının Search Console mülkünde alan adı doğrulanmalı; /sitemap.xml gönderilmeli; ana sayfa ve iki dilde örnek ürün URL'leri URL Inspection ile kontrol edilmelidir.
4. Erasflans markasının ve referanstan alınan telefon/adresin firma bilgileriyle eşleşmesi genel yayın öncesi işletme tarafından teyit edilmelidir.
5. Standart, basınç, alaşım ve belge kapsamları teklif bazında teyit edilmelidir. Rakip site metninin teknik iddiaları körlemesine kopyalanmadı.

## Kaynaklar

- https://developers.google.com/search/docs/advanced/crawling/managing-multi-regional-sites
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/appearance/structured-data/product-snippet
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://web.dev/articles/optimize-lcp

Makine parkuru kaynağı: https://www.erflans.com/machine-park (16 Eylül 2026).
