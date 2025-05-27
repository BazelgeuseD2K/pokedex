/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
      return [
          {
              source: '/api/pokemon',
              destination: 'https://44k2n93ea9.execute-api.eu-west-2.amazonaws.com/Prod/pokemon>/Prod/pokemon',
          },
          {
              source: '/api/pokemon/:id',
              destination: 'https://44k2n93ea9.execute-api.eu-west-2.amazonaws.com/Prod/pokemon>/Prod/pokemon/:id',
          },
      ];
  }
};


export default nextConfig;