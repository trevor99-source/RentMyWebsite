# RentMyWebsite

Website for RentMyWebsite (South Africa). Plain HTML, CSS and JavaScript. No build step.

## Put it on GitHub Pages
1. Upload **all** files in this folder to the root of your repository (keep the file names exactly as they are, in lowercase).
2. In GitHub, go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
4. Wait a minute, then open the address GitHub shows you.

The empty `.nojekyll` file tells GitHub to publish the files as they are, which avoids Jekyll build errors.

## Files
- `index.html`, `services.html`, `terms.html`, `about.html`, `careers.html`, `buy.html`, `404.html`: the pages
- `styles.css`, `site.js`: design and behaviour shared by every page
- `logo.png`, `logo-header.png`, `logo-mark.png`, `favicon.png`, `favicon.ico`, `trevor.jpg`, `hero-tech.jpg`: images
- `robots.txt`, `sitemap.xml`: for search engines (change `https://rentasite.co.za/` to your real web address)

## Things you can change
- Phone, email and WhatsApp number: top of `site.js` (`CONFIG`), plus the footer and links in the HTML files.
- Prices for add-ons and business types: the `ADD` and `BIZ` lists in `site.js`.
- Card payments: deploy `payfast-worker.js` (Cloudflare Worker), then put its address in `checkoutUrl` in `site.js`. Until then, orders go to WhatsApp.
- Job applications on the Careers page open an email to admin@rentasite.co.za.
