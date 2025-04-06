'use client'

import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    color: ${theme.colors.text};
    background: ${theme.colors.background};
    font-family: ${theme.fonts.body};
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyles
