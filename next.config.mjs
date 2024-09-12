/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['alphalete.uk', 'cdn.shopify.com', 'www.nuro.la','517992454425628599.square.site'],
  },
  webpack(config, { isServer }) {
    // Add support for video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/videos/',
            publicPath: '/_next/static/videos/',
          },
        },
      ],
    });

    // Other custom Webpack configurations

    return config;
  },
};

export default nextConfig;
