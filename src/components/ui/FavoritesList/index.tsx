'use client'

import React from 'react'
import CourseCard from '../CourseCard'
import { HeartSearch } from 'iconsax-react'
import {
  EmptyFavoritesContainer,
  EmptyFavoritesText,
  EmptyFavoritesWrapper,
  FavoritesContainer,
  FavoritesTitle,
  FavoritesWrapper,
  StyledHeartSearch,
} from './styles'
import { useCourseStore } from '@/store/courseStore'
import { useTheme } from 'styled-components'
export default function FavoritesList() {
  const { getFavoriteCourses, toggleFavorite } = useCourseStore()
  const favoriteCourses = getFavoriteCourses()
  const theme = useTheme()

  const handleFavorite = (id: string) => {
    toggleFavorite(id)
  }

  return (
    <FavoritesWrapper>
      <FavoritesTitle>Meus favoritos</FavoritesTitle>

      {favoriteCourses.length === 0 ? (
        <EmptyFavoritesContainer>
          <EmptyFavoritesWrapper>
            <StyledHeartSearch>
              <HeartSearch size="32" variant="Linear" color={theme.colors.gray} />
            </StyledHeartSearch>
            <EmptyFavoritesText>
              Parece que você ainda não tem cursos favoritados
            </EmptyFavoritesText>
          </EmptyFavoritesWrapper>
        </EmptyFavoritesContainer>
      ) : (
        <FavoritesContainer>
          {favoriteCourses.map(course => (
            <CourseCard
              key={course.id}
              id={String(course.id)}
              title={course.title}
              instructor={course.teachers ? course.teachers[0]?.name || '' : ''}
              imageUrl={course.thumbnail}
              isOnline={true}
              isFavorite={true}
              slug={course.slug}
              onFavorite={handleFavorite}
            />
          ))}
        </FavoritesContainer>
      )}
    </FavoritesWrapper>
  )
}
