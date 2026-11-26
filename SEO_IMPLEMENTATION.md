# SEO Implementation & Personal Search Visibility Guide

This document records the technical SEO audit, implemented changes, structured data, and manual steps to strengthen Google Search visibility for **Ravi Kumar Verma** across:

`Ravi Kumar Verma → Software Developer → Portfolio → LinkedIn → GitHub`

---

## 1. Technical SEO Audit Summary (Pre-Fix Findings)

1. **Missing `metadataBase`:** Next.js warned during build (`metadataBase property in metadata export is not set...`), causing Open Graph/Twitter image URLs to fall back to `http://localhost:3000`.
2. **Missing Canonical URLs:** Neither `/` nor `/projects/[id]` defined `alternates.canonical`.
3. **JSON-LD Fallback & Missing `image`:** `Person` schema fell back to GitHub instead of the production portfolio URL, lacked `image`, and did not include a `WebSite` entity or per-project `SoftwareSourceCode` schema.
4. **Homepage Title/Description Alignment:** Updated to exact personal-search targeting (`Ravi Kumar Verma | Software Developer & Portfolio`).
5. **Broken Repo Link Fixed Earlier:** Corrected `ajay-press-v2` (404) to `ajay-press-v1`.

---

## 2. Implemented Changes

- **[src/lib/site.ts](src/lib/site.ts):** Centralized canonical `siteUrl` resolver (`NEXT_PUBLIC_SITE_URL` → `VERCEL_PROJECT_PRODUCTION_URL` → `https://rkravikr-portfolio.vercel.app`).
- **[src/app/layout.tsx](src/app/layout.tsx):**
  - Added `metadataBase`, `alternates.canonical: '/'`, targeted title/description, Open Graph `url`, Twitter card metadata, and `googleBot` snippet/preview directives.
  - Added `Person` + `WebSite` JSON-LD linking `https://rkravikr-portfolio.vercel.app`, `https://linkedin.com/in/rkravikr`, and `https://github.com/rkravikr`, plus portrait `image` and verified skills.
- **[src/app/projects/[id]/page.tsx](src/app/projects/%5Bid%5D/page.tsx):**
  - Added `alternates.canonical`, Open Graph `url`, unique per-project title/description, and `SoftwareSourceCode` JSON-LD attributing `author` to `Ravi Kumar Verma`.
- **[src/app/sitemap.ts](src/app/sitemap.ts):** Dynamically includes `/` and all 5 static `/projects/[id]` case study URLs using the canonical production domain.
- **[src/app/robots.ts](src/app/robots.ts):** Allows all public routes, declares `sitemap`, and sets `host`.
- **[GITHUB_PROFILE_README.md](GITHUB_PROFILE_README.md):** Ready-to-use GitHub profile README linking back to the portfolio, LinkedIn, and all 5 projects.

---

## 3. Google Search Console Setup & Verification

1. **Add Property:**
   - Open [Google Search Console](https://search.google.com/search-console).
   - Click **Add Property** → choose **URL prefix** → enter `https://rkravikr-portfolio.vercel.app`.
2. **Verify Ownership:**
   - Choose the **HTML tag** verification method.
   - Copy the `content="..."` token Google gives you, add it in Vercel as an env var or in `src/app/layout.tsx` (`metadata.verification.google`), redeploy, and click **Verify**.
   - *(Alternatively, use the **HTML file** method by placing the verification file in `public/`.)*
3. **Submit Sitemap:**
   - In Search Console, go to **Indexing → Sitemaps**.
   - Enter `sitemap.xml` (resolves to `https://rkravikr-portfolio.vercel.app/sitemap.xml`) and click **Submit**.
4. **Inspect URLs & Request Indexing:**
   - Use the top **URL Inspection** bar for:
     - `https://rkravikr-portfolio.vercel.app/`
     - `https://rkravikr-portfolio.vercel.app/projects/campus-core`
     - `https://rkravikr-portfolio.vercel.app/projects/calcify`
     - `https://rkravikr-portfolio.vercel.app/projects/shree-bags`
   - Click **Request Indexing** for each.
5. **Monitor:**
   - Check **Performance → Search results** weekly for impressions and clicks on queries like `"Ravi Kumar Verma"`, `"Ravi Kumar Verma developer"`, and `"Ravi Kumar Verma portfolio"`.

---

## 4. LinkedIn Optimization Checklist (Manual Actions)

1. **Name:** Keep exact spelling `Ravi Kumar Verma` (matching Portfolio & GitHub).
2. **Headline:** `Software Developer | Full-Stack Developer (Next.js, React, TypeScript, Node.js, PostgreSQL)`
3. **Public Profile URL & Visibility:** Confirm `linkedin.com/in/rkravikr` is public to search engines in LinkedIn Settings → Visibility.
4. **Contact Info / Featured Section:** Add `https://rkravikr-portfolio.vercel.app` and `https://github.com/rkravikr` in your Contact Info and Featured links.
5. **About Section:** Mirror your core summary and mention your portfolio projects by name (`Campus Core`, `Calcify`, `Shree Bags`).

---

## 5. GitHub Profile Setup (Manual Action)

1. Create a repository named **`rkravikr`** (`github.com/rkravikr/rkravikr`) if you don't already have one.
2. Copy the contents of `GITHUB_PROFILE_README.md` into its `README.md`.
3. Pin `campus-core`, `calcify-mastery`, `shree-bags`, `rkravikr-portfolio`, `ajay-press-v1`, and `nisarga-grand`, and ensure each repository's **Website** field points to its live Vercel URL.
