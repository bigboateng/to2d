import OGImage, { alt, contentType, generateImageMetadata, size } from './opengraph-image'

export { alt, contentType, generateImageMetadata, size }

export function generateStaticParams() {
  return [{}]
}

export default function Image() {
  return OGImage()
}
