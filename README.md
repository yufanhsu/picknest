# PickNest — Amazon Affiliate Website

A minimalist Amazon Associates storefront built for a new generation. Warm cream Morandi palette, responsive, pure HTML/CSS/JS — no framework, no backend. Deploy to any static host.

## File structure

```
picknest/
├── index.html          Home (hero, categories, featured picks, why us)
├── products.html       Shop (category filter + product cards)
├── blog.html           Guides (article list)
├── about.html          About
├── disclosure.html     Affiliate Disclosure (required by Amazon)
├── privacy.html        Privacy Policy (required by Amazon)
├── post-headphones.html  Article: choosing ANC headphones
├── post-home.html        Article: minimalist home finds
├── post-skincare.html    Article: seasonal skincare
├── post-fitness.html     Article: home-gym starter kit
├── post-gifts.html       Article: gifts by budget
├── post-focus.html       Article: focus desk setup
├── css/style.css       Site styles
├── js/main.js          Interactions (menu, filter, scroll reveal)
└── .nojekyll           Tells GitHub Pages to skip Jekyll
```

## Before you go live — must do

### 1. Add your own Amazon Associate Tag (most important)
Every product button currently uses a placeholder link:
```
https://www.amazon.com/?tag=YOUR_ASSOCIATE_TAG
```
Replace every `YOUR_ASSOCIATE_TAG` with your approved tracking ID (e.g. `picknest-20`)
and swap the URL for the real product link (the SiteStripe bar in Associates Central makes these).
Quick find: search for `YOUR_ASSOCIATE_TAG` across all `.html` files.

> ⚠️ Don't drive traffic with live affiliate links until you're approved — follow the Amazon Associates Operating Agreement.

### 2. Product images
Products currently use emoji placeholders (to avoid copyright issues). Once approved, switch to
official Amazon product images (via SiteStripe or the Product Advertising API). Don't borrow images from other sites.

### 3. Replace contact email and brand details
Swap `hello@picknest.example` for your real address everywhere. To rename the brand, find/replace `PickNest`.

## Getting approved by Amazon (key tips)
- Have **real content**: this site ships with six pages plus six full-length articles. That substance helps.
- The **affiliate disclosure** and "As an Amazon Associate I earn from qualifying purchases." are built into
  `disclosure.html` and the footer — keep them.
- Make sure the site is publicly reachable (deployed to a URL) before entering it in the Associates application.

## Deploy options (any one, all free)
- **GitHub Pages**: push the folder to a repo, then Settings → Pages → Branch: main, Folder: / (root).
- **Netlify / Vercel / Cloudflare Pages**: drag-and-drop the folder or connect the repo for auto-deploy.
- **Traditional hosting**: upload all files to your web root via FTP.

Local preview: run `python3 -m http.server` inside the folder, then open http://localhost:8000

## Customizing colors
Open the `:root` block at the top of `css/style.css` and tweak `--cream`, `--clay`, `--sage`, etc.
