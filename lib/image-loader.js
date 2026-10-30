export default function imageLoader({ src }) {
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '')

  return src.startsWith('/') ? `${basePath}${src}` : src
}
