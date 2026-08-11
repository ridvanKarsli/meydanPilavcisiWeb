# Meydan Pilavcısı — Web Sitesi

Küçük Park Meydan Pilavcısı için hazırlanmış, mobil uyumlu tanıtım ve menü sitesi. React (Vite) + Tailwind CSS ile geliştirildi, dış görsel/servislere bağımlılığı yoktur (tüm ikon ve illüstrasyonlar SVG olarak kod içinde).

## Çalıştırma

```bash
npm install
npm run dev       # geliştirme sunucusu
npm run build     # üretim derlemesi (dist/ klasörü)
npm run preview   # derlenmiş halini önizleme
```

## Müşteriden onay/gerçek bilgi bekleyen yerler

Aşağıdaki bölümler makul varsayılanlarla dolduruldu, gerçek bilgiler geldiğinde güncellenmeli:

- **`src/components/Contact.jsx`** — açık adres, telefon numarası, gerçek konum/harita gömme linki.
- **`src/components/Menu.jsx`** — ürün fiyatları tahminidir, güncel fiyat listesiyle değiştirilmeli.
- **`src/components/OrderPlatforms.jsx`** — Getir / Yemeksepeti / Trendyol Yemek linkleri şu an genel ana sayfalara gidiyor; işletmeye özel sipariş linkleriyle değiştirilmeli.
- **`src/components/Contact.jsx`** — Instagram / Facebook linkleri `#` (placeholder), gerçek hesap linkleriyle değiştirilmeli.
- **`src/components/About.jsx`** — "Hakkımızda" metni örnek olarak yazıldı, işletme sahibinin onayına/düzeltmesine açık.

Detaylı bilgi toplama kontrol listesi için proje klasöründeki `musteri-bilgi-formu.docx` dosyasına bakılabilir.

## Yapı

- `src/components/Header.jsx` — üst menü, mobil hamburger navigasyon
- `src/components/Hero.jsx` — giriş bölümü
- `src/components/Highlights.jsx` — "Neden Biz" kartları
- `src/components/About.jsx` — hakkımızda
- `src/components/Menu.jsx` — menü kategorileri ve fiyatlar
- `src/components/OrderPlatforms.jsx` — Getir/Yemeksepeti/Trendyol Yemek
- `src/components/Contact.jsx` — iletişim, çalışma saatleri
- `src/components/Icons.jsx`, `src/components/Illustrations.jsx` — özel SVG ikon/illüstrasyonlar
- `src/assets/logo.png` — orijinal logo görselinden temizlenerek çıkarılmış şeffaf logo
