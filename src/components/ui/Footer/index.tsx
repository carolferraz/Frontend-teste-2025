'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'styled-components'
import { Whatsapp, Youtube, Facebook, Instagram } from 'iconsax-react'
import {
  FooterContainer,
  FooterContent,
  SocialIcons,
  RightContainer,
  FooterLinks,
  LanguageSelector,
  LanguageOption,
} from './styles'

type Language = 'PT' | 'EN' | 'ES'

export default function Footer() {
  const [activeLanguage, setActiveLanguage] = useState<Language>('PT')
  const theme = useTheme()

  const handleLanguageChange = (language: Language) => {
    setActiveLanguage(language)
  }

  return (
    <FooterContainer>
      <FooterContent>
        <SocialIcons>
          <Link href="https://wa.me/" target="_blank" aria-label="WhatsApp">
            <Whatsapp variant="Linear" size="24" color={theme.colors.gray} />
          </Link>
          <Link href="https://youtube.com/" target="_blank" aria-label="YouTube">
            <Youtube variant="Bold" size="24" color={theme.colors.gray} />
          </Link>
          <Link href="https://facebook.com/" target="_blank" aria-label="Facebook">
            <Facebook variant="Bold" size="24" color={theme.colors.gray} />
          </Link>
          <Link href="https://instagram.com/" target="_blank" aria-label="Instagram">
            <Instagram variant="Linear" size="24" color={theme.colors.gray} />
          </Link>
        </SocialIcons>

        <RightContainer>
          <FooterLinks>
            <Link href="/termos-de-uso">Termos de uso</Link>
            <Link href="/politica-de-privacidade">Política de privacidade</Link>
          </FooterLinks>

          <LanguageSelector>
            <LanguageOption
              className={activeLanguage === 'PT' ? 'active' : ''}
              onClick={() => handleLanguageChange('PT')}
            >
              PT
            </LanguageOption>
            <LanguageOption
              className={activeLanguage === 'EN' ? 'active' : ''}
              onClick={() => handleLanguageChange('EN')}
            >
              EN
            </LanguageOption>
            <LanguageOption
              className={activeLanguage === 'ES' ? 'active' : ''}
              onClick={() => handleLanguageChange('ES')}
            >
              ES
            </LanguageOption>
          </LanguageSelector>
        </RightContainer>
      </FooterContent>
    </FooterContainer>
  )
}
