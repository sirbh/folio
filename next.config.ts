import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/h',
        destination: '/', // replace with your target
        permanent: false,         // use `true` if it's permanent (308), `false` for temporary (307)
      },
    ];
  },
};

export default nextConfig;
