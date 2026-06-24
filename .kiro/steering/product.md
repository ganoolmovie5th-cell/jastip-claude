# Product Steering: Jastipin

## Inti produk

Jastipin adalah layanan **jasa titip (jastip)**: pelanggan menitipkan pembelian barang kepada personal shopper, lalu membayar harga barang ditambah biaya titip dan ongkir. Situs ini adalah landing page yang mengubah pengunjung menjadi pelanggan yang mau memulai titipan lewat WhatsApp.

**URL live:** https://jastip-in.web.id

## Ekosistem produk

| Komponen | Repo | Keterangan |
|----------|------|------------|
| Landing page (ini) | `jastip-claude` | Situs statis, deploy ke Vercel, domain `jastip-in.web.id` |
| Aplikasi mobile | `jastip-mobile-claude` | Expo SDK 54, React Native |

File `callback.html` di repo ini berfungsi sebagai halaman redirect OAuth Google untuk aplikasi mobile.

## Konteks bisnis jastip

- Jastip populer di Indonesia untuk barang sulit didapat lokal: skincare Korea/Jepang, sneakers rilisan terbatas, gadget belum rilis resmi, snack impor.
- Model pendapatan: biaya titip (flat atau persentase) di atas harga barang, plus ongkir.
- Hambatan terbesar konversi adalah **risiko kepercayaan**: pelanggan bayar di muka untuk barang yang belum dipegang.
- Pemenang di pasar ini adalah yang paling transparan dan paling komunikatif.

## Siapa penggunanya

- Pembeli Indonesia yang melek mobile, mayoritas akses lewat ponsel.
- Sensitif harga tapi rela bayar premium untuk barang yang tidak tersedia lokal.
- Hati-hati dan mudah ragu, butuh bukti sebelum percaya.

## Target halaman

Tujuan tunggal: mendorong pengunjung menekan **Mulai Nitip** dan membuka chat WhatsApp.

Pesan kunci:
1. Bisa titip barang dari mana saja.
2. Harga transparan, tanpa biaya tersembunyi.
3. Ada bukti dan update di setiap langkah.
4. Prosesnya sederhana (empat langkah).

## Nada komunikasi

Hangat, jelas, meyakinkan, dan jujur. Hindari klaim berlebihan. Pakai Bahasa Indonesia kasual-profesional. Tanpa em-dash.

## Di luar cakupan (saat ini)

Tidak ada katalog produk, keranjang, akun, atau pembayaran on-site. Transaksi terjadi lewat WhatsApp.
