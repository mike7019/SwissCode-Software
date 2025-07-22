import React from 'react'
import styled from 'styled-components'
import { FaCode, FaShieldAlt, FaMobile } from 'react-icons/fa'
import { MdStorage } from 'react-icons/md'
import { GiBrain } from 'react-icons/gi'
import { BiData } from 'react-icons/bi'

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background: rgba(26, 26, 26, 0.7);
  position: relative;
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 3rem;
  color: #DC143C;
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(220, 20, 60, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #DC143C;
    box-shadow: 0 10px 30px rgba(220, 20, 60, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #DC143C, #B91C3C);
  }
`

const ServiceImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(220, 20, 60, 0.1);
`

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #DC143C;
  margin-right: 1rem;
`

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin: 0;
`

const ServiceDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const TechTag = styled.span`
  background: rgba(220, 20, 60, 0.1);
  color: #DC143C;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid rgba(220, 20, 60, 0.3);
`

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    color: #cccccc;
    padding: 0.3rem 0;
    position: relative;
    padding-left: 1.5rem;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #DC143C;
      font-weight: bold;
    }
  }
`

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Desarrollo Web',
      image: '/page11_img1.png',
      description: 'Creamos aplicaciones web modernas, escalables y optimizadas para SEO que impulsan tu presencia digital.',
      technologies: ['React', 'Node.js', 'TypeScript', 'Next.js', 'Express', 'MongoDB'],
      features: [
        'Aplicaciones web responsive',
        'Progressive Web Apps (PWA)',
        'E-commerce personalizado',
        'Sistemas de gestión (CMS)',
        'APIs RESTful y GraphQL',
        'Optimización para motores de búsqueda'
      ]
    },
    {
      icon: <FaMobile />,
      title: 'Desarrollo Móvil',
      image: '/page11_img2.png',
      description: 'Aplicaciones móviles nativas e híbridas para iOS y Android que ofrecen experiencias excepcionales.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
      features: [
        'Apps nativas iOS y Android',
        'Desarrollo híbrido multiplataforma',
        'Integración con APIs',
        'Push notifications',
        'Geolocalización y mapas',
        'Publicación en App Store y Google Play'
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: 'Ciberseguridad',
      image: '/page11_img3.png',
      description: 'Protegemos tu infraestructura digital con soluciones de seguridad avanzadas y auditorías completas.',
      technologies: ['Penetration Testing', 'SIEM', 'SSL/TLS', 'OAuth', 'JWT', 'Firewall'],
      features: [
        'Auditorías de seguridad',
        'Penetration testing',
        'Implementación de certificados SSL',
        'Autenticación multi-factor',
        'Monitoreo de amenazas 24/7',
        'Capacitación en seguridad'
      ]
    },
    {
      icon: <MdStorage />,
      title: 'Infraestructura TI',
      image: '/page11_img4.png',
      description: 'Diseñamos y administramos infraestructuras tecnológicas robustas y escalables en la nube.',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      features: [
        'Migración a la nube',
        'Arquitectura de microservicios',
        'CI/CD pipelines',
        'Monitoreo y alertas',
        'Backup y recuperación',
        'Escalabilidad automática'
      ]
    },
    {
      icon: <BiData />,
      title: 'Análisis de Datos',
      image: '/page11_img5.png',
      description: 'Transformamos tus datos en insights valiosos mediante análisis avanzados y visualizaciones interactivas.',
      technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark', 'Elasticsearch'],
      features: [
        'ETL y procesamiento de datos',
        'Dashboards interactivos',
        'Business Intelligence',
        'Data warehousing',
        'Análisis predictivo',
        'Reportes automatizados'
      ]
    },
    {
      icon: <GiBrain />,
      title: 'Inteligencia Artificial',
      image: '/page11_img6.png',
      description: 'Implementamos soluciones de IA y Machine Learning para automatizar procesos y optimizar decisiones.',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'Pandas', 'NumPy'],
      features: [
        'Machine Learning personalizado',
        'Procesamiento de lenguaje natural',
        'Computer Vision',
        'Chatbots inteligentes',
        'Sistemas de recomendación',
        'Automatización de procesos (RPA)'
      ]
    }
  ]

  return (
    <ServicesSection id="servicios">
      <Container>
        <Title>Nuestros Servicios</Title>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceImage style={{ backgroundImage: `url(${service.image})` }} />
              
              <ServiceHeader>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
              </ServiceHeader>
              
              <ServiceDescription>{service.description}</ServiceDescription>
              
              <TechnologiesList>
                {service.technologies.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechnologiesList>
              
              <FeaturesList>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </FeaturesList>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  )
}

export default Services
