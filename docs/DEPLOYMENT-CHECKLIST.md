# 📋 Website Deployment Checklist
## Shamli Physiotherapy Osteo Chiro Clinic
### Deploying to Netlify with shamliphysiotherapy.com
### Updated: June 12, 2026

Use this checklist to ensure a smooth, successful website launch on Netlify.

---

## 🟢 Phase 1: Development (COMPLETED ✅)

### Website Build
- [x] 7 HTML pages built (Home, About, Services, Our Team, Contact, Privacy, Thank You)
- [x] Custom 404 error page
- [x] CSS stylesheet complete with animations, responsive design
- [x] Critical CSS inlined for fast first paint
- [x] JavaScript complete with slideshows, lightbox, animations

### Image Integration (60 images total)
- [x] 12 clinic photos in Home page hero slideshow
- [x] 6 clinic photos in About page story slideshow
- [x] 14 award images in About page gallery
- [x] Dr. Jitendra portrait + 17 certificates
- [x] Dr. Amrita portrait + 11 certificates
- [x] Logo optimized (`logo.webp` 8KB)
- [x] All placeholder text removed
- [x] SEO alt text on every image
- [x] Lazy loading on all non-critical images

### Interactive Features
- [x] Manual slideshows with touch/swipe support (autoplay removed)
- [x] Lightbox popup with prev/next navigation and keyboard controls
- [x] Multi-step appointment form with validation + ARIA attributes
- [x] Auto-scrolling testimonial slider
- [x] Count-up stat animations in hero section
- [x] Infinite gallery carousels
- [x] FAQ accordion
- [x] Mobile hamburger menu
- [x] Back-to-top button
- [x] WhatsApp floating button with tooltip
- [x] Sticky services navigation
- [x] 3D card hover effects
- [x] Page transition animations
- [x] YouTube click-to-load facades
- [x] Google Maps lazy-loaded embed

### Netlify Configuration
- [x] Form has `data-netlify="true"` attribute
- [x] Honeypot spam protection configured
- [x] `netlify.toml` — redirects, headers, cache rules (single source of truth)
- [x] Privacy Policy page with full legal content

### Code Quality
- [x] No duplicate `<meta viewport>` tags
- [x] No arbitrary inline styles (only 2 legitimate: honeypot + iframe)
- [x] No inline `<style>` blocks on 404/thankyou (moved to style.css)
- [x] Valid Schema.org JSON-LD (MedicalClinic, FAQPage, BreadcrumbList, MedicalProcedure)
- [x] No dead code (`.htaccess`, `php/`, `_headers`, `500.html`, `_redirects` removed)
- [x] Security headers: HSTS, CSP (`'unsafe-inline'` in script-src for JSON-LD), X-Frame-Options, cache policies
- [x] LCP preload for hero image on homepage
- [x] og:image dimensions on all 5 main pages
- [x] Dynamic copyright year via JS
- [x] www → non-www redirect in netlify.toml
- [x] `/docs/` blocked from public access

---

## 🧪 Phase 2: Testing (DO THIS BEFORE DEPLOYING)

### Local Testing
- [x] Start local server: `python server.py` (port 8001, no-cache)
- [x] Open `http://localhost:8001` in browser
- [x] Check browser console for errors (F12 → Console)

### Page-by-Page Testing

#### Home Page (`index.html`)
- [x] Logo loads (top-left, WebP format)
- [x] Hero slideshow is **manual only** (swipe/arrows/dots — no auto-advance)
- [x] Slideshow dots update correctly
- [x] Prev/Next arrows work on hover
- [x] Click slideshow image → lightbox opens
- [x] Lightbox prev/next and close work
- [x] Keyboard: ← → arrows, Escape key in lightbox
- [x] Hero stats counter animates on scroll
- [x] All navigation links work
- [x] Testimonial slider auto-scrolls
- [x] YouTube click-to-load works
- [x] FAQ accordion expands/collapses
- [x] WhatsApp button visible (bottom-right)
- [x] Back-to-top appears on scroll

#### About Page (`about.html`)
- [x] Story slideshow works (6 images)
- [x] **Manual only** — swipe or tap arrows to advance
- [x] Swipe works on touch devices
- [x] Awards gallery carousel works
- [x] Click any award → lightbox with gallery navigation
- [x] Counter shows (e.g., "3 / 14")

#### Services Page (`services.html`)
- [x] Sticky service navigation works on scroll
- [x] Service navigation buttons scroll to sections
- [x] All 3 service sections load
- [x] Condition cards display with icons
- [x] CTA buttons link to contact page

