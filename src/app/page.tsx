import type { Metadata } from 'next'
import { seoConfig } from '@/config/seo'
import HomePage from '@/components/pages/home-page'

export const metadata: Metadata = {
  title: seoConfig.home.title,
  description: seoConfig.home.description,
  keywords: seoConfig.home.keywords,
  openGraph: {
    title: seoConfig.home.title,
    description: seoConfig.home.description,
    url: seoConfig.home.url,
    type: 'website'
  }
}

export default function Home() {
  return <HomePage />
}
