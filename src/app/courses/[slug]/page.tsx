import React from 'react'
import CourseDetails from '@/components/ui/CourseDetails'

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const { slug } = await Promise.resolve(params)

  return (
    <div>
      <CourseDetails slug={slug} />
    </div>
  )
}
