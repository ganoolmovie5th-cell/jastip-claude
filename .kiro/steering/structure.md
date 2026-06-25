# Structure Steering: Jastipin

## Peta file

```
jastip-claude/
├── index.html        # Markup halaman + semua tag tracking (GA, GTM, Vercel)
├── styles.css        # Semua styling + token desain di :root
├── app.js            # Interaksi: nav sticky, menu mobile, scroll-reveal
├── sitemap.xml       # Sitemap SEO → https://jastip-in.web.id/sitemap.xml
├── robots.txt        # Robots direktif: Disallow /callback.html, pointer ke sitemap
├── vercel.json       # Security headers: CSP, X-Content-Type-Options, X-Frame-Options, dll.
├── callback.html     # Redirect OAuth Google untuk app mobile (jastip-mobile-claude)
├── favicon.svg       # Favicon branded
├── assets/
│   ├── hero.jpg
│   ├── beauty.jpg
│   ├── fashion.jpg
│   ├── gadget.jpg
│   └── snacks.jpg
├── README.md
├── AGENTS.md
├── CLAUDE.md
└── .kiro/steering/
    ├── product.md
    ├── tech.md
    └── structure.md
```

## Urutan section di `index.html`

1. `header.nav` — navigasi sticky + menu mobile
2. `section.hero` — judul, lead, CTA, gambar hero
3. `section.stats` — angka kepercayaan
4. `#cara-kerja` — empat langkah proses
5. `#kategori` — bento grid kategori
6. `#kenapa` — split gambar + checklist
7. `#biaya` — tiga komponen biaya + badge metode pembayaran (BCA, GoPay, OVO, DANA, ShopeePay)
8. `#testimoni` — kartu testimoni
9. `#faq` — accordion `<details>` termasuk FAQ jam operasional & metode pembayaran
10. `section.cta#kontak` — ajakan WhatsApp
11. `footer.footer` — tautan, kontak (WA + email + jam operasional), hak cipta

## Tentang `callback.html`

Halaman redirect OAuth Google untuk `jastip-mobile-claude`. Alurnya:

1. App mobile kirim request OAuth dengan `redirect_uri = https://jastip-in.web.id/callback.html`
2. Google redirect ke halaman ini dengan `#access_token=xxx&state=exp://...`
3. Script baca token, redirect ke `state` URL (`exp://` deep link Expo Go)
4. Expo Go intercept → login selesai

Jangan hapus atau ubah script di `callback.html`.

## Tentang `vercel.json`

Berisi dua rule:
1. Rule khusus `/sitemap.xml` — set `Content-Type: application/xml` dan `X-Robots-Tag: noindex, nofollow`
2. Rule global `/(.*)`  — set semua security headers termasuk CSP

Rule sitemap harus **lebih dulu** dari rule global agar tidak tertimpa.

## Titik konfigurasi penting

| Apa | Di mana | Nilai saat ini |
|-----|---------|----------------|
| Nomor WhatsApp | `index.html` — tombol CTA dan footer | `628118696940` |
| Email kontak | `index.html` — footer | `halo@jastipin.id` |
| Jam operasional | `index.html` — footer `.footer__hours` dan FAQ | Sen–Min 09.00–22.00 WIB |
| Metode pembayaran | `index.html` — section `#biaya` `.payment-methods` dan FAQ | BCA, GoPay, OVO, DANA, ShopeePay |
| Token desain | `styles.css` — blok `:root` | Lihat `tech.md` |
| GA4 ID | `index.html` | `G-PH1XJC9W3B` |
| GTM ID | `index.html` | `GTM-WQ3THMWQ` |
| Domain canonical | `index.html` | `https://jastip-in.web.id/` |
| JSON-LD schema | `index.html` — sebelum `</body>` | `LocalBusiness` |
| Sitemap lastmod | `sitemap.xml` | Update tiap perubahan konten besar |
