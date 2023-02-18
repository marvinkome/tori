/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "igrkkmuriqdsbzbmhrzw.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
