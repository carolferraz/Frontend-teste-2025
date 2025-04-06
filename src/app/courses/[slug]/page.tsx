import React from 'react'
import CourseDetails from '@/components/ui/CourseDetails'

export default function CoursePage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  return (
    <div>
      <CourseDetails slug={slug} />
    </div>
  )
}
