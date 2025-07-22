'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import StyledComponentsRegistry from '../../lib/styled-components-registry'

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
