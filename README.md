# Jastipin

Landing page untuk layanan **jasa titip (jastip)** belanja, dibuat sebagai situs statis ringan tanpa proses build. Konsep, copy, dan desain dibangun berdasarkan riset model bisnis jastip di Indonesia: pembeli menitipkan barang yang sulit didapat (skincare, fashion, gadget, snack impor) kepada personal shopper, lalu membayar harga barang ditambah biaya titip dan ongkir.

**Live:** [https://jastip-in.web.id](https://jastip-in.web.id)

![Pratinjau Jastipin](assets/hero.jpg)

## Kenapa situs ini ada

Bisnis jastip sepenuhnya bergantung pada **kepercayaan**: pelanggan membayar di muka untuk barang yang belum mereka pegang. Karena itu seluruh halaman dirancang untuk menurunkan keraguan calon pelanggan:

- Harga transparan di awal (harga barang, biaya titip, ongkir).
- Bukti di setiap tahap (foto struk, foto barang, foto paket).
- Proses empat langkah yang mudah dipahami.
- Testimoni dan angka kepercayaan.
- FAQ yang menjawab keberatan paling umum.

## Fitur

- Halaman statis murni (HTML, CSS, JavaScript vanilla), tanpa framework dan tanpa build step.
- Responsif penuh dari mobile (390px) hingga desktop.
- Animasi scroll-reveal hemat yang menghormati `prefers-reduced-motion`.
- Menu mobile, navigasi sticky, dan accordion FAQ tanpa dependensi.
- Aksesibilitas dasar: skip link, kontras warna AA, atribut alt, dan label ARIA.
- Gambar produk dihasilkan khusus, disimpan lokal di `assets/`.

## Analytics & Tracking

| Tools | ID | Keterangan |
|-------|----|------------|
| Google Analytics 4 | `G-PH1XJC9W3B` | Event & konversi |
| Google Tag Manager | `GTM-WQ3THMWQ` | Container tag terpusat |
| Vercel Web Analytics | Auto | Page views & Web Vitals |

## SEO

- `sitemap.xml` tersedia di: `https://jastip-in.web.id/sitemap.xml`
- Tag `<link rel="canonical">` mengarah ke `https://jastip-in.web.id/`
- Daftarkan sitemap ke [Google Search Console](https://search.google.com/search-console)

## Struktur proyek

```
jastip-claude/
├── index.html              # Markup + semua tag tracking (GA, GTM, Vercel)
├── styles.css              # Design system + seluruh styling
├── app.js                  # Nav, menu mobile, scroll-reveal
├── sitemap.xml             # Sitemap untuk SEO
├── callback.html           # Redirect OAuth Google (untuk app mobile)
├── favicon.svg             # Favicon branded
├── assets/                 # Gambar produk lokal
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

## Menjalankan secara lokal

```bash
python3 -m http.server 8000
# buka http://localhost:8000
```

## Deploy

Deploy otomatis ke Vercel dari branch `main`. Domain kustom: `jastip-in.web.id`.

## Yang perlu kamu ganti

| Lokasi | Nilai contoh | Ganti dengan |
|--------|--------------|--------------|
| `index.html` (WhatsApp & footer) | `6281200000000` | Nomor WhatsApp bisnis (`62...`) |
| `index.html` (footer) | `halo@jastipin.id` | Email bisnis |
| Statistik | 38, 52.000+, 14.000+, 4,9 | Angka asli bisnis |
| Testimoni | Rani, Dimas, Carissa | Testimoni pelanggan asli |
| `sitemap.xml` → `<lastmod>` | `2026-06-23` | Update saat ada perubahan konten besar |

## Desain

| Token | Nilai |
|-------|-------|
| Warna utama | Teal hijau `#0f5c4a` |
| Aksen CTA | Oranye hangat `#e8762f` |
| Latar | Krem `#faf6ee` |
| Tipografi | Plus Jakarta Sans |
| Radius | 16px (kartu), pill (tombol) |

## Lisensi

Bebas dipakai dan dimodifikasi untuk kebutuhan bisnis jastip kamu.
