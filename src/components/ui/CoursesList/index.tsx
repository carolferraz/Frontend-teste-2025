'use client'

import React, { useEffect } from 'react'
import CourseCard from '../CourseCard'
import { CoursesContainer, CoursesTitle, CoursesWrapper } from './styles'
import { useCourseStore } from '@/store/courseStore'
import Loader from '../Loader'

export default function CoursesList() {
  const { courses, toggleFavorite, favoriteIds, initialize, loading } = useCourseStore()

  useEffect(() => {
    initialize()
  }, [initialize])

  const handleFavorite = (id: string) => {
    toggleFavorite(id)
  }

  if (loading && courses.length === 0) {
    return (
      <>
        <Loader />
      </>
    )
  }

  if (!courses || courses.length === 0) {
    return null
  }

  return (
    <CoursesWrapper>
      <CoursesTitle>Meus Cursos</CoursesTitle>
      <CoursesContainer>
        {courses.map(course => (
          <CourseCard
            key={course.id}
            id={String(course.id)}
            title={course.title}
            instructor={
              course.teachers && course.teachers.length > 0 ? course.teachers[0]?.name || '' : ''
            }
            imageUrl={course.thumbnail}
            isOnline={true}
            isFavorite={favoriteIds.includes(String(course.id))}
            slug={course.slug}
            onFavorite={handleFavorite}
          />
        ))}
      </CoursesContainer>
    </CoursesWrapper>
  )
}
