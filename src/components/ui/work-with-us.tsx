import React from 'react'
import styled from 'styled-components'
import { FaCode, FaMobile, FaShieldAlt, FaDatabase, FaBrain, FaServer, FaUsers, FaStar } from 'react-icons/fa'
import { MdWorkOutline, MdLocationOn, MdSchedule, MdAttachMoney } from 'react-icons/md'

const WorkWithUsSection = styled.section`
  padding: 5rem 2rem;
  background: rgba(248, 249, 250, 0.85);
  color: #1a1a1a;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: url('/page10_img2.png') no-repeat center center;
    background-size: contain;
    opacity: 0.1;
    z-index: 1;
    
    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

const Title = styled.h2`
  font-size: 3rem;
  color: #DC143C;
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  text-align: center;
  margin-bottom: 4rem;
  line-height: 1.6;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const WhyJoinUs = styled.div`
  h3 {
    font-size: 1.8rem;
    color: #DC143C;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 0.5rem;
    }
  }
`

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    padding: 0.5rem;
    background: rgba(220, 20, 60, 0.05);
    border-radius: 8px;
    
    svg {
      color: #DC143C;
      margin-right: 0.75rem;
      margin-top: 0.2rem;
      flex-shrink: 0;
    }
    
    div {
      h4 {
        color: #1a1a1a;
        font-size: 1rem;
        margin-bottom: 0.25rem;
      }
      
      p {
        color: #6c757d;
        font-size: 0.9rem;
        line-height: 1.4;
      }
    }
  }
`

const PositionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`

const PositionCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(220, 20, 60, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(220, 20, 60, 0.15);
    border-color: #DC143C;
  }
`

const PositionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const PositionIcon = styled.div`
  font-size: 2rem;
  color: #DC143C;
  margin-right: 1rem;
`

const PositionTitle = styled.h4`
  font-size: 1.3rem;
  color: #1a1a1a;
  margin: 0;
`

const PositionDetails = styled.div`
  margin-bottom: 1rem;
  
  div {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #6c757d;
    
    svg {
      margin-right: 0.5rem;
      color: #DC143C;
    }
  }
`

const SkillsRequired = styled.div`
  margin-bottom: 1rem;
  
  h5 {
    color: #1a1a1a;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
  }
`

const SkillTag = styled.span`
  background: rgba(220, 20, 60, 0.1);
  color: #DC143C;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  border: 1px solid rgba(220, 20, 60, 0.2);
`

const ApplyButton = styled.button`
  background: linear-gradient(135deg, #DC143C 0%, #B91C3C 100%);
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(220, 20, 60, 0.3);
  }
`

const CallToAction = styled.div`
  text-align: center;
  background: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(220, 20, 60, 0.1);
  
  h3 {
    font-size: 1.8rem;
    color: #DC143C;
    margin-bottom: 1rem;
  }
  
  p {
    color: #6c757d;
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`

const CTAButton = styled.button`
  background: linear-gradient(135deg, #DC143C 0%, #B91C3C 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 1rem;
  margin-bottom: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(220, 20, 60, 0.3);
  }
  
  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
  }
