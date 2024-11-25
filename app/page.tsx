import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Resources from '@/components/Resources'
import Events from '@/components/Events'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Resources />
        <Events />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}