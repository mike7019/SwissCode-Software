'use client'

import Header from '@/components/layout/header'
import Hero from '@/components/ui/hero'
import About from '@/components/ui/about'
import Services from '@/components/ui/services'
import WorkWithUs from '@/components/ui/work-with-us'
import Contact from '@/components/ui/contact'
import Footer from '@/components/layout/footer'
import BackgroundOverlay from '@/components/ui/background-overlay'
import { AppContainer } from '@/styles/styled-components'

export default function HomePage() {
  return (
    <AppContainer>
      <BackgroundOverlay />
      <Header />
      <Hero />
      <About />
      <Services />
      <WorkWithUs />
      <Contact />
      <Footer />
    </AppContainer>
  )
}
