'use client'

import styled, { css } from 'styled-components'
import { TButtonProps } from '.'
import { TIconWrapperProps } from './types'

export const Button = styled.button<TButtonProps>`
  padding: 0.5rem 1.25rem;
  border: none;
  transition:
    background 0.2s,
    color 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%;

  ${props =>
    props.variant === 'primary' &&
    css`
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.light};
      gap: 0.5rem;

      &:hover {
        background: ${props => props.theme.colors.primaryLight};
      }
    `}

  ${props =>
    props.variant === 'secondary' &&
    css`
      border: 1px solid var(--gray-alpha-200);
      background: transparent;
      gap: 0.5rem;
      white-space: nowrap;

      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    `}

  ${props =>
    props.variant === 'dark' &&
    css`
      background: ${props => props.theme.colors.black};
      color: ${props => props.theme.colors.light};
      font-family: ${props => props.theme.fonts.condensed};
      font-weight: 700;

      &:hover {
        background: ${props => props.theme.colors.dark};
      }
    `}

  @media (min-width: 760.5rem) {
    padding: 0.5rem 1.25rem;
    font-size: 1rem;
  }
`

export const IconWrapper = styled.span<TIconWrapperProps>`
  display: flex;
  align-items: center;

  ${props =>
    props.$coloredicon &&
    props.$variant === 'primary' &&
    css`
      color: ${props.theme.colors.light};
    `}

  ${props =>
    props.$coloredicon &&
    props.$variant === 'secondary' &&
    css`
      color: ${props.theme.colors.primary};
    `}
`
