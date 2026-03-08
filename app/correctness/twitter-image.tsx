import OGImage, { alt, contentType, generateImageMetadata, size } from './opengraph-image'

export { alt, contentType, generateImageMetadata, size }

export function generateStaticParams() {
  return [
    { __metadata_id__: [] },
    { __metadata_id__: ['default'] },
  ]
}

export default function Image() {
  return OGImage()
}