#### Our Team Page (`doctors.html`)
- [x] Dr. Jitendra photo loads
- [x] 17 certificates display in gallery carousel
- [x] Click certificate → lightbox with counter
- [x] Dr. Amrita photo loads
- [x] 11 certificates display correctly

#### Contact Page (`contact.html`)
- [x] Step 1 form fields work (name, phone, email)
- [x] Step 2 advances after validation
- [x] Date input blocks past dates (min = tomorrow)
- [x] Back button returns to Step 1
- [x] Google Maps embed lazy-loads on scroll
- [x] Contact cards display correctly
- [x] ARIA error messages work on invalid fields

#### Privacy Page (`privacy.html`)
- [x] All 9 sections display correctly
- [x] Links to Google/Netlify privacy policies work
- [x] Contact information is correct

#### Thank You Page (`thankyou.html`)
- [x] Logo links back to home
- [x] Check icon animates in
- [x] Google Review button works
- [x] Get Directions link opens Google Maps
- [x] WhatsApp button works

#### Error Pages
- [x] 404 page displays for invalid URLs (e.g., `/nonexistent`)
- [x] Go Home and Book Appointment buttons work

### Mobile Testing
- [x] Chrome DevTools: **F12 → Ctrl+Shift+M** → test at 375px width
- [x] Test at 768px (tablet)
- [x] Mobile menu opens/closes
- [x] Slideshow arrows always visible on mobile
- [x] Lightbox works on mobile
- [x] All text readable (no overflow)
- [x] Buttons tappable (not too small)

### Cross-Browser Testing
- [x] Chrome
- [x] Firefox
- [x] Edge
- [ ] Safari (if available)

---

## 🛒 Phase 3: Buy Domain

