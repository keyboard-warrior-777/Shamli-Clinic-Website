# 🐙 GitHub Deployment Guide (GitHub Desktop)
## Shamli Physiotherapy Osteo Chiro Clinic
### Created: June 10, 2026

This guide walks you through pushing your website to GitHub using **GitHub Desktop** — no command line needed!
After GitHub is done, Netlify will automatically connect to it and deploy your site.

---

## Step 0: Prerequisites

Before you start, make sure you have:

1. **A GitHub account** — create one free at https://github.com
2. **GitHub Desktop installed** — download from https://desktop.github.com
   - During install: sign in with your GitHub account when prompted ✅

---

## Step 1: Add Your Project to GitHub Desktop

1. Open **GitHub Desktop**
2. Click **File** → **Add Local Repository...**
3. Click **Choose...** and navigate to:
   `C:\Users\DELL\OneDrive\Desktop\shamli-clinic-website`
4. Click **Add Repository**

> ⚠️ If GitHub Desktop says *"This directory does not appear to be a Git repository"*, click **"create a repository"** instead, then continue.

---

## Step 2: Create a .gitignore File (Exclude Unnecessary Files)

Before publishing, we need to make sure `server.py` (the local test server) doesn't get uploaded.

1. Open **File Explorer** and go to:
   `C:\Users\DELL\OneDrive\Desktop\shamli-clinic-website`
2. Right-click in an empty space → **New** → **Text Document**
3. Name it exactly: `.gitignore` *(no `.txt` at the end — delete it if it appears)*
   - If Windows warns about changing the extension, click **Yes**
4. Open the file with Notepad and paste this content:

```
server.py
__pycache__/
*.pyc
```

5. Save and close the file

---

## Step 3: Make Your First Commit

A "commit" is like a save point — it records all your files.

1. Go back to **GitHub Desktop**
2. You'll see all your files listed on the left under **Changes**
3. At the bottom-left, fill in:
   - **Summary (required):** `Initial commit: Shamli Physiotherapy website`
   - **Description:** *(optional — leave blank)*
4. Click the blue **"Commit to main"** button

✅ All your files are now saved locally in Git.

---

## Step 4: Publish to GitHub

Now we upload (push) your files to GitHub.com:

1. Click the **"Publish repository"** button at the top of GitHub Desktop
2. A dialog box appears — fill it in:
   - **Name:** `shamli-clinic-website`
   - **Description:** Shamli Physiotherapy Osteo Chiro Clinic website
   - **Keep this code private:** ❌ **Uncheck this** *(must be Public for Netlify free tier)*
3. Click **Publish Repository**

GitHub Desktop will upload everything. This may take a few seconds. ✅

---

## Step 5: Verify Files on GitHub

1. In GitHub Desktop, click **View on GitHub** (or go to):
   `https://github.com/YOUR-USERNAME/shamli-clinic-website`
2. You should see all your files listed:
   - `index.html`, `about.html`, `contact.html`, etc.
   - `css/` folder, `js/` folder, `images/` folder
   - `netlify.toml`, `robots.txt`, `sitemap.xml`
3. Copy the URL from your browser's address bar — you'll need it for Netlify

**GitHub is done!** ✅

---

## Step 6: What Happens After a Change?

Any time you update the website in the future:

1. Open **GitHub Desktop** — it will automatically detect your changes
2. At the bottom-left, type a short summary like: `Updated contact page`
3. Click **"Commit to main"**
4. Click **"Push origin"** (top bar) to upload to GitHub

Because Netlify is connected to GitHub, it will **automatically redeploy** your site
within 30 seconds every time you push! No manual upload needed. 🚀

---

## Troubleshooting

### ❓ Can't name the file `.gitignore` in Windows

Windows sometimes prevents files starting with a dot. Instead:

1. Open **Notepad**
2. Type the content (see Step 2)
3. Click **File** → **Save As**
4. Change **Save as type** to `All Files (*.*)`
5. Type the filename as: `.gitignore`
6. Save it in your project folder

### ❓ GitHub Desktop says "create a repository" instead of "add"

That's fine! Click **"create a repository"** and:
- Set the **Local path** to your project folder
- Name: `shamli-clinic-website`
- Leave "Initialize this repository with a README" **unchecked**
- Click **Create Repository**
- Then continue from Step 3

### ❓ "Publish repository" button is missing

If you see **"Push origin"** instead, that means your repo is already linked. Just click **Push origin**. ✅

### ❓ Files are missing on GitHub after push

Make sure you didn't accidentally skip Step 3 (the commit step). In GitHub Desktop:
- Check the **History** tab — your commit should appear there
- If not, go back to **Changes** and commit again

---

## Files That Will NOT Be Pushed (Excluded by .gitignore)

| File | Reason |
|------|--------|
| `server.py` | Only needed for local testing, not for deployment |
| `__pycache__/` | Python cache — not needed |

> The `docs/` folder **will** be pushed but is blocked from public web access
> by the `netlify.toml` security headers (returns 404 for `/docs/` URLs).

---

## Next Step After GitHub

Once your code is on GitHub, follow **Phase 4** in `DEPLOYMENT-CHECKLIST.md`
to connect Netlify to your GitHub repo and go live!

---

*Last updated: June 10, 2026*
