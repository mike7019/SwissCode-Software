import React from 'react'
import styled from 'styled-components'
import { FaCode, FaShieldAlt, FaMobile } from 'react-icons/fa'
import { MdStorage, MdAnalytics } from 'react-icons/md'
import { GiBrain } from 'react-icons/gi'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 70px;
  background: 
    radial-gradient(circle at 20% 20%, rgba(255, 68, 68, 0.1) 0%, transparent 70%),
    radial-gradient(circle at 80% 80%, rgba(255, 68, 68, 0.1) 0%, transparent 70%);
    
  @media (max-width: 768px) {
    margin-top: 60px;
  }
`

const HeroContent = styled.div`
  text-align: center;
  max-width: 1200px;
`

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #DC143C 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #cccccc;
  margin-bottom: 3rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(220, 20, 60, 0.2);
  transition: transform 0.3s ease, border-color 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #DC143C;
  }
`

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #DC143C;
  margin-bottom: 1rem;
`

const IconLabel = styled.span`
  font-size: 0.9rem;
  color: #ffffff;
  font-weight: 500;
`

const Hero = () => {
  const services = [
    { icon: <FaCode />, label: 'Desarrollo Web' },
    { icon: <FaMobile />, label: 'Apps Móviles' },
    { icon: <FaShieldAlt />, label: 'Ciberseguridad' },
    { icon: <MdStorage />, label: 'Infraestructura' },
    { icon: <MdAnalytics />, label: 'Análisis de Datos' },
    { icon: <GiBrain />, label: 'Inteligencia Artificial' }
  ]

  return (
    <HeroSection id="inicio">
      <HeroContent>
        <Title>SwissCode Software</Title>
        <Subtitle>
          Soluciones tecnológicas innovadoras para impulsar tu negocio hacia el futuro digital
        </Subtitle>
        
        <IconsGrid>
          {services.map((service, index) => (
            <IconItem key={index}>
              <IconWrapper>{service.icon}</IconWrapper>
              <IconLabel>{service.label}</IconLabel>
            </IconItem>
          ))}
        </IconsGrid>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero
