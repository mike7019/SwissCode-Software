import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primary: '#DC143C',
    secondary: '#FF6B6B',
    background: {
      primary: '#1a1a1a',
      secondary: '#2d2d2d',
      accent: 'rgba(255, 255, 255, 0.1)'
    },
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
      muted: '#b0b0b0'
    },
    border: 'rgba(255, 255, 255, 0.2)'
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px'
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem'
  },
  typography: {
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '1.5rem',
      huge: '2rem',
      giant: '3rem'
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  effects: {
    blur: 'blur(10px)',
    shadow: '0 10px 30px rgba(220, 20, 60, 0.3)',
    borderRadius: '15px'
  }
}

// Extend styled-components DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      background: {
        primary: string
        secondary: string
        accent: string
      }
      text: {
        primary: string
        secondary: string
        muted: string
      }
      border: string
    }
    breakpoints: {
      mobile: string
      tablet: string
      desktop: string
      wide: string
    }
    spacing: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
    }
    typography: {
      fontSizes: {
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        xxl: string
        huge: string
        giant: string
      }
      fontWeights: {
        normal: number
        medium: number
        semibold: number
        bold: number
      }
    }
    effects: {
      blur: string
      shadow: string
      borderRadius: string
    }
  }
}
