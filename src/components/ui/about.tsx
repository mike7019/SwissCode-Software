import React from 'react'
import styled from 'styled-components'

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 68, 68, 0.2);
  border-bottom: 1px solid rgba(255, 68, 68, 0.2);
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 3rem;
  color: #ff4444;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const TextContent = styled.div`
  h3 {
    font-size: 1.8rem;
    color: #ffffff;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.1rem;
    color: #cccccc;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`

const TechPattern = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('/page10_img1.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  border: 2px solid rgba(220, 20, 60, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  
  h4 {
    font-size: 2rem;
    color: #ff4444;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #cccccc;
    font-size: 1rem;
  }
`

const About = () => {
  return (
    <AboutSection id="sobre-nosotros">
      <Container>
        <Title>Sobre Nosotros</Title>
        
        <Content>
          <TextContent>
            <h3>Innovación y Excelencia Tecnológica</h3>
            <p>
              En SwissCode, nos especializamos en crear soluciones tecnológicas de vanguardia 
              que transforman la manera en que las empresas operan en el mundo digital.
            </p>
            <p>
              Con años de experiencia en desarrollo web, aplicaciones móviles, ciberseguridad 
              e inteligencia artificial, ofrecemos servicios integrales que impulsan el 
              crecimiento y la competitividad de nuestros clientes.
            </p>
            <p>
              Nuestro equipo combina expertise técnico con visión estratégica para entregar 
              proyectos que no solo cumplen, sino que superan las expectativas.
            </p>
          </TextContent>
          
          <TechPattern />
        </Content>
        
        <Stats>
          <StatItem>
            <h4>50+</h4>
            <p>Proyectos Completados</p>
          </StatItem>
          <StatItem>
            <h4>5+</h4>
            <p>Años de Experiencia</p>
          </StatItem>
          <StatItem>
            <h4>100%</h4>
            <p>Satisfacción del Cliente</p>
          </StatItem>
          <StatItem>
            <h4>24/7</h4>
            <p>Soporte Técnico</p>
          </StatItem>
        </Stats>
      </Container>
    </AboutSection>
  )
}

export default About
