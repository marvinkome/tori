export const getBaseURL = () => {
  let url = process?.env?.NEXT_PUBLIC_SITE_URL ?? process?.env?.NEXT_PUBLIC_VERCEL_URL;
  if (!url) {
    throw new Error("NEXT_PUBLIC_SITE_URL or NEXT_PUBLIC_VERCEL_URL not set ");
  }

  // Make sure to include `https://` when not localhost.
  url = url.includes("http") ? url : `https://${url}`;

  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
  return url;
};
