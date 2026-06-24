# Tech Steering: Jastipin

## Stack

- **HTML5** semantik (`index.html`), satu halaman.
- **CSS3** vanilla (`styles.css`), custom properties untuk token desain.
- **JavaScript** vanilla (`app.js`), tanpa dependensi.
- **Tanpa build step, tanpa framework, tanpa npm.**
- Font dari Google Fonts (Plus Jakarta Sans). Gambar disimpan lokal di `assets/`.
- Deploy otomatis ke **Vercel** dari branch `main`. Domain: `jastip-in.web.id`.

## Analytics & Tracking

Tiga layer tracking di `index.html`, urutan wajib dipertahankan:

```html
<head>
  <!-- 1. Google Analytics 4 — G-PH1XJC9W3B -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-PH1XJC9W3B"></script>

  <!-- 2. Vercel Web Analytics — auto-inject oleh Vercel -->
  <script defer src="/_vercel/insights/script.js"></script>

  <!-- 3. Google Tag Manager — GTM-WQ3THMWQ -->
  <script>(function...GTM-WQ3THMWQ...)</script>
</head>
<body>
  <!-- 4. GTM noscript fallback — wajib tepat setelah <body> -->
  <noscript><iframe src="...GTM-WQ3THMWQ..."></iframe></noscript>
```

Jangan mengubah urutan ini.

## SEO

- `sitemap.xml` di root → `https://jastip-in.web.id/sitemap.xml`
- `<link rel="canonical">` di `<head>` → `https://jastip-in.web.id/`
- `<link rel="sitemap">` di `<head>` → `/sitemap.xml`
- Update `<lastmod>` di `sitemap.xml` setiap ada perubahan konten signifikan.

## Design system (sumber kebenaran di `:root` styles.css)

| Token | Nilai | Catatan |
|-------|-------|---------|
| `--brand` | `#0f5c4a` | Teal hijau, warna utama |
| `--brand-strong` | `#0a4537` | Varian gelap |
| `--accent` | `#e8762f` | Oranye hangat, satu-satunya warna aksi |
| `--bg` | `#faf6ee` | Latar krem |
| `--tint` | `#f1ece0` | Latar section selang-seling |
| `--ink` | `#1b2420` | Teks utama |
| `--muted` | `#5d6b63` | Teks sekunder |
| Font | Plus Jakarta Sans | Heading 800, body 400–600 |

## Aturan desain

- **Satu warna aksen** — hanya `--accent` untuk semua CTA.
- **Tanpa em-dash** di seluruh teks.
- Gambar selalu punya `alt`, `width`, `height`, dan `loading`.
- Semua animasi wajib off saat `prefers-reduced-motion: reduce`.

## Konvensi kode

- CSS: pola BEM longgar (`block__element`, `block--modifier`).
- JS: dibungkus IIFE, `"use strict"`, cek null sebelum manipulasi DOM.
- Jaga `index.html`, `styles.css`, `app.js` tetap terpisah.

## Verifikasi sebelum selesai

Render di lebar 390px dan 1280px. Pastikan tidak ada em-dash, tidak ada dependensi baru, dan semua script tracking masih ada dan dalam urutan yang benar.
