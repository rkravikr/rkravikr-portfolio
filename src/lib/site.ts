const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://rkravikr-portfolio.vercel.app');

export const siteUrl = rawSiteUrl.replace(/\/+$/, '');
