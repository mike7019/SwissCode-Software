import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${props => props.theme.colors.background.primary} 0%, ${props => props.theme.colors.background.secondary} 100%);
  color: ${props => props.theme.colors.text.primary};
`

export const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${props => props.theme.colors.background.primary} 0%, ${props => props.theme.colors.background.secondary} 100%);
  color: ${props => props.theme.colors.text.primary};
  padding-top: 80px;
`

export const Content = styled.div`
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${props => props.theme.spacing.lg};
`

export const Title = styled.h1`
  font-size: ${props => props.theme.typography.fontSizes.giant};
  font-weight: ${props => props.theme.typography.fontWeights.bold};
  text-align: center;
  margin: ${props => props.theme.spacing.lg} 0;
  background: linear-gradient(45deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSizes.huge};
  }
`

export const Subtitle = styled.h2`
  font-size: ${props => props.theme.typography.fontSizes.huge};
  font-weight: ${props => props.theme.typography.fontWeights.semibold};
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};
`

export const Card = styled.div`
  background: ${props => props.theme.colors.background.accent};
  backdrop-filter: ${props => props.theme.effects.blur};
  border-radius: ${props => props.theme.effects.borderRadius};
  padding: ${props => props.theme.spacing.lg};
  border: 1px solid ${props => props.theme.colors.border};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.effects.shadow};
  }
`

export const Button = styled.button`
  background: linear-gradient(45deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.text.primary};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  font-size: ${props => props.theme.typography.fontSizes.lg};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${props => props.theme.typography.fontWeights.bold};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.effects.shadow};
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.xl} 0;
`

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const Section = styled.section`
  padding: ${props => props.theme.spacing.xxl} 0;
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
`

export const Text = styled.p`
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.typography.fontSizes.md};
`
