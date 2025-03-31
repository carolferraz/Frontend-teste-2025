import Banner from '@/components/ui/Banner'
import Header from '@/components/ui/Header'
import { courseService, TCourse } from '@/services/course-service'
import { bannerService } from '@/services/banner-service'
import CoursesList from '@/components/ui/CoursesList'

export async function getCourses() {
  try {
    const result: { courses: TCourse[] } = await courseService.listCourses()
    return result.courses
  } catch (error) {
    console.error('Erro ao buscar cursos:', error)
    throw error
  }
}

export async function getBanners() {
  try {
    const banners = await bannerService.listBanners()
    return banners
  } catch (error) {
    console.error('Erro ao buscar banners:', error)
    throw error
  }
}

export default async function Home() {
  const courses = await getCourses()
  const banners = await getBanners()

  return (
    <div>
      <Header />
      {banners.length > 0 && <Banner initialBanner={banners[0]} />}
      {courses && courses.length > 0 && <CoursesList courses={courses} />}
    </div>
  )
}
