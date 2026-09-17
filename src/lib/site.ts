// Vercel injects these at build time for Git-connected deployments.
// Locally both are undefined, so `npm run build` behaves as production.
const branch = process.env.VERCEL_GIT_COMMIT_REF;
const previewHost = process.env.VERCEL_BRANCH_URL ?? process.env.VERCEL_URL; // no protocol

export const IS_PRODUCTION = !branch || branch === "main";

export const SITE_URL = IS_PRODUCTION
  ? "https://telkie.com"
  : branch === "uat"
    ? "https://uat.telkie.com"
    : previewHost
      ? `https://${previewHost}` // PR / feature-branch previews
      : "https://telkie.com";