`

const WorkWithUs = () => {
  const benefits = [
    {
      icon: <MdAttachMoney />,
      title: "Pagos competitivos",
      description: "Tarifas justas y pagos puntuales por proyecto completado"
    },
    {
      icon: <MdSchedule />,
      title: "Flexibilidad horaria",
      description: "Trabaja en tus propios horarios y desde cualquier lugar"
    },
    {
      icon: <FaUsers />,
      title: "Proyectos diversos",
      description: "Acceso a proyectos variados e innovadores"
    },
    {
      icon: <FaStar />,
      title: "Crecimiento profesional",
      description: "Oportunidades de aprender nuevas tecnologías"
    }
  ]

  const positions = [
    {
      icon: <FaCode />,
      title: "Desarrollador Frontend",
      location: "Remoto",
      type: "Freelance",
      rate: "$25-50/hora",
      skills: ["React", "JavaScript", "CSS", "HTML", "TypeScript"]
    },
    {
      icon: <FaServer />,
      title: "Desarrollador Backend",
      location: "Remoto",
      type: "Freelance",
      rate: "$30-60/hora",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS"]
    },
    {
      icon: <FaMobile />,
      title: "Desarrollador Móvil",
      location: "Remoto",
      type: "Freelance",
      rate: "$35-65/hora",
      skills: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Especialista en Ciberseguridad",
      location: "Remoto",
      type: "Freelance",
      rate: "$40-80/hora",
      skills: ["Pentesting", "SIEM", "Compliance", "Ethical Hacking"]
    },
    {
      icon: <FaDatabase />,
      title: "Analista de Datos",
      location: "Remoto",
      type: "Freelance",
      rate: "$30-55/hora",
      skills: ["Python", "SQL", "Tableau", "Power BI", "Statistics"]
    },
    {
      icon: <FaBrain />,
      title: "Ingeniero ML/AI",
      location: "Remoto",
      type: "Freelance",
      rate: "$45-85/hora",
      skills: ["TensorFlow", "PyTorch", "Python", "Statistics", "MLOps"]
    }
  ]

  const handleApply = (position) => {
    // Simular apertura de formulario o redirección
    alert(`Aplicando para: ${position}. ¡Te contactaremos pronto!`)
  }

  return (
    <WorkWithUsSection id="trabaja-con-nosotros">
      <Container>
        <Title>Trabaja con Nosotros</Title>
        <Subtitle>
          Únete a nuestro equipo de freelancers talentosos y forma parte de proyectos innovadores 
          que están transformando el mundo digital.
        </Subtitle>
        
        <ContentGrid>
          <WhyJoinUs>
            <h3><FaUsers /> ¿Por qué trabajar con SwissCode?</h3>
            <BenefitsList>
              {benefits.map((benefit, index) => (
                <li key={index}>
                  {benefit.icon}
                  <div>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </li>
              ))}
            </BenefitsList>
          </WhyJoinUs>
          
          <div>
            <h3 style={{ fontSize: '1.8rem', color: '#DC143C', marginBottom: '2rem' }}>
              <MdWorkOutline style={{ marginRight: '0.5rem' }} />
              Posiciones Disponibles
            </h3>
            <PositionsGrid>
              {positions.map((position, index) => (
                <PositionCard key={index}>
                  <PositionHeader>
                    <PositionIcon>{position.icon}</PositionIcon>
                    <PositionTitle>{position.title}</PositionTitle>
                  </PositionHeader>
                  
                  <PositionDetails>
                    <div>
                      <MdLocationOn />
                      {position.location}
                    </div>
                    <div>
                      <MdWorkOutline />
                      {position.type}
                    </div>
                    <div>
                      <MdAttachMoney />
                      {position.rate}
                    </div>
                  </PositionDetails>
                  
                  <SkillsRequired>
                    <h5>Habilidades requeridas:</h5>
                    <div>
                      {position.skills.map((skill, skillIndex) => (
                        <SkillTag key={skillIndex}>{skill}</SkillTag>
                      ))}
                    </div>
                  </SkillsRequired>
                  
                  <ApplyButton onClick={() => handleApply(position.title)}>
                    Aplicar Ahora
                  </ApplyButton>
                </PositionCard>
              ))}
            </PositionsGrid>
          </div>
        </ContentGrid>
        
        <CallToAction>
          <h3>¿Listo para unirte a SwissCode?</h3>
          <p>
            Envíanos tu portafolio y CV. Estamos siempre buscando talento excepcional 
            para formar parte de nuestros proyectos más desafiantes.
          </p>
          <CTAButton onClick={() => alert('Redirigiendo al formulario de aplicación...')}>
            Enviar Aplicación
          </CTAButton>
          <CTAButton 
            style={{ background: 'transparent', border: '2px solid #DC143C', color: '#DC143C' }}
            onClick={() => window.location.href = '#contacto'}
          >
            Más Información
          </CTAButton>
        </CallToAction>
      </Container>
    </WorkWithUsSection>
  )
}

export default WorkWithUs
