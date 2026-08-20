# Jastipin

Landing page statis untuk layanan jasa titip (jastip) belanja. Dirancang untuk membangun kepercayaan: harga transparan, bukti proses, dan kemudahan kontak. Tanpa framework, tanpa build step.

**Tech Stack:** HTML · CSS · JavaScript (vanilla) · Vercel

**Live:** [jastip-in.web.id](https://www.jastip-in.web.id)

## Features

- Halaman statis murni (buka index.html langsung)
- Responsif (mobile 390px hingga desktop)
- Animasi scroll-reveal (menghormati prefers-reduced-motion)
- Menu mobile, navigasi sticky, accordion FAQ
- Price calculator modal (hitung biaya + ongkir + total)
- Trust badges (established, verified, secure, 24/7 support)
- Aksesibilitas WCAG AA (skip link, kontras 5.34:1, heading sequential, alt, ARIA)
- Security headers via vercel.json (CSP, X-Content-Type-Options, dll)
- SEO (Open Graph, Twitter Card, JSON-LD LocalBusiness, robots.txt, sitemap.xml)
- Google Analytics 4 + GTM + Vercel Web Analytics

## Getting Started

```bash
python3 -m http.server 8000
# buka http://localhost:8000
```

Deploy otomatis ke Vercel dari branch `main`.

## Project Structure

```
index.html          → Markup utama + tracking tags
styles.css          → Design system + styling
app.js              → Nav, menu mobile, scroll-reveal
sitemap.xml         → Sitemap SEO
robots.txt          → Robots directives
vercel.json         → Security headers + deploy config
callback.html       → Redirect OAuth Google (untuk app mobile)
favicon.svg         → Favicon branded
assets/             → Gambar produk (hero, beauty, fashion, gadget, snacks)
```

## Design Tokens

- Warna utama: Teal `#0f5c4a`
- Aksen CTA: Oranye `#e8762f`
- Latar: Krem `#faf6ee`
- Font: Plus Jakarta Sans
- Radius: 16px (kartu), pill (tombol)

## License

MIT
