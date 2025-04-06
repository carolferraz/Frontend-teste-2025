import CoursesList from '@/components/ui/CoursesList'
import FavoritesList from '@/components/ui/FavoritesList'
import ClientBanner from '@/components/ui/Banner/ClientBanner'

export default function Home() {
  return (
    <>
      <ClientBanner />
      <CoursesList />
      <FavoritesList />
    </>
  )
}
