'use client'

import React, { useEffect } from 'react'
import Banner from '@/components/ui/Banner'
import { useCourseStore } from '@/store/courseStore'

export default function ClientBanner() {
  const { banners, initialize } = useCourseStore()

  useEffect(() => {
    initialize()
  }, [initialize])

  if (!banners || banners.length === 0) {
    return null
  }

  return <Banner initialBanner={banners[0]} />
}
