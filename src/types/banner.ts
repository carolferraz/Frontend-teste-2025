export type TBanner = {
  id: number
  brand_id: number
  type: string
  link_to: string | null
  target: string
  created_at: string
  updated_at: string
  order: number | null
  title: string
  status: string
  description: string
  rules: Record<string, unknown>
  desktop: string
  mobile: string
  title_image: string | null
}

export type TBannersResponse = {
  banners: TBanner[]
}
