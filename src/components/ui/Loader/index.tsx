'use client'

import React from 'react'
import { LoaderContainer, SpinnerWrapper } from './styles'
import { InnerSpinner } from './styles'
import { Spinner } from './styles'

export default function Loader() {
  return (
    <LoaderContainer>
      <SpinnerWrapper>
        <Spinner />
        <InnerSpinner />
      </SpinnerWrapper>
    </LoaderContainer>
  )
}
