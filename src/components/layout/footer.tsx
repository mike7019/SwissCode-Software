import React from 'react'
import styled from 'styled-components'
import { FaHeart } from 'react-icons/fa'

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.9);
  border-top: 1px solid rgba(255, 68, 68, 0.3);
  padding: 3rem 2rem 1rem;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const CompanyInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    color: #ff4444;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    
    &::before {
      content: '</>';
      margin-right: 0.5rem;
      font-size: 2rem;
    }
  }
  
  p {
    color: #cccccc;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`

const QuickLinks = styled.div`
  h4 {
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 0.5rem;
      
      a {
        color: #cccccc;
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
          color: #ff4444;
        }
      }
    }
  }
`

const Services = styled.div`
  h4 {
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 0.5rem;
      color: #cccccc;
      font-size: 0.9rem;
    }
  }
`

const Copyright = styled.div`
  border-top: 1px solid rgba(255, 68, 68, 0.2);
  padding-top: 1rem;
  text-align: center;
  color: #999999;
  font-size: 0.9rem;
  
  svg {
    color: #ff4444;
    margin: 0 0.3rem;
  }
`

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <CompanyInfo>
            <h3>SwissCode</h3>
            <p>
              Transformamos ideas en soluciones tecnológicas innovadoras. 
              Especialistas en desarrollo web, móvil, ciberseguridad, 
              infraestructura, análisis de datos e inteligencia artificial.
            </p>
            <p>
              <strong>Compromiso:</strong> Excelencia, innovación y resultados que impulsan tu éxito digital.
            </p>
          </CompanyInfo>
          
          <QuickLinks>
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#sobre-nosotros">Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#trabaja-con-nosotros">Únete al Equipo</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </QuickLinks>
          
          <Services>
            <h4>Servicios</h4>
            <ul>
              <li>Desarrollo Web</li>
              <li>Apps Móviles</li>
              <li>Ciberseguridad</li>
              <li>Infraestructura TI</li>
              <li>Análisis de Datos</li>
              <li>Inteligencia Artificial</li>
            </ul>
          </Services>
        </FooterContent>
        
        <Copyright>
          © {currentYear} SwissCode Software. Hecho con <FaHeart /> para impulsar tu éxito digital.
        </Copyright>
      </Container>
    </FooterContainer>
  )
}

export default Footer
