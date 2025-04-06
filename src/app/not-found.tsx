'use client'

import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import ButtonComponent from '@/components/ui/Button'

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 56.25rem) {
    height: calc(100vh - 120px);
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 56.25rem) {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
`

const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 56.25rem) {
    align-items: flex-start;
    text-align: left;
  }
`

const NotFoundImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 75%;

  img {
    max-width: 100%;
    height: auto;
  }
`

const NotFoundTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0;
`

const NotFoundMessage = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.grayLight};
  margin-bottom: 2rem;
  max-width: 500px;
`

export default function NotFound() {
  return (
    <NotFoundContainer>
      <ContentContainer>
        <NotFoundImage>
          <img src="/NotFound.png" alt="Página não encontrada" />
        </NotFoundImage>

        <NotFoundContent>
          <NotFoundTitle>Página não encontrada</NotFoundTitle>
          <NotFoundMessage>
            Parece que a página que você está procurando não existe ou foi movida.
          </NotFoundMessage>
          <Link href="/" passHref legacyBehavior>
            <ButtonComponent variant="primary">Voltar para a página inicial</ButtonComponent>
          </Link>
        </NotFoundContent>
      </ContentContainer>
    </NotFoundContainer>
  )
}
