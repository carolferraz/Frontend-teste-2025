'use client'

import { useState } from 'react'
import {
  HeaderContainer,
  HeaderContent,
  SearchContainer,
  SearchInput,
  SearchIcon,
  AuthButtons,
  Logo,
  MenuIcon,
  RegisterButtonWrapper,
  LoginButtonDesktop,
  LoginButtonMobile,
  MenuContainer,
} from './styles'
import { UserRound, LogIn, Menu } from 'lucide-react'
import { THeaderProps } from './types'
import ButtonComponent from '../Button'

export default function Header({ onSearch, onLogin, onRegister }: THeaderProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(searchQuery)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <MenuContainer>
          <MenuIcon>
            <Menu size={24} />
          </MenuIcon>

          <SearchContainer>
            <form
              onSubmit={handleSearch}
              style={{ width: '100%', display: 'flex', alignItems: 'center' }}
            >
              <SearchIcon />
              <SearchInput
                type="text"
                placeholder="Busca"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </form>
          </SearchContainer>
        </MenuContainer>

        <Logo />

        <AuthButtons>
          <RegisterButtonWrapper>
            <ButtonComponent
              variant="secondary"
              icon={<UserRound size={20} />}
              coloredicon
              onClick={onLogin}
            >
              Cadastre-se
            </ButtonComponent>
          </RegisterButtonWrapper>
          <LoginButtonDesktop>
            <ButtonComponent
              variant="primary"
              icon={<LogIn size={20} />}
              coloredicon
              onClick={onRegister}
            >
              Entrar
            </ButtonComponent>
          </LoginButtonDesktop>
          <LoginButtonMobile onClick={onRegister}>
            <LogIn size={24} />
          </LoginButtonMobile>
        </AuthButtons>
      </HeaderContent>
    </HeaderContainer>
  )
}
