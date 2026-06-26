# Tech Steering: Jastipin

## Stack

- **HTML5** semantik (`index.html`), satu halaman.
- **CSS3** vanilla (`styles.css`), custom properties untuk token desain.
- **JavaScript** vanilla (`app.js`), tanpa dependensi.
- **Tanpa build step, tanpa framework, tanpa npm.**
- Font dari Google Fonts (Plus Jakarta Sans). Gambar disimpan lokal di `assets/`.
- Deploy otomatis ke **Vercel** dari branch `main`. Domain: `jastip-in.web.id`.
- Security headers dikonfigurasi via `vercel.json`.

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
- `robots.txt` di root → `Disallow: /callback.html`, pointer ke sitemap
- `<link rel="canonical">` di `<head>` → `https://jastip-in.web.id/`
- Open Graph tags (`og:title`, `og:description`, `og:image`, dll.) di `<head>`
- Twitter Card tags di `<head>`
- JSON-LD `LocalBusiness` schema di `<body>` sebelum `</body>`
- Update `<lastmod>` di `sitemap.xml` setiap ada perubahan konten signifikan.
- `sitemap.xml` diberi header `X-Robots-Tag: noindex` via `vercel.json` agar tidak di-crawl sebagai halaman HTML.

## Security headers (`vercel.json`)

| Header | Nilai |
|--------|-------|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `Content-Security-Policy` | Covers: self, GA4, GTM, Google Fonts, Vercel Analytics |

CSP di-scope agar kompatibel dengan GA4, GTM inline scripts, Google Fonts, dan Cloudflare Insights (`static.cloudflareinsights.com` di `script-src` + `connect-src`, di-inject otomatis oleh Cloudflare di edge). Jangan hapus domain yang sudah ada di CSP tanpa memeriksa apakah masih dipakai.

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
- **Kontras tombol:** `.btn--solid` menggunakan `color: var(--ink)` (bukan `#fff`) untuk contrast ratio 5.34:1 — WCAG AA. Jangan ubah ke `#fff`.
- **Kontras badge pembayaran:** `.pm-badge__logo` pakai teks putih, jadi background tiap brand wajib gelap (≥4.5:1). DANA `#0A6CC2` & ShopeePay `#C8401E` sudah didarken dari warna brand asli supaya lolos AA. Jangan kembalikan ke warna brand yang lebih terang (DANA `#108EE9`, ShopeePay `#EE4D2D`) tanpa mengganti warna teks.
- **Tanpa em-dash** di seluruh teks.
- Gambar selalu punya `alt`, `width`, `height`, dan `loading`.
- Semua animasi wajib off saat `prefers-reduced-motion: reduce`.
- **H1 tidak boleh dibungkus `.reveal`** — LCP element harus langsung visible. Class `reveal` hanya boleh dipakai pada elemen non-critical di dalam hero copy.

## Heading structure

- Halaman menggunakan struktur `h1 → h2 → h3` secara sequential di sebagian besar section.
- `h1`: judul hero (satu per halaman).
- `h2`: judul setiap section.
- `h3`: sub-item dalam section (steps, tiles, fees, quotes, footer columns).
- Section `#panduan` punya cascade lengkap `h2→h3→h4→h5→h6` (sequential, no-skip) untuk kedalaman heading SEO. Ini satu-satunya tempat `h4`-`h6` dipakai.
- Di luar `#panduan`, jangan menggunakan `h4`-`h6` tanpa `h3` sebelumnya di context yang sama, dan jangan melompati level.

## Konvensi kode

- CSS: pola BEM longgar (`block__element`, `block--modifier`).
- JS: dibungkus IIFE, `"use strict"`, cek null sebelum manipulasi DOM.
- Jaga `index.html`, `styles.css`, `app.js` tetap terpisah.

## Verifikasi sebelum selesai

Render di lebar 390px dan 1280px. Pastikan tidak ada em-dash, tidak ada dependensi baru, dan semua script tracking masih ada dan dalam urutan yang benar.
