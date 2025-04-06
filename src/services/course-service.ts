import { apiClient } from '@/lib/api-client'
import { TCourse } from '@/types/course'
import { API_CONFIG } from '@/utils/api-config'

const isClient = typeof window !== 'undefined'

export const courseService = {
  listCourses: (
    filters?: Record<string, string | number | boolean>
  ): Promise<{ courses: TCourse[] }> => {
    if (isClient) {
      return fetch('/api/courses', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => {
        if (!response.ok) {
          return response.json().then(error => {
            throw new Error(`API error: ${response.status} - ${error.message || 'Unknown error'}`)
          })
        }
        return response.json()
      })
    } else {
      const url = new URL(`${API_CONFIG.CONTENT_SERVICE}/courses`)

      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          url.searchParams.append(key, String(value))
        })
      }

      return apiClient.get<{ courses: TCourse[] }>(url.toString())
    }
  },

  getCourse: (slug: string): Promise<TCourse> => {
    if (isClient) {
      return fetch(`/api/courses/${slug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(async response => {
        if (!response.ok) {
          return response.json().catch(error => {
            throw new Error(`API error: ${response.status} - ${error.message || 'Unknown error'}`)
          })
        }
        const data = await response.json()
        return data
      })
    } else {
      return apiClient.get<TCourse>(`${API_CONFIG.CONTENT_SERVICE}/courses/${slug}`)
    }
  },
}
