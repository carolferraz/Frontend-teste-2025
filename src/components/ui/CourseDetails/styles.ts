'use client'

import styled from 'styled-components'
import { Heart } from 'iconsax-react'
import { X } from 'lucide-react'

export const CourseContainer = styled.div`
  width: 100%;
  max-width: 82.5rem;
  margin: 0 auto;
  position: relative;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    height: calc(100vh - 520px);
    padding: 2rem 1.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;
  }
`

export const CourseImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 12.5rem;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    height: 25rem;
  }
`

export const CourseContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  order: 2;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    order: 1;
  }
`

export const CourseTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`

export const CourseDescription = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.gray};
  margin-bottom: 3rem;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.1rem;
    margin-bottom: 0;
  }
`

export const FavoriteButton = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  background: white;
  border: 0.0625rem solid ${props => props.theme.colors.grayDetail};
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease;
  width: 100%;
  order: 1;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    width: auto;
    margin-bottom: 0;
    height: fit-content;
    order: 2;
  }

  &:hover {
    background: ${props => props.theme.colors.background};
  }
`

export const StyledHeart = styled(Heart)`
  ${props => {
    const heartColor = props.fill === 'true' ? props.theme.colors.danger : 'none'
    return `
      fill: ${heartColor};
      color: ${heartColor};
    `
  }}
`

export const ShareButton = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 11rem;
  right: 1rem;
  padding: 0.75rem;
  background-color: ${props => props.theme.colors.light};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 0.25rem 0.25rem ${props => props.theme.colors.smoke};

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    bottom: 7rem;
    right: 2rem;
    padding: 1rem;
  }

  &:hover {
    color: ${props => props.theme.colors.gray};
    box-shadow: 0 0.25rem 0.75rem ${props => props.theme.colors.smoke};
    transform: translateY(-0.125rem);
    transition: all 0.2s ease;
  }
`

export const ShareOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.smoke};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

export const ShareModal = styled.div`
  background-color: ${props => props.theme.colors.light};
  border-radius: 0.25rem;
  width: 90%;
  max-width: 37.5rem;
  padding: 1.5rem;
  box-shadow: 0 0.25rem 1.25rem ${props => props.theme.colors.smoke};
  position: relative;
`

export const ModalTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledX = styled(X)`
  color: ${props => props.theme.colors.grayLight};

  &:hover {
    color: ${props => props.theme.colors.dark};
  }
`

export const UrlContainer = styled.div`
  display: flex;
  border: 0.0625rem solid ${props => props.theme.colors.grayDetail};
  border-radius: 0.25rem;
  overflow: hidden;
  margin-bottom: 1rem;
`

export const UrlInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  outline: none;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.grayLight};
`

export const CopyButton = styled.button`
  background: none;
  border: none;
  border-left: 0.0625rem solid ${props => props.theme.colors.grayDetail};
  padding: 0 1rem;
  cursor: pointer;
  color: ${props => props.theme.colors.grayLight};

  &:hover {
    background-color: ${props => props.theme.colors.background};
  }
`

export const WhatsappButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem;
  background-color: ${props => props.theme.colors.whatsapp};
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1.5rem;

  &:hover {
    background-color: #2b932fad;
  }
`

export const CloseModalButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: transparent;
  border: 0.0625rem solid ${props => props.theme.colors.grayDetail};
  border-radius: 0.25rem;
  color: ${props => props.theme.colors.grayLight};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.background};
  }
`
