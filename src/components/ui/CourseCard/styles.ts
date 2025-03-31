'use client'

import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 315px;
  height: 353px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.light};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 760.5rem) {
    width: 315px;
    height: 353px;
  }
`

export const CardImage = styled.div<{ $imageUrl: string }>`
  position: relative;
  height: 13.75rem;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
`

export const FavoriteButton = styled.button`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
`

export const BadgeIcon = styled.img`
  width: 1.375rem;
  height: 1.375rem;
  margin-right: 0.25rem;
`

export const CardBadge = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  height: 100%;
  max-height: 1.375rem;
  background-color: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.light};
  font-size: 0.75rem;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.serif};
  text-transform: uppercase;
`

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const CardTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.text.light};
  margin-bottom: 0.5rem;
  font-weight: 600;
`

export const CardInstructor = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.grayLight};
  margin-bottom: 1rem;
`

export const CardActions = styled.div`
  margin-top: auto;
  width: 100%;
`
