# Steering: Jastipin

Panduan untuk setiap AI agent atau kontributor yang bekerja di repository ini. Baca ini sebelum mengubah kode.

## Apa ini

Landing page statis untuk layanan jasa titip (jastip) belanja bernama **Jastipin**. Tujuan utamanya: meyakinkan calon pelanggan agar mau menitipkan pembelian barang, yang inti konversinya adalah **kepercayaan**.

## Prinsip yang tidak boleh dilanggar

1. **Tanpa build step.** Situs ini HTML, CSS, dan JavaScript vanilla. Jangan menambahkan framework, bundler, atau dependensi npm. Harus tetap jalan dengan membuka `index.html` langsung.
2. **Kepercayaan di atas segalanya.** Setiap perubahan copy atau bagian harus memperkuat (bukan melemahkan) sinyal kepercayaan: transparansi harga, bukti proses, garansi, testimoni.
3. **Bahasa Indonesia yang natural.** Seluruh teks untuk pengguna pakai Bahasa Indonesia kasual-profesional, seperti brand jastip lokal. Hindari terjemahan kaku.
4. **Tanpa em-dash.** Gunakan koma, titik, atau tanda kurung. Jangan pakai karakter em-dash di mana pun.
5. **Satu sistem desain.** Satu warna aksen, satu sistem radius, satu tema (light). Lihat `.kiro/steering/tech.md`.
6. **Aksesibilitas dijaga.** Pertahankan skip link, label ARIA, atribut alt, kontras AA, dan dukungan `prefers-reduced-motion`.

## Alur kerja yang diharapkan

- Sebelum kerja kreatif, pahami dulu maksud perubahan (brainstorm singkat), baru implementasi.
- Setelah mengubah tampilan, render dan cek visual sebelum menyatakan selesai.
- Commit kecil dan deskriptif. Pesan commit dalam Bahasa Indonesia atau Inggris yang jelas.
- Jangan commit folder pratinjau, screenshot sementara, atau file sistem.

## Detail lebih lanjut

- Konteks produk dan bisnis: `.kiro/steering/product.md`
- Tech stack dan konvensi: `.kiro/steering/tech.md`
- Peta struktur file: `.kiro/steering/structure.md`
