# 🚀 Quick Start Guide
## Shamli Physiotherapy Osteo Chiro Clinic Website
### Updated: May 19, 2026

---

## 🟢 Status: READY TO DEPLOY

Your website is **fully built and configured** for Netlify. All images are integrated, all forms are wired up, and all config files are in place. Just deploy!

### What's Already Done ✅
- [x] 60+ WebP images integrated
- [x] Hero slideshows (Home + About)
- [x] Lightbox popup system for awards/certificates
- [x] Doctor photos (Dr. Jitendra + Dr. Amrita) + 28 certificates
- [x] Logo optimized (`logo.webp`, 8 KB)
- [x] SEO alt text on all images + lazy loading
- [x] Multi-step appointment form with Netlify Forms (`data-netlify="true"`)
- [x] Responsive design + mobile menu
- [x] WhatsApp button + Back-to-top button
- [x] YouTube click-to-load facades
- [x] Google Maps lazy-loaded embed
- [x] FAQ accordion + Testimonial auto-slider
- [x] Schema.org markup (MedicalClinic, FAQPage, BreadcrumbList, MedicalProcedure)
- [x] Privacy Policy page
- [x] LCP preload for hero image
- [x] og:image dimensions for fast social previews
- [x] Dynamic copyright year (auto-updates via JS)
- [x] Critical CSS for fast first paint
- [x] `netlify.toml` — redirects, security headers, cache rules (single source of truth)
- [x] `sitemap.xml` + `robots.txt` configured
- [x] 404 error page
- [x] Accessibility (ARIA attributes, skip links, keyboard navigation)

---

## ⚡ Quick Test (Right Now, No Setup Needed)

### Test on Your Computer (2 minutes)

**Option 1 — Python (if installed):**
```bash
cd C:\Users\DELL\OneDrive\Desktop\shamli-clinic-website
python -m http.server 8080
```
Then open **http://localhost:8080** in your browser.

**Option 2 — VS Code Live Server:**
1. Install "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Auto-opens at `http://127.0.0.1:5500`

### Test on Your Phone (Same WiFi, 3 minutes)
```bash
python -m http.server 8080 --bind 0.0.0.0
```
1. Find your PC's IP: run `ipconfig` → look for **IPv4 Address** (e.g., `192.168.1.5`)
2. On your phone browser: **http://192.168.1.5:8080**
3. Test slideshows, swipe gestures, lightbox, navigation

---

## 🛒 Step 1: Buy Domain (10 minutes)

### Buy from Namecheap (Recommended)

1. Go to **https://www.namecheap.com**
2. Search for `shamliphysiotherapy.com`
3. Add to cart → Checkout
4. Create account → Pay (₹700–900/year via UPI/Card)
5. Enable **WhoisGuard** (free privacy protection)
6. **Save your login credentials!**

> ⚠️ **Buy domain ONLY.** Do NOT buy hosting — Netlify is free.

---

## 🚀 Step 2: Deploy to Netlify (2 minutes)

### Drag & Drop Method (Fastest)

1. Go to **https://app.netlify.com** → Sign up (GitHub or email)
2. Go to **https://app.netlify.com/drop**
3. **Drag and drop** your `shamli-clinic-website` folder
4. Wait 10–30 seconds — site is live!
5. You get a URL like: `https://zippy-treacle-abc123.netlify.app`

### Change Site Name
1. **Site settings** → **Site name** → Change to `shamliphysiotherapy`
2. URL becomes: `https://shamliphysiotherapy.netlify.app`

### Nothing Else to Configure
The `netlify.toml` file in your project automatically handles:
- ✅ Clean URLs (`/about` → `about.html`)
- ✅ www → non-www redirect (SEO)
- ✅ Custom 404 page
- ✅ `/docs/` blocked from public access
- ✅ Security headers (HSTS, CSP, X-Frame-Options)
- ✅ Cache rules for images, CSS, JS

> 💡 **Post-deploy tip:** Enable "Asset optimization" in Netlify → Site settings → Build & deploy → Post processing to auto-minify CSS/JS.

---

## 🔗 Step 3: Connect Domain to Netlify (15 minutes)

1. In Netlify → **Domain management** → **Add a domain**
2. Enter `shamliphysiotherapy.com`
3. Netlify gives you 4 nameservers (like `dns1.p01.nsone.net`)
4. Go to **Namecheap** → Domain → **Nameservers** → "Custom DNS"
5. Paste all 4 Netlify nameservers
6. Wait 10–30 min (up to 48 hours)
7. **SSL is automatic** — no setup needed!

---

## 📧 Step 4: Set Up Email Notifications (2 minutes)

1. Netlify Dashboard → **Forms** → Click "appointment"
2. **Site settings → Forms → Form notifications**
3. Click **Add notification → Email notification**
4. Enter: `physiojitendra2006@gmail.com`
5. Done! Every submission emails you.

---

## 🔍 Step 5: SEO Setup (15 minutes)

### Google Search Console
1. https://search.google.com/search-console → Add Property
2. Enter `shamliphysiotherapy.com`
3. Verify using DNS (add TXT record in Namecheap or Netlify DNS)
4. Submit sitemap: `https://shamliphysiotherapy.com/sitemap.xml`

### Google Business Profile
1. https://business.google.com → Claim business
2. Add photos, hours, services
3. Link to your website

---

## 🔌 What Works on Netlify

### ✅ Everything — No Changes Needed

| Feature | How It Works |
|---------|-------------|
| Appointment Form | Netlify Forms (`data-netlify="true"`) |
| WhatsApp button | Just a `wa.me` link |
| Google Maps | Lazy-loaded embed iframe |
| YouTube videos | Click-to-load facades (client-side JS) |
| Social media links | Just `<a>` tags |
| Slideshows & Lightbox | Pure JavaScript |
| FAQ accordion | Pure JavaScript |
| Animations | Pure CSS/JS |
| SEO (schema, meta) | Static HTML |
| Security headers | Configured in `netlify.toml` |

---

## 🐛 Quick Fixes

| Problem | Solution |
|---------|----------|
| Form not submitting | Deploy site first — Netlify scans HTML on deploy |
| Slideshow not working | Check F12 → Console for JS errors |
| Lightbox not opening | Ensure `onclick="openLightbox(this)"` on card elements |
| Images not showing | File names are case-sensitive! |
| Domain not connecting | DNS takes up to 48 hours — be patient |
| Slow loading | Already optimized with WebP + critical CSS + Netlify CDN |
| CSP blocking resources | Update Content-Security-Policy in `netlify.toml` |

---

## 💰 Total Cost Summary

| Item | Cost |
|------|------|
| Domain (Namecheap, 1 year) | ₹700–900 |
| Netlify Hosting | ₹0 (free) |
| SSL Certificate | ₹0 (free, automatic) |
| CDN | ₹0 (free, included) |
| Form Handling (100/month) | ₹0 (free) |
| **Total** | **~₹800/year** |

> Compare: Traditional hosting would cost ₹149/month × 12 = ₹1,788 + domain ₹800 = **₹2,588/year**

---

**🎉 Your website is ready. Follow Steps 1–5 and go live!**

*Last updated: May 19, 2026*
