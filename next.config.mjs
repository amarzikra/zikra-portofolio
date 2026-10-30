const isGithubPages = process.env.GITHUB_PAGES === 'true'
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '/zikra-portofolio').replace(/\/$/, '')

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGithubPages ? { output: 'export', basePath } : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: isGithubPages
    ? {
        loader: 'custom',
        loaderFile: './lib/image-loader.js',
      }
    : {
        unoptimized: true,
      },
}

export default nextConfig
