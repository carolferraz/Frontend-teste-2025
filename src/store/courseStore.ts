import { create } from 'zustand'
import { TCourse } from '@/services/course-service'
import { TBanner } from '@/types/banner'
import { courseService } from '@/services/course-service'
import { bannerService } from '@/services/banner-service'

interface CourseStore {
  // Estado
  courses: TCourse[]
  banners: TBanner[]
  loading: boolean
  initialized: boolean
  error: string | null
  favoriteIds: string[]

  // Ações
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
    // Só inicializa uma vez
    if (get().initialized) return

    try {
      set({ loading: true, error: null })

      // Carrega favoritos do localStorage
      if (typeof window !== 'undefined') {
        const storedFavorites = localStorage.getItem('favoriteCourses')
        const favoriteIds = storedFavorites ? JSON.parse(storedFavorites) : []
        set({ favoriteIds })
      }

      // Busca dados em paralelo
      const [coursesResult, bannersResult] = await Promise.all([
        courseService.listCourses(),
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
