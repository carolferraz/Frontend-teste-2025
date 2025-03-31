'use client'

import styled from 'styled-components'

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`

export const BannerImage = styled.div<{ imageurl: string }>`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.imageurl});
  background-size: cover;
  background-position: center;

  @media (min-width: 760.5rem) {
    height: 400px;
  }
`

export const BannerContent = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 2.5rem 1.25rem;
  color: white;
  background: #00000059;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0.625rem;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    background: ${props => props.theme.colors.primary};
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
    width: 45%;
    padding: 50px 3.75rem;
    gap: 2.5rem;
  }
`

export const BannerTitle = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  line-height: 115.99%;
  letter-spacing: 0%;
  color: white;
  margin: 0 0 1.25rem 0;

  @media (min-width: 760.5rem) {
    font-size: 52px;
  }
`
