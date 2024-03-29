/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

const isGithubActions = process?.env?.GITHUB_ACTIONS || false;

const repo = "guilhermerodpais-app";
let assetPrefix = `/${repo}/`;
let basePath = `/${repo}`;

const isProd = process.env.NODE_ENV === "production";

if (isGithubActions) {
  // trim off `<owner>/`
  if (process?.env?.GITHUB_REPOSITORY) {
    const repo = process?.env?.GITHUB_REPOSITORY.replace(/.*?\//, "");
  }

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  assetPrefix: isProd ? assetPrefix : '',
  basePath: isProd ? basePath : '',
  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  images: {
    loader: "imgix",
    path: 'the "domain" of your Imigix source',
  },
};

export default config;
