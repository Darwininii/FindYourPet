/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Ignora los errores de Firebase durante el build
    typescript: {
      ignoreBuildErrors: true,
    },
    // Si usas Firebase en el cliente
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          net: false,
          tls: false,
        };
      }
      return config;
    },
  };
  
  export default nextConfig;