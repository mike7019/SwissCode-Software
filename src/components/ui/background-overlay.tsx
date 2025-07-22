import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface BackgroundContainerProps {
  opacity: number;
}

const BackgroundContainer = styled.div<BackgroundContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/background.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  opacity: ${props => props.opacity};
  transition: opacity 0.5s ease-in-out;
  z-index: -1;
  pointer-events: none;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
`

const BackgroundOverlay = () => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Get section positions
      const aboutSection = document.getElementById('sobre-nosotros')
      const servicesSection = document.getElementById('servicios')
      const workWithUsSection = document.getElementById('trabaja-con-nosotros')
      
      let newOpacity = 0
      
      // Show background during About, Services, and WorkWithUs sections
      if (aboutSection && servicesSection && workWithUsSection) {
        const aboutTop = aboutSection.offsetTop - windowHeight * 0.5
        const workWithUsBottom = workWithUsSection.offsetTop + workWithUsSection.offsetHeight
        
        if (scrollY >= aboutTop && scrollY <= workWithUsBottom) {
          // Gradually increase opacity in the middle sections
          const sectionProgress = (scrollY - aboutTop) / (workWithUsBottom - aboutTop)
          
          // Create a curve that peaks in the middle sections
          if (sectionProgress < 0.3) {
            // Fade in
            newOpacity = (sectionProgress / 0.3) * 0.2
          } else if (sectionProgress > 0.7) {
            // Fade out
            newOpacity = ((1 - sectionProgress) / 0.3) * 0.2
          } else {
            // Full visibility in middle
            newOpacity = 0.2
          }
        }
      }
      
      setOpacity(Math.max(0, Math.min(0.25, newOpacity)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <BackgroundContainer opacity={opacity} />
}

export default BackgroundOverlay
