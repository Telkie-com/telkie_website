// Cloudflare Pages injects CF_PAGES_BRANCH / CF_PAGES_URL at build time.
// Locally both are undefined, so `npm run build` behaves as production.
const branch = process.env.CF_PAGES_BRANCH;

export const IS_PRODUCTION = !branch || branch === "main";

export const SITE_URL = IS_PRODUCTION
  ? "https://telkie.com"
  : branch === "uat"
    ? "https://uat.telkie.com"
    : (process.env.CF_PAGES_URL ?? "https://telkie.com"); // PR / feature-branch previews
