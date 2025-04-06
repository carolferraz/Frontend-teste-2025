import { create } from 'zustand'
import { TBanner } from '@/types/banner'
import { TCourse } from '@/types/course'
import { courseService } from '@/services/course-service'
import { bannerService } from '@/services/banner-service'

interface CourseStore {
  courses: TCourse[]
  banners: TBanner[]
  loading: boolean
  initialized: boolean
  error: string | null
  favoriteIds: string[]

  initialize: () => Promise<void>
  toggleFavorite: (courseId: string) => void
  getFavoriteCourses: () => TCourse[]
}

export const useCourseStore = create<CourseStore>((set, get) => ({
  courses: [],
  banners: [],
  loading: false,
  initialized: false,
  error: null,
  favoriteIds: [],

  initialize: async () => {
    if (get().initialized) return

    try {
      set({ loading: true, error: null })

      if (typeof window !== 'undefined') {
        const storedFavorites = localStorage.getItem('favoriteCourses')
        const favoriteIds = storedFavorites ? JSON.parse(storedFavorites) : []
        set({ favoriteIds })
      }

      const [coursesResult, bannersResult] = await Promise.all([
        courseService.listCourses({ per_page: 20 }),
        bannerService.listBanners(),
      ])

      set({
        courses: coursesResult.courses,
        banners: bannersResult,
        initialized: true,
        loading: false,
      })
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
      set({ error: 'Falha ao carregar dados', loading: false })
    }
  },

  toggleFavorite: courseId => {
    set(state => {
      const isFavorite = state.favoriteIds.includes(courseId)
      const newFavoriteIds = isFavorite
        ? state.favoriteIds.filter(id => id !== courseId)
        : [...state.favoriteIds, courseId]

      if (typeof window !== 'undefined') {
        localStorage.setItem('favoriteCourses', JSON.stringify(newFavoriteIds))
      }

      return { favoriteIds: newFavoriteIds }
    })
  },

  getFavoriteCourses: () => {
    const { courses, favoriteIds } = get()
    return courses.filter(course => favoriteIds.includes(String(course.id)))
  },
}))
