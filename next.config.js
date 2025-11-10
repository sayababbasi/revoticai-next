// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // output: 'export', // REMOVE or comment this out
//   images: {
//     unoptimized: true, // keep this if you don't want next/image optimization
//   },
// };

// module.exports = nextConfig;


// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ← this enables static export
  images: { unoptimized: true },
};
module.exports = nextConfig;
