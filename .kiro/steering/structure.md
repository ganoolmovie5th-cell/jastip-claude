# Structure Steering: Jastipin

## Peta file

```
jastip-claude/
├── index.html        # Markup halaman + semua tag tracking (GA, GTM, Vercel)
├── styles.css        # Semua styling + token desain di :root
├── app.js            # Interaksi: nav sticky, menu mobile, scroll-reveal
├── sitemap.xml       # Sitemap SEO → https://jastip-in.web.id/sitemap.xml
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
7. `#biaya` — tiga komponen biaya
8. `#testimoni` — kartu testimoni
9. `#faq` — accordion `<details>`
10. `section.cta#kontak` — ajakan WhatsApp
11. `footer.footer` — tautan, kontak, hak cipta

## Tentang `callback.html`

Halaman redirect OAuth Google untuk `jastip-mobile-claude`. Alurnya:

1. App mobile kirim request OAuth dengan `redirect_uri = https://jastip-in.web.id/callback.html`
2. Google redirect ke halaman ini dengan `#access_token=xxx&state=exp://...`
3. Script baca token, redirect ke `state` URL (`exp://` deep link Expo Go)
4. Expo Go intercept → login selesai

Jangan hapus atau ubah script di `callback.html`.

## Titik konfigurasi penting

| Apa | Di mana |
|-----|---------|
| Nomor WhatsApp | `index.html` — tombol CTA dan footer |
| Email kontak | `index.html` — footer |
| Token desain | `styles.css` — blok `:root` |
| GA4 ID | `index.html` — `G-PH1XJC9W3B` |
| GTM ID | `index.html` — `GTM-WQ3THMWQ` |
| Domain canonical | `index.html` — `https://jastip-in.web.id/` |
| Sitemap URL | `sitemap.xml` — `https://jastip-in.web.id/` |
