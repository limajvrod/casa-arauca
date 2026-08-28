/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Imagens já vêm pré-dimensionadas da própria URL do Unsplash (w=/q=),
    // então dispensamos a otimização de imagem do Next/Vercel — evita
    // depender do binário nativo do `sharp` no ambiente de build.
    unoptimized: true,
  },
};

export default nextConfig;
