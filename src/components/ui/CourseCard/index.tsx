'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Heart } from 'iconsax-react'
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
  slug: string
  onFavorite?: (id: string) => void
}

export default function CourseCard({
  id,
  title,
  instructor,
  imageUrl,
  isOnline = true,
  isFavorite = false,
  slug,
  onFavorite,
}: TCourseCardProps) {
  const router = useRouter()

  const handleFavorite = () => {
    if (onFavorite) onFavorite(id)
  }

  const handleAccess = () => {
    router.push(`/courses/${slug}`)
  }

  return (
    <CardContainer>
      <CardImage $imageUrl={imageUrl}>
        <FavoriteButton onClick={handleFavorite}>
          <Heart variant={isFavorite ? 'Bold' : 'Linear'} color="white" size={20} />
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
