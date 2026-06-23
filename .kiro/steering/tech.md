# Tech Steering: Jastipin

## Stack

- **HTML5** semantik (`index.html`), satu halaman.
- **CSS3** vanilla (`styles.css`), custom properties untuk token desain.
- **JavaScript** vanilla (`app.js`), tanpa dependensi.
- **Tanpa build step, tanpa framework, tanpa npm.** Situs harus jalan dengan membuka `index.html` langsung.
- Font dimuat dari Google Fonts (Plus Jakarta Sans). Gambar disimpan lokal di `assets/`.

## Design system (sumber kebenaran ada di `:root` styles.css)

| Token | Nilai | Catatan |
|-------|-------|---------|
| `--brand` | `#0f5c4a` | Teal hijau, warna utama |
| `--brand-strong` | `#0a4537` | Varian gelap untuk gradient/CTA |
| `--accent` | `#e8762f` | Oranye hangat, satu-satunya warna aksi |
| `--bg` | `#faf6ee` | Latar krem |
| `--tint` | `#f1ece0` | Latar section selang-seling |
| `--ink` | `#1b2420` | Teks utama |
| `--muted` | `#5d6b63` | Teks sekunder |
| `--radius` | `16px` | Kartu dan media |
| `--radius-pill` | `999px` | Tombol |
| Font | Plus Jakarta Sans | Heading 800, body 400-600 |

## Aturan desain (tidak boleh dilanggar)

- **Satu warna aksen.** Hanya `--accent` untuk semua CTA dan highlight. Jangan menambah warna aksi baru.
- **Satu sistem radius.** Pakai variabel radius yang ada.
- **Satu tema** (light). Jangan membalik section ke mode gelap di tengah halaman, kecuali blok CTA dan footer yang memang sengaja gelap.
- **Tanpa em-dash** di seluruh teks.
- **Shadow halus** saja, hindari bayangan tebal.
- Gambar selalu punya `alt`, `width`, `height`, dan `loading` yang sesuai.

## Motion

- Scroll-reveal lewat `IntersectionObserver` (lihat `app.js`), bukan event `scroll` untuk animasi.
- Semua animasi wajib dimatikan saat `prefers-reduced-motion: reduce`.
- Animasi harus punya alasan (hierarki atau umpan balik), bukan sekadar hiasan.

## Aksesibilitas

- Pertahankan skip link, label ARIA pada nav dan tombol, dan kontras minimal WCAG AA.
- Komponen interaktif (menu mobile, accordion) harus tetap bisa diakses keyboard. Accordion memakai `<details>/<summary>` native.

## Konvensi kode

- Kelas CSS memakai pola BEM longgar (`block__element`, `block--modifier`).
- JavaScript dibungkus IIFE, mode `"use strict"`, dengan pengecekan null sebelum manipulasi DOM.
- Jaga `index.html`, `styles.css`, `app.js` tetap terpisah. Jangan inline CSS atau JS besar ke HTML.

## Verifikasi sebelum selesai

Render halaman (mis. headless Chromium), cek di lebar 390px dan 1280px, pastikan tidak ada em-dash, dan pastikan tidak ada dependensi baru.
