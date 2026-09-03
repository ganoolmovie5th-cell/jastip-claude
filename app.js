/* Jastipin landing page interactions */
(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Sticky nav shadow on scroll
  var nav = document.getElementById("nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Mobile menu toggle
  var toggle = document.getElementById("navToggle");
  var mobile = document.getElementById("navMobile");
  if (toggle && mobile) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
      mobile.hidden = !open;
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    mobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setOpen(false); });
    });
  }

  // Scroll reveal (respects reduced motion)
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  }
})();

/* ===== Dark mode toggle ===== */
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("themeBtn");
  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) {}
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var apply = function (dark) {
    root.classList.toggle("dark", dark);
    if (btn) btn.setAttribute("aria-pressed", String(dark));
  };
  apply(stored ? stored === "dark" : prefersDark);
  if (btn) {
    btn.addEventListener("click", function () {
      var dark = !root.classList.contains("dark");
      apply(dark);
      try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
    });
  }
})();

/* ===== Share button (Web Share API + copy fallback) ===== */
(function () {
  var btn = document.getElementById("shareBtn");
  if (!btn) return;
  var data = {
    title: document.title,
    text: "Jastipin \u2014 jasa titip belanja tepercaya dari mana saja.",
    url: location.href
  };
  var flash = function (msg) {
    var old = btn.getAttribute("aria-label");
    btn.classList.add("is-ok");
    btn.setAttribute("aria-label", msg);
    setTimeout(function () { btn.classList.remove("is-ok"); btn.setAttribute("aria-label", old); }, 1600);
  };
  btn.addEventListener("click", function () {
    if (navigator.share) {
      navigator.share(data).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(data.url).then(function () { flash("Link disalin!"); });
    } else {
      window.open("https://wa.me/?text=" + encodeURIComponent(data.text + " " + data.url), "_blank");
    }
  });
})();

/* ===== Resi tracker ===== */
(function () {
  var form = document.getElementById("trackForm");
  if (!form) return;
  var note = document.getElementById("trackNote");
  // Halaman lacak resmi tiap kurir. {no} diganti nomor resi.
  var urls = {
    jne: "https://www.jne.co.id/id/tracking/trace",
    sicepat: "https://www.sicepat.com/checkAwb",
    jnt: "https://www.jet.co.id/track",
    pos: "https://www.posindonesia.co.id/id/tracking",
    anteraja: "https://anteraja.id/tracking",
    ninja: "https://www.ninjaxpress.co/id-id/tracking?id={no}"
  };
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var courier = document.getElementById("courier").value;
    var no = document.getElementById("trackNo").value.trim();
    if (!no) return;
    var base = urls[courier];
    var url = base.indexOf("{no}") > -1 ? base.replace("{no}", encodeURIComponent(no)) : base;
    var win = window.open(url, "_blank", "noopener");
    if (note) {
      note.hidden = false;
      note.textContent = win
        ? "Membuka halaman lacak " + courier.toUpperCase() + ". Tempel nomor resi " + no + " bila belum terisi otomatis."
        : "Popup diblokir. Izinkan popup lalu coba lagi.";
    }
  });
})();

/* ===== Price calculator + SEA currency converter ===== */
(function () {
  var modal = document.getElementById("calcModal");
  if (!modal) return;
  var btn = document.getElementById("calcBtn");
  var close = document.getElementById("calcClose");
  var overlay = document.getElementById("calcOverlay");
  var form = document.getElementById("calcForm");
  var result = document.getElementById("calcResult");
  var currency = document.getElementById("currency");
  var foreignPrice = document.getElementById("foreignPrice");
  var itemPrice = document.getElementById("itemPrice");
  var fxNote = document.getElementById("fxNote");
  var waBtn = document.getElementById("calcWa");

  // Fallback rate: berapa Rupiah per 1 unit mata uang (perkiraan, dipakai bila API gagal).
  var fallback = { IDR: 1, SGD: 12100, MYR: 3650, THB: 470, PHP: 290, VND: 0.64, BND: 12100, KHR: 4, LAK: 0.75, MMK: 7.8 };
  var rates = null;      // IDR per 1 unit
  var fetchedAt = 0;

  var fmt = function (n) { return "Rp " + Math.round(n).toLocaleString("id-ID"); };

  var loadRates = function () {
    // cache 6 jam
    if (rates && Date.now() - fetchedAt < 216e5) return Promise.resolve(rates);
    return fetch("https://open.er-api.com/v6/latest/IDR")
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d && d.result === "success" && d.rates) {
          rates = {};
          Object.keys(fallback).forEach(function (c) {
            // d.rates[c] = unit asing per 1 IDR -> balik jadi IDR per 1 unit
            rates[c] = c === "IDR" ? 1 : (d.rates[c] ? 1 / d.rates[c] : fallback[c]);
          });
          fetchedAt = Date.now();
          return rates;
        }
        return fallback;
      })
      .catch(function () { return fallback; });
  };

  var convert = function () {
    var cur = currency.value;
    var amt = parseFloat(foreignPrice.value) || 0;
    if (cur === "IDR" || amt <= 0) { fxNote.hidden = true; return; }
    loadRates().then(function (rt) {
      var rate = (rt && rt[cur]) || fallback[cur];
      var rupiah = amt * rate;
      itemPrice.value = Math.round(rupiah);
      fxNote.hidden = false;
      fxNote.textContent = "1 " + cur + " \u2248 " + fmt(rate) + " \u00b7 " +
        amt.toLocaleString("id-ID") + " " + cur + " = " + fmt(rupiah) +
        (rates ? " (kurs terkini)" : " (kurs perkiraan)");
    });
  };

  currency.addEventListener("change", convert);
  foreignPrice.addEventListener("input", convert);

  var open = function (o) { modal.hidden = !o; };
  if (btn) btn.addEventListener("click", function () { open(true); });
  if (close) close.addEventListener("click", function () { open(false); });
  if (overlay) overlay.addEventListener("click", function () { open(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) open(false); });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var price = parseFloat(itemPrice.value) || 0;
    var weight = parseFloat(document.getElementById("weight").value) || 0;
    var feePercent = parseFloat(document.getElementById("itemFeePercent").value) || 5;

    var fee = Math.max(price * (feePercent / 100), 25000);
    var ship = Math.max(Math.ceil(weight / 500) * 10000, 40000);
    var total = price + fee + ship;

    document.getElementById("resItem").textContent = fmt(price);
    document.getElementById("resFee").textContent = fmt(fee);
    document.getElementById("resShip").textContent = fmt(ship);
    document.getElementById("resTotal").textContent = fmt(total);
    result.hidden = false;

    if (waBtn) {
      var cur = currency.value;
      var amt = parseFloat(foreignPrice.value) || 0;
      var msg = "Halo Jastipin, saya mau nitip barang.\n" +
        (cur !== "IDR" && amt > 0 ? "- Harga toko: " + amt.toLocaleString("id-ID") + " " + cur + "\n" : "") +
        "- Harga barang: " + fmt(price) + "\n" +
        "- Berat: " + weight + " gram\n" +
        "- Biaya titip: " + fmt(fee) + "\n" +
        "- Ongkir (estimasi): " + fmt(ship) + "\n" +
        "- Total estimasi: " + fmt(total);
      waBtn.href = "https://wa.me/628118696940?text=" + encodeURIComponent(msg);
    }
  });
})();
