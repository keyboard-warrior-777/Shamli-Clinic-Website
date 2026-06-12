# Shamli Physiotherapy, Osteopathy & Chiropractic Clinic Website

Welcome to the official repository for the **Shamli Physiotherapy Osteo Chiro Clinic** website. This is a high-performance, fully responsive, and SEO-optimized website built using modern web standards to provide patients with an exceptional digital experience.

**Live Website:** [shamliphysiotherapy.com](https://shamliphysiotherapy.com)
**Platform:** Hosted on Netlify (auto-deploys from this GitHub repo)

---

## 🌟 Key Features

### 💻 User Experience & Design
- **Premium Aesthetics:** Clean, modern medical design with smooth animations, custom SVG graphics, and page transitions.
- **Fully Responsive:** Tailored for mobile, tablet, laptop, and desktop viewports.
- **Interactive Slideshows:** Touch-friendly, manual slideshows highlighting the clinic environment and patient care.
- **Custom Lightbox Gallery:** Click to enlarge clinical credentials, certificates, and awards with intuitive gallery navigation.
- **Patient Appointment Booking:** A multi-step guided booking wizard with live validation and confirmation.

### 🚀 Optimization & Performance
- **Image Optimization:** All assets are encoded in modern WebP format for fast loading without quality loss.
- **Lazy Loading:** Images and third-party resources (like YouTube videos and Google Maps) load on-demand as the user scrolls.
- **Critical CSS Inlined:** Optimized critical rendering path for extremely fast initial page load.
- **Asset Optimization:** Caching policies managed automatically via `netlify.toml`.

### 🔍 SEO & Accessibility
- **Search Engine Ready:** Descriptive meta tags, localized keywords (Shamli, physiotherapist, chiropractic), XML sitemap, and `robots.txt` configuration.
- **Schema.org Structured Data:** JSON-LD schema integration (`MedicalClinic`, `FAQPage`, `BreadcrumbList`, and `MedicalProcedure`) to help search engines understand clinic details, hours, and services.
- **Accessible (a11y):** Keyboard navigation support, ARIA attributes for form validation, reduced-motion media query support, high-contrast styling, and WCAG-compliant color contrast ratios.
- **Google Search Console:** Verified and indexed with sitemap submitted.

---

## 🛠️ Technology Stack

- **Structure:** Semantic HTML5
- **Styling:** Custom Vanilla CSS3 (no external heavy frameworks)
- **Logic:** Vanilla ES6+ JavaScript (zero external jQuery dependencies)
- **Forms:** Netlify Serverless Forms (with built-in Spam Honeypot protection)
- **Security:** Strict Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), and secure headers configured via `netlify.toml`

---

## 📂 Project Structure

```text
├── index.html          # Homepage with services, testimonials, & FAQ
├── about.html          # Clinic story, mission, and credentials
├── services.html       # Detailed physiotherapy, osteopathy, and chiropractic services
├── doctors.html        # Medical profiles, qualifications, and certificates
├── contact.html        # Guided appointment booking & location details
├── privacy.html        # Privacy Policy & GDPR compliance terms
├── thankyou.html       # Success page after form submission
├── 404.html            # Custom error page for invalid URLs
├── css/
│   ├── style.css       # Main stylesheet (~117 KB)
│   └── critical.css    # Critical above-the-fold CSS (~4 KB, inlined in pages)
├── js/
│   ├── app.js          # App logic, sliders, validation, and lightboxes (~54 KB)
│   └── main.js         # Mirror of app.js (must always be identical)
├── images/             # Optimized WebP assets, doctor portraits, and certificates
├── docs/               # Documentation (blocked from public web access)
├── netlify.toml        # Netlify routing, redirects, and security headers config
├── sitemap.xml         # XML Sitemap for search engine indexing
└── robots.txt          # Crawler directives
```

---

## 💻 Running the Project Locally

To test the website on your local machine:

1. Clone or download this repository.
2. Open the directory and double-click `index.html` to run in your default web browser, or host it locally using a simple Python server:
   ```bash
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your web browser.

---

## 📊 Performance Scores (PageSpeed Insights — June 2026)

| Metric | Desktop | Mobile |
|--------|---------|--------|
| Performance | 77–90 | 69–78 |
| Accessibility | 96–100 | 96–100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

---

## 📄 License & Terms

*Copyright © 2026 Shamli Physiotherapy Osteo Chiro Clinic. All rights reserved.*
The source code and website assets (images, logos, text content) are proprietary and are configured exclusively for the deployment of the Shamli Clinic website.
