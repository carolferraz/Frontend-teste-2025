'use client'

import styled from 'styled-components'
import { Search } from 'lucide-react'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 3.5rem;
  padding: 0 ${props => props.theme.spacing.sm};

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    height: 3.75rem;
    padding: 0 ${props => props.theme.spacing.xxl};
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    position: static;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  max-width: fit-content;
  margin-right: 0;
  flex: 0;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    gap: ${props => props.theme.spacing.sm};
    max-width: 16rem;
    margin-right: ${props => props.theme.spacing.lg};
    flex: 1;
  }
`

export const SearchInput = styled.input`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
    width: 100%;
    height: 2.25rem;
    padding: 0 ${props => props.theme.spacing.sm};
    border: none;
    border-radius: ${props => props.theme.borderRadius.pill};
    background: transparent;
    color: ${props => props.theme.text};
    font-size: ${props => props.theme.fontSizes.medium};

    &:focus {
      outline: none;
      border-color: ${props => props.theme.text};
    }
  }
`

export const SearchIcon = styled(Search)`
  color: ${props => props.theme.colors.primary};
  width: 1.25rem;
  height: 1.25rem;
`

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    gap: ${props => props.theme.spacing.sm};
  }
`
export const LogoLink = styled.a`
  display: flex;
  align-items: center;
`

export const Logo = styled.img.attrs({
  src: '/Logo.svg',
  alt: 'Logo',
})`
  height: 1.25rem;
  width: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-right: 0;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    position: static;
    transform: none;
    height: 1.875rem;
    margin-right: ${props => props.theme.spacing.xl};
  }
`

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  color: ${props => props.theme.colors.primary};

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }
`

export const MenuContainer = styled.div`
  display: flex;
`

export const RegisterButtonWrapper = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    display: flex;
  }
`

export const LoginButtonDesktop = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    display: flex;
  }
`

export const LoginButtonMobile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  padding: 0;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }

  &:hover {
    opacity: 0.8;
  }
`
