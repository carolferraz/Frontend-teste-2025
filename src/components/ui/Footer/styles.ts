'use client'

import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  padding: 1rem 1rem;
  border-top: 1px solid ${props => props.theme.colors.grayDetail};
  position: sticky;
  bottom: 0;
`

export const FooterContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 82.5rem;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      transition: all 0.2s ease;
    }

    &:hover svg {
      transform: scale(1.1);
    }
  }
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  @media (min-width: 48rem) {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
`

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  @media (min-width: 48rem) {
    flex-direction: row;
    gap: 2rem;
  }

  a {
    color: ${props => props.theme.colors.gray};
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s ease;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const LanguageSelector = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const LanguageOption = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.grayLight};
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  transition: all 0.2s ease;

  &:hover,
  &.active {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
  }

  &.active {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 1rem;
      height: 2px;
      background-color: ${props => props.theme.colors.primary};
    }
  }
`
