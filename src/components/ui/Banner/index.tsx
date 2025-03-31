'use client'

import React from 'react'
import { BannerContainer, BannerImage, BannerContent, BannerTitle } from './styles'
import { TBanner } from '@/types/banner'
import { isMobile } from 'react-device-detect'
import ButtonComponent from '../Button'

export type TBannerProps = {
  initialBanner?: TBanner
}

export default function Banner({ initialBanner }: TBannerProps) {
  const imageUrl = (isMobile ? initialBanner?.mobile : initialBanner?.desktop) || ''

  return (
    <BannerContainer>
      <BannerImage imageurl={imageUrl} />
      <BannerContent>
        <BannerTitle>{initialBanner?.description}</BannerTitle>
        <div style={{ display: 'inline-block' }}>
          <ButtonComponent variant="dark">Conheça as aulas</ButtonComponent>
        </div>
      </BannerContent>
    </BannerContainer>
  )
}
