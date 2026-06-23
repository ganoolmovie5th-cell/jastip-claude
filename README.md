# Jastipin

Landing page untuk layanan **jasa titip (jastip)** belanja, dibuat sebagai situs statis ringan tanpa proses build. Konsep, copy, dan desain dibangun berdasarkan riset model bisnis jastip di Indonesia: pembeli menitipkan barang yang sulit didapat (skincare, fashion, gadget, snack impor) kepada personal shopper, lalu membayar harga barang ditambah biaya titip dan ongkir.

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

## Struktur proyek

```
jastip-claude/
├── index.html              # Struktur seluruh halaman
├── styles.css              # Design system + seluruh styling
├── app.js                  # Nav, menu mobile, scroll-reveal
├── assets/                 # Gambar (hero + 4 kategori)
│   ├── hero.jpg
│   ├── beauty.jpg
│   ├── fashion.jpg
│   ├── gadget.jpg
│   └── snacks.jpg
├── README.md
├── AGENTS.md               # Steering file untuk semua AI agent
├── CLAUDE.md               # Steering file khusus Claude (mengarah ke AGENTS.md)
└── .kiro/
    └── steering/           # Steering files terstruktur
        ├── product.md      # Visi produk & konteks bisnis jastip
        ├── tech.md         # Tech stack & konvensi
        └── structure.md    # Peta file & tanggung jawab tiap bagian
```

## Menjalankan secara lokal

Tidak butuh tooling. Cukup buka berkas, atau jalankan server statis sederhana:

```bash
# opsi 1: buka langsung
open index.html        # macOS
xdg-open index.html    # Linux

# opsi 2: server lokal (disarankan agar path relatif konsisten)
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## Deploy ke GitHub Pages

1. Buka **Settings → Pages** di repository ini.
2. Pada **Source**, pilih branch `main` dan folder `/ (root)`.
3. Simpan. Situs akan tersedia di `https://<username>.github.io/jastip-claude/`.

Karena semua path bersifat relatif, situs langsung jalan tanpa konfigurasi tambahan.

## Yang perlu kamu ganti

Beberapa nilai masih berupa contoh dan harus disesuaikan sebelum dipakai produksi:

| Lokasi | Nilai contoh | Ganti dengan |
|--------|--------------|--------------|
| `index.html` (tombol WhatsApp & footer) | `6281200000000` | Nomor WhatsApp bisnis kamu (format internasional tanpa `+`) |
| `index.html` (footer) | `halo@jastipin.id` | Email bisnis kamu |
| Angka di bagian statistik | 38, 52.000+, 14.000+, 4,9 | Angka asli bisnismu |
| Testimoni | Rani, Dimas, Carissa | Testimoni pelanggan asli |

## Desain

| Token | Nilai |
|-------|-------|
| Warna utama | Teal hijau `#0f5c4a` |
| Aksen CTA | Oranye hangat `#e8762f` |
| Latar | Krem `#faf6ee` |
| Tipografi | Plus Jakarta Sans |
| Radius | 16px (kartu), pill (tombol) |

Arah desain dipilih untuk terasa hangat, modern, dan tepercaya, sengaja menghindari gaya gradient ungu generik. Detail standar desain ada di `.kiro/steering/tech.md`.

## Lisensi

Bebas dipakai dan dimodifikasi untuk kebutuhan bisnis jastip kamu.
