'use client'

import React from 'react'
import { Heart } from 'lucide-react'
import ButtonComponent from '../Button'
import {
  CardContainer,
  CardImage,
  CardBadge,
  CardContent,
  CardTitle,
  CardInstructor,
  FavoriteButton,
  CardActions,
  BadgeIcon,
  BadgeContainer,
} from './styles'

export type TCourseCardProps = {
  id: string
  title: string
  instructor: string
  imageUrl: string
  isOnline?: boolean
  isFavorite?: boolean
  onFavorite?: (id: string) => void
  onAccess?: (id: string) => void
}

export default function CourseCard({
  id,
  title,
  instructor,
  imageUrl,
  isOnline = true,
  isFavorite = false,
  onFavorite,
  onAccess,
}: TCourseCardProps) {
  const handleFavorite = () => {
    if (onFavorite) onFavorite(id)
  }

  const handleAccess = () => {
    if (onAccess) onAccess(id)
  }

  return (
    <CardContainer>
      <CardImage $imageUrl={imageUrl}>
        <FavoriteButton onClick={handleFavorite}>
          <Heart fill={isFavorite ? 'white' : 'none'} color="white" size={20} />
        </FavoriteButton>
        {isOnline && (
          <BadgeContainer>
            <BadgeIcon src="/Destaque.svg" alt="" />
            <CardBadge>ONLINE</CardBadge>
          </BadgeContainer>
        )}
      </CardImage>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardInstructor>{instructor}</CardInstructor>
        <CardActions>
          <ButtonComponent variant="primary" onClick={handleAccess}>
            Acessar
          </ButtonComponent>
        </CardActions>
      </CardContent>
    </CardContainer>
  )
}
