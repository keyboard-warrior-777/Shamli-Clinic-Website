# 📋 Website Deployment Checklist
## Shamli Physiotherapy Osteo Chiro Clinic
### Deploying to Netlify with shamliphysiotherapy.com
### Updated: June 10, 2026

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
- [ ] Start local server: `python server.py` (port 8001, no-cache)
- [ ] Open `http://localhost:8001` in browser
- [ ] Check browser console for errors (F12 → Console)

### Page-by-Page Testing

#### Home Page (`index.html`)
- [ ] Logo loads (top-left, WebP format)
- [ ] Hero slideshow is **manual only** (swipe/arrows/dots — no auto-advance)
- [ ] Slideshow dots update correctly
- [ ] Prev/Next arrows work on hover
- [ ] Click slideshow image → lightbox opens
- [ ] Lightbox prev/next and close work
- [ ] Keyboard: ← → arrows, Escape key in lightbox
- [ ] Hero stats counter animates on scroll
- [ ] All navigation links work
- [ ] Testimonial slider auto-scrolls
- [ ] YouTube click-to-load works
- [ ] FAQ accordion expands/collapses
- [ ] WhatsApp button visible (bottom-right)
- [ ] Back-to-top appears on scroll

#### About Page (`about.html`)
- [ ] Story slideshow works (6 images)
- [ ] **Manual only** — swipe or tap arrows to advance
- [ ] Swipe works on touch devices
- [ ] Awards gallery carousel works
- [ ] Click any award → lightbox with gallery navigation
- [ ] Counter shows (e.g., "3 / 14")

#### Services Page (`services.html`)
- [ ] Sticky service navigation works on scroll
- [ ] Service navigation buttons scroll to sections
- [ ] All 3 service sections load
- [ ] Condition cards display with icons
- [ ] CTA buttons link to contact page

#### Our Team Page (`doctors.html`)
- [ ] Dr. Jitendra photo loads
- [ ] 17 certificates display in gallery carousel
- [ ] Click certificate → lightbox with counter
- [ ] Dr. Amrita photo loads
- [ ] 11 certificates display correctly

#### Contact Page (`contact.html`)
- [ ] Step 1 form fields work (name, phone, email)
- [ ] Step 2 advances after validation
- [ ] Date input blocks past dates (min = tomorrow)
- [ ] Back button returns to Step 1
- [ ] Google Maps embed lazy-loads on scroll
- [ ] Contact cards display correctly
- [ ] ARIA error messages work on invalid fields

#### Privacy Page (`privacy.html`)
- [ ] All 9 sections display correctly
- [ ] Links to Google/Netlify privacy policies work
- [ ] Contact information is correct

#### Thank You Page (`thankyou.html`)
- [ ] Logo links back to home
- [ ] Check icon animates in
- [ ] Google Review button works
- [ ] Get Directions link opens Google Maps
- [ ] WhatsApp button works

#### Error Pages
- [ ] 404 page displays for invalid URLs (e.g., `/nonexistent`)
- [ ] Go Home and Book Appointment buttons work

### Mobile Testing
- [ ] Chrome DevTools: **F12 → Ctrl+Shift+M** → test at 375px width
- [ ] Test at 768px (tablet)
- [ ] Mobile menu opens/closes
- [ ] Slideshow arrows always visible on mobile
- [ ] Lightbox works on mobile
- [ ] All text readable (no overflow)
- [ ] Buttons tappable (not too small)

### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Edge
- [ ] Safari (if available)

---

## 🛒 Phase 3: Buy Domain

