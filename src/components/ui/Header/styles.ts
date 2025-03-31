'use client'

import styled from 'styled-components'
import { Search } from 'lucide-react'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 56px;
  padding: 0 ${props => props.theme.spacing.sm};

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    height: 60px;
    padding: 0 ${props => props.theme.spacing.lg};
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
    max-width: 265px;
    margin-right: ${props => props.theme.spacing.lg};
    flex: 1;
  }
`

export const SearchInput = styled.input`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
    width: 100%;
    height: 36px;
    padding: 0 ${props => props.theme.spacing.sm};
    border: 1px solid var(--gray-alpha-200);
    border-radius: ${props => props.theme.borderRadius.pill};
    background: transparent;
    color: var(--foreground);
    font-size: ${props => props.theme.fontSizes.medium};

    &:focus {
      outline: none;
      border-color: var(--foreground);
    }

    &::placeholder {
      color: var(--gray-alpha-200);
    }
  }
`

export const SearchIcon = styled(Search)`
  color: ${props => props.theme.colors.primary};
  width: 20px;
  height: 20px;
`

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    gap: ${props => props.theme.spacing.sm};
  }
`

export const Logo = styled.img.attrs({
  src: '/Logo.svg',
  alt: 'Logo',
})`
  height: 20px;
  width: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-right: 0;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    position: static;
    transform: none;
    height: 30px;
    margin-right: ${props => props.theme.spacing.xl};
  }
`

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
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
