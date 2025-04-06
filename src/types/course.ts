export type TCourse = {
  id: number
  title: string
  slug: string
  status: string
  short_description: string
  thumbnail: string
  banner: string
  banner_mobile: string
  long_description: string
  level: string
  featured: boolean
  store: {
    id: number
    name: string
    slug: string
  }
  teachers: Array<{
    id?: number
    name?: string
    avatar?: string
  }>
  visibility: string
}
