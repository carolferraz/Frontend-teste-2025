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
    color: var(--foreground);
    background: ${theme.colors.background.light};
    font-family: ${theme.fonts.body};
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyles
