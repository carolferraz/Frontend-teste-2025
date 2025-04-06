'use client'

import React, { useEffect, useState } from 'react'
import { courseService } from '@/services/course-service'
import { TCourse } from '@/types/course'
import Loader from '../Loader'
import { Share2 } from 'lucide-react'
import { DocumentCopy, Whatsapp } from 'iconsax-react'
import {
  CourseContainer,
  CourseTitle,
  FavoriteButton,
  StyledHeart,
  ShareButton,
  CourseImage,
  CourseContentWrapper,
  CourseDescription,
  ShareOverlay,
  ShareModal,
  ModalTitle,
  CloseButton,
  StyledX,
  UrlContainer,
  UrlInput,
  CopyButton,
  WhatsappButton,
  CloseModalButton,
} from './styles'
import { useTheme } from 'styled-components'

interface CourseDetailsProps {
  slug: string
}

export default function CourseDetails({ slug }: CourseDetailsProps) {
  const [course, setCourse] = useState<TCourse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    async function loadCourse() {
      if (!slug) {
        console.error('Slug is empty or undefined')
        setError('Slug inválido')
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)

        const courseData = await courseService.getCourse(slug)

        if (!courseData) {
          setError('Curso não encontrado')
          setLoading(false)
          return
        }

        setCourse(courseData)

        const storedFavorites = localStorage.getItem('favoriteCourses')
        const favorites = storedFavorites ? JSON.parse(storedFavorites) : []
        setIsFavorite(favorites.includes(String(courseData.id)))
      } catch (error) {
        console.error('Error loading course:', error)
        setError(
          `Erro ao carregar o curso: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
        )
      } finally {
        setLoading(false)
      }
    }

    loadCourse()
  }, [slug])

  const handleFavorite = () => {
    if (!course) return

    const storedFavorites = localStorage.getItem('favoriteCourses')
    let favorites = storedFavorites ? JSON.parse(storedFavorites) : []
    if (isFavorite) {
      favorites = favorites.filter((id: string) => id !== String(course.id))
    } else {
      favorites.push(String(course.id))
    }

    localStorage.setItem('favoriteCourses', JSON.stringify(favorites))
    setIsFavorite(!isFavorite)
  }

  const handleShare = () => {
    setShowShareModal(true)
  }

  const handleCloseModal = () => {
    setShowShareModal(false)
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
  }

  const handleWhatsappShare = () => {
    const text = `Confira este curso: ${course?.title}`
    const url = window.location.href
    window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank')
  }

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    )
  }

  if (error || !course) {
    return (
      <div>
        <CourseContainer>
          <h2>{error || 'Curso não encontrado'}</h2>
          <button onClick={() => window.history.back()}>Voltar</button>
        </CourseContainer>
      </div>
    )
  }

  return (
    <div>
      <CourseImage src={course.thumbnail} alt={course.title} />

      <CourseContainer>
        <CourseContentWrapper>
          <CourseTitle>{course.title}</CourseTitle>
          <CourseDescription
            dangerouslySetInnerHTML={{
              __html: course.long_description,
            }}
          />
        </CourseContentWrapper>

        <FavoriteButton onClick={handleFavorite}>
          {isFavorite ? (
            <>
              <StyledHeart size={12} fill="true" />
            </>
          ) : (
            <>
              <StyledHeart size={12} fill="false" />
              Favoritar
            </>
          )}
        </FavoriteButton>

        <ShareButton onClick={handleShare}>
          <Share2 size={24} />
        </ShareButton>
      </CourseContainer>

      {showShareModal && (
        <ShareOverlay onClick={handleCloseModal}>
          <ShareModal onClick={e => e.stopPropagation()}>
            <ModalTitle>Compartilhar curso</ModalTitle>
            <CloseButton onClick={handleCloseModal}>
              <StyledX size={18} />
            </CloseButton>

            <UrlContainer>
              <UrlInput value={window.location.href} readOnly />
              <CopyButton onClick={handleCopyLink}>
                <DocumentCopy size="18" variant="Linear" color={theme.colors.grayLight} />
              </CopyButton>
            </UrlContainer>

            <WhatsappButton onClick={handleWhatsappShare}>
              <Whatsapp size="24" variant="Linear" color={theme.colors.light} />
              Compartilhar via Whatsapp
            </WhatsappButton>

            <CloseModalButton onClick={handleCloseModal}>Fechar</CloseModalButton>
          </ShareModal>
        </ShareOverlay>
      )}
    </div>
  )
}
