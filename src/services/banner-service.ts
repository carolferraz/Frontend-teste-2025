import { apiClient } from '@/lib/api-client'
import { TBanner, TBannersResponse } from '@/types/banner'
import { API_CONFIG } from '@/utils/api-config'

const isClient = typeof window !== 'undefined'

export const bannerService = {
  listBanners: async (): Promise<TBanner[]> => {
    if (isClient) {
      const response = await fetch('/api/banners')
      if (!response.ok) {
        const error = await response.json()
        throw new Error(`API error: ${response.status} - ${error.message || 'Unknown error'}`)
      }
      const data = await response.json()
      return data.banners
    } else {
      const response = await apiClient.get<TBannersResponse>(
        `${API_CONFIG.CONTENT_SERVICE}/banners`
      )
      return response.banners
    }
  },
}