### Domain Registration
- [x] Go to **Hostinger** (https://www.hostinger.in)
- [x] Search for `shamliphysiotherapy.com`
- [x] Domain purchased and registered
- [x] WHOIS Privacy Protection enabled
- [x] Registration confirmed

> ⚠️ **Buy domain ONLY.** Do NOT buy hosting — Netlify is free.

---

## 🐙 Phase 3b: Push to GitHub (DO THIS FIRST)

> See `docs/GITHUB-DEPLOY-GUIDE.md` for the full step-by-step GitHub guide.

- [x] Create GitHub account at https://github.com
- [x] Create new **public** repository named `Shamli-Clinic-Website`
- [x] Git initialized and code pushed
- [x] All files verified on GitHub at https://github.com/keyboard-warrior-777/Shamli-Clinic-Website

---

## 🚀 Phase 4: Deploy to Netlify

### Create Netlify Account
- [x] Go to https://app.netlify.com
- [x] Signed up with GitHub
- [x] Email verified

### Deploy Website via GitHub
- [x] Netlify → **Add new site** → **Import an existing project**
- [x] Connected to GitHub → Selected `Shamli-Clinic-Website` repo
- [x] Auto-deploy configured (pushes to `main` trigger redeploy)
- [x] Site deployed and live

### Site Name
- [x] URL: `https://shamliphysiotherapy.netlify.app`

### Test Netlify URL
- [x] All 7 pages load correctly
- [x] Clean URLs work
- [x] Slideshows work
- [x] Lightbox works
- [x] Form submissions verified
- [x] Netlify Dashboard → **Forms** → submissions confirmed

---

## 🔗 Phase 5: Connect Custom Domain

### Point Domain to Netlify
- [x] Netlify → **Domain management** → Domain added
- [x] `shamliphysiotherapy.com` configured
- [x] Nameservers updated at Hostinger to Netlify DNS
- [x] DNS propagation completed

### SSL Certificate
- [x] Netlify auto-provisioned SSL
- [x] HTTPS working (padlock icon confirmed)
- [x] Both `http://` and `https://` redirect to `https://`

---

## 📧 Phase 6: Set Up Email Notifications

### Netlify Form Notifications
- [x] Netlify Dashboard → **Site settings** → **Forms** → **Form notifications**
- [x] Email notification added
- [x] Form: `appointment`
- [x] Email: `physiotherapyshamli@gmail.com`

### Test Email
- [x] Test appointment submitted on live site
- [x] Email received at `physiotherapyshamli@gmail.com`
- [x] All form fields appear in email

---

## ✅ Phase 7: Post-Deployment Verification

### Functionality
- [ ] Homepage loads at `https://shamliphysiotherapy.com`
- [ ] All 7 pages accessible
- [ ] Clean URLs work (`/about`, `/services`, `/doctors`, `/contact`, `/privacy`)
- [ ] Slideshows work (Home + About)
- [ ] Lightbox opens for awards and certificates
- [ ] Mobile menu works
- [ ] Appointment form submits successfully
- [ ] **Email received** at `physiotherapyshamli@gmail.com`
- [ ] Google Maps loads on contact page
- [ ] YouTube click-to-load works
- [ ] WhatsApp button opens WhatsApp
- [ ] Social media links open correct profiles
- [ ] Phone numbers clickable on mobile
- [ ] Email links open email client
- [ ] Testimonial slider auto-scrolls
- [ ] 404 page shows for invalid URLs
- [ ] Privacy page accessible from footer
Enable Netlify's "Asset optimization" (CSS/JS minification) in Site settings → Build & deploy → Post processing.

### Security
- [ ] Check security headers at https://securityheaders.com
- [ ] HSTS active
- [ ] CSP active
- [ ] X-Frame-Options set

### Performance
- [ ] Test at https://pagespeed.web.dev/ — aim for 80+ score
- [ ] All pages load in under 3 seconds
- [ ] No console errors (F12 → Console)
- [ ] No 404 errors (F12 → Network)

### Mobile Verification
- [ ] Test on actual iPhone/Android
- [ ] Slideshow swipe works
- [ ] Text readable, no horizontal scroll
- [ ] Buttons are tappable
- [ ] Lightbox works and closes properly

---

## 🔍 Phase 8: SEO & Marketing

### Search Engine Registration
- [x] Google Search Console → Property added → Verified
- [x] Sitemap submitted (`https://shamliphysiotherapy.com/sitemap.xml`)
- [x] Google Business Profile → Claimed → Verified
- [x] Photos, hours, services added to Google Business
- [ ] Bing Webmaster Tools (optional)

### Social Media
- [x] Facebook page linked to website
- [x] Instagram bio updated with website link
- [x] YouTube channel linked
- [ ] Post announcement about new website on LinkedIn

### Marketing Push
- [ ] Add website to email signature
- [ ] Print on business cards
- [ ] Share with existing patients
- [ ] Add to local directories (Justdial, Practo)
- [ ] Tell patients to leave Google reviews

---

## 📝 Important Credentials (Fill & Keep Safe)

### Domain (Hostinger or GoDaddy)
- **Registrar:** Hostinger 
- **Domain:** shamliphysiotherapy.com
- **Login URL:** https://www.hostinger.in 
- **Username:** ___________________
- **Password:** ___________________ (use password manager)
- **Expiry Date:** ___/___/______

### Netlify
- **Login URL:** https://app.netlify.com
- **Email:** ___________________
- **Site URL:** https://shamliphysiotherapy.netlify.app
- **Custom Domain:** https://shamliphysiotherapy.com

### Google Services
- **Search Console:** Verified? ☐ Yes ☐ No
- **Business Profile:** Claimed? ☐ Yes ☐ No

---

## 🔄 Ongoing Maintenance

### Monthly
- [ ] Check form submissions in Netlify dashboard
- [ ] Reply to all form submissions
- [ ] Check website loads correctly
- [ ] Respond to Google reviews

### Quarterly
- [ ] Update photos if new ones available
- [ ] Review Google Search Console for issues
- [ ] Update content if services change
- [ ] Check all links still work
- [ ] Update sitemap.xml lastmod dates if content changed

### Annually
- [ ] Renew domain registration at Hostinger / GoDaddy
- [ ] Copyright year auto-updates via JS (no manual edit needed)
- [ ] Full content review and refresh

---

## ✅ Completion Record

**Website Launch Date:** June 10, 2026

**Deployed By:** keyboard-warrior-777

**Domain:** shamliphysiotherapy.com

**Hosting:** Netlify (free) — auto-deploys from GitHub

**GitHub Repo:** https://github.com/keyboard-warrior-777/Shamli-Clinic-Website

**Notes:**
- Deployed via GitHub integration (not drag & drop)
- Google Search Console verified, sitemap submitted
- SEO keywords optimized for Shamli physiotherapy/chiropractic
- Performance optimization plan prepared (on hold to conserve build minutes)

---

**🎊 Your website is built, tested, and ready to launch on Netlify!**

Follow this checklist phase by phase — don't skip testing.

*Last updated: June 12, 2026*
