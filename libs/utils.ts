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

export const pausableTimeout = (callback: () => void, timeout: number) => {
  let initialTime = Date.now();
  let remaining = timeout;
  let timerId: any = null;

  const resume = () => {
    if (timerId) return;

    initialTime = Date.now();
    timerId = window.setTimeout(callback, remaining);
  };

  const pause = () => {
    if (!timerId) return;

    clearTimeout(timerId);

    timerId = null;
    remaining -= Date.now() - initialTime;
  };

  const clear = () => {
    if (!timerId) return;
    clearTimeout(timerId);
  };

  resume();
  return {
    pause,
    resume,
    clear,
  };
};
