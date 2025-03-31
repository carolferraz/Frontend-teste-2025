'use client'

import React from 'react'
import CourseCard from '../CourseCard'
import { TCourse } from '@/services/course-service'
import { CoursesContainer, CoursesTitle, CoursesWrapper } from './styles'

type CoursesListProps = {
  courses: TCourse[]
}

export default function CoursesList({ courses }: CoursesListProps) {
  const handleAccess = (id: string) => {
    console.log(`Id do curso: ${id}`)
    // TODO: Implementar a lógica para acessar a página do curso
  }

  const handleFavorite = (id: string) => {
    const storedFavorites = localStorage.getItem('favoriteCourses')
    let favorites: string[] = storedFavorites ? JSON.parse(storedFavorites) : []

    const isFavorite = favorites.includes(id)

    if (isFavorite) {
      favorites = favorites.filter(favoriteId => favoriteId !== id)
    } else {
      favorites.push(id)
    }

    localStorage.setItem('favoriteCourses', JSON.stringify(favorites))

    console.log(`Curso ${id} ${isFavorite ? 'removido dos' : 'adicionado aos'} favoritos`)
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
              course.teachers && course.teachers.length > 0
                ? course.teachers[0]?.name || 'Instrutor'
                : 'Instrutor'
            }
            imageUrl={course.thumbnail}
            isOnline={true}
            onAccess={handleAccess}
            onFavorite={handleFavorite}
          />
        ))}
      </CoursesContainer>
    </CoursesWrapper>
  )
}