### Domain Registration
- [ ] Go to **Namecheap** (https://www.namecheap.com)
- [ ] Search for `shamliphysiotherapy.com`
- [ ] Verify it's available
- [ ] Add to cart → Checkout
- [ ] Create account (save credentials!)
- [ ] Enable **WhoisGuard** (free privacy protection)
- [ ] Pay (₹700–900/year via UPI/Card/PayPal)
- [ ] Confirm registration email

> ⚠️ **Buy domain ONLY.** Do NOT buy hosting — Netlify is free.

---

## 🐙 Phase 3b: Push to GitHub (DO THIS FIRST)

> See `docs/GITHUB-DEPLOY-GUIDE.md` for the full step-by-step GitHub guide.

- [ ] Create GitHub account at https://github.com (if not already done)
- [ ] Create new **public** repository named `shamli-clinic-website`
- [ ] Install Git from https://git-scm.com/download/win (if not installed)
- [ ] Run the commands in `GITHUB-DEPLOY-GUIDE.md` to push code
- [ ] Verify all files appear on GitHub

---

## 🚀 Phase 4: Deploy to Netlify

### Create Netlify Account
- [ ] Go to https://app.netlify.com
- [ ] Sign up with **GitHub** (recommended)
- [ ] Verify email

### Deploy Website via GitHub
- [ ] Netlify → **Add new site** → **Import an existing project**
- [ ] Choose **GitHub** → Select `shamli-clinic-website` repo
- [ ] Build settings: leave blank (static site, no build command)
- [ ] Click **Deploy site**
- [ ] Wait for deploy (10–30 seconds)
- [ ] Get your Netlify URL (e.g., `https://random-name.netlify.app`)

### Change Site Name
- [ ] Site settings → Site name → Change to `shamliphysiotherapy`
- [ ] URL becomes: `https://shamliphysiotherapy.netlify.app`

### Test Netlify URL
- [ ] Visit `https://shamliphysiotherapy.netlify.app`
- [ ] All 7 pages load correctly
- [ ] Clean URLs work (`/about`, `/services`, `/doctors`, `/contact`, `/privacy`)
- [ ] Slideshows work
- [ ] Lightbox works
- [ ] Submit a test form
- [ ] Check Netlify Dashboard → **Forms** → verify submission appears

---

## 🔗 Phase 5: Connect Custom Domain

### Point Domain to Netlify
- [ ] Netlify → **Domain management** → **Add a domain**
- [ ] Enter `shamliphysiotherapy.com`
- [ ] Netlify provides 4 nameservers
- [ ] Go to **Namecheap** → Domain → **Nameservers** → Choose "Custom DNS"
- [ ] Enter all 4 Netlify nameservers
- [ ] Save changes

### Wait for DNS Propagation
- [ ] Wait 10–30 minutes (can take up to 48 hours)
- [ ] Check: visit `https://shamliphysiotherapy.com`
- [ ] Verify HTTPS works (padlock icon in browser)

### SSL Certificate
- [ ] Netlify auto-provisions SSL — **no action needed**
- [ ] Verify at https://www.ssllabs.com/ssltest/
- [ ] Both `http://` and `https://` should redirect to `https://`

---

## 📧 Phase 6: Set Up Email Notifications

### Netlify Form Notifications
- [ ] Netlify Dashboard → **Site settings** → **Forms** → **Form notifications**
- [ ] Click **Add notification** → **Email notification**
- [ ] Form: `appointment`
- [ ] Email: `physiojitendra2006@gmail.com`
- [ ] Save

### Test Email
- [ ] Submit a test appointment on live site
- [ ] Check `physiojitendra2006@gmail.com` for notification
- [ ] Check spam folder if not in inbox
- [ ] Verify all form fields appear in email

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
- [ ] **Email received** at `physiojitendra2006@gmail.com`
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
- [ ] Google Search Console → Add property → Verify (DNS method)
- [ ] Submit sitemap (`https://shamliphysiotherapy.com/sitemap.xml`)
- [ ] Google Business Profile → Claim → Verify
- [ ] Add photos, hours, services to Google Business
- [ ] Bing Webmaster Tools (optional)

### Social Media
- [ ] Update Facebook page with website link
- [ ] Update Instagram bio with website link
- [ ] Add website link to YouTube channel
- [ ] Post announcement about new website

### Marketing Push
- [ ] Add website to email signature
- [ ] Print on business cards
- [ ] Share with existing patients
- [ ] Add to local directories (Justdial, Practo)
- [ ] Tell patients to leave Google reviews

---

## 📝 Important Credentials (Fill & Keep Safe)

### Domain (Namecheap)
- **Registrar:** Namecheap
- **Domain:** shamliphysiotherapy.com
- **Login URL:** https://www.namecheap.com/myaccount/login/
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
- [ ] Renew domain registration at Namecheap
- [ ] Copyright year auto-updates via JS (no manual edit needed)
- [ ] Full content review and refresh

---

## ✅ Completion Record

**Website Launch Date:** ___/___/______

**Deployed By:** _______________________

**Domain:** shamliphysiotherapy.com

**Hosting:** Netlify (free)

**Notes:**
_________________________________________
_________________________________________

---

**🎊 Your website is built, tested, and ready to launch on Netlify!**

Follow this checklist phase by phase — don't skip testing.

*Last updated: June 10, 2026*
