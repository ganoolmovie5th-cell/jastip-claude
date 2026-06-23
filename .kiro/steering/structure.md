# Structure Steering: Jastipin

## Peta file

```
jastip-claude/
├── index.html        # Seluruh markup halaman, satu file
├── styles.css        # Semua styling + token desain di :root
├── app.js            # Interaksi: nav sticky, menu mobile, scroll-reveal, tahun footer
├── assets/           # Aset gambar lokal
│   ├── hero.jpg      # Flat-lay hero (tas, paket, paspor, sneakers)
│   ├── beauty.jpg    # Kategori skincare & beauty + dipakai di section "Kenapa Kami"
│   ├── fashion.jpg   # Kategori fashion & sneakers
│   ├── gadget.jpg    # Kategori gadget & elektronik
│   └── snacks.jpg    # Kategori snack & makanan
├── README.md         # Dokumentasi proyek & cara deploy
├── AGENTS.md         # Steering utama untuk semua agent
├── CLAUDE.md         # Steering khusus Claude (mengarah ke AGENTS.md)
└── .kiro/steering/   # Steering terstruktur (product, tech, structure)
```

## Urutan section di `index.html`

1. `header.nav` - navigasi sticky + menu mobile.
2. `section.hero` - judul, lead, CTA, gambar hero.
3. `section.stats` - empat angka kepercayaan (panel teal).
4. `#cara-kerja` - empat langkah proses.
5. `#kategori` - bento grid kategori barang (pakai gambar `assets/`).
6. `#kenapa` - split gambar + checklist kepercayaan.
7. `#biaya` - tiga komponen biaya, kartu tengah di-highlight.
8. `#testimoni` - tiga kartu testimoni.
9. `#faq` - accordion `<details>`.
10. `section.cta#kontak` - ajakan akhir ke WhatsApp.
11. `footer.footer` - tautan, kontak, hak cipta.

## Aturan menambah section baru

- Variasikan layout. Jangan pakai pola gambar-kiri-teks-kanan beruntun lebih dari dua kali.
- Tetap satu tema light (kecuali CTA dan footer yang gelap).
- Tambahkan ke navigasi (`nav__links` dan `nav__mobile`) bila relevan, dan jaga nav tetap satu baris di desktop.
- Pakai kelas `reveal` untuk animasi masuk agar konsisten.

## Yang tidak boleh di-commit

- Folder pratinjau atau screenshot sementara (mis. `.preview/`).
- File sistem (`.DS_Store`, dsb).
- Dependensi atau artefak build (tidak ada build step).

## Titik konfigurasi penting

- Nomor WhatsApp: dua tempat di `index.html` (tombol CTA dan footer), format `62...`.
- Email kontak: footer `index.html`.
- Token desain: blok `:root` di `styles.css`.
