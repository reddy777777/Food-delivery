'use client'

import { Button } from '@/components/ui/button'


export function Hero() {

  const scrollToServices = () => {
    const servicesSection = document.getElementById('our-aim')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-primary py-20 text-primary-foreground">
    <div className="container mx-auto px-4 text-center">
      <h1 className="mb-6 text-4xl font-bold md:text-6xl">Delicious Food, Delivered to You</h1>
      <p className="mb-8 text-xl">Find and order from the best restaurants in your area</p>
      <div className="mx-auto flex justify-center">
        <Button 
          size="lg" 
          className="flex text-center items-center justify-center w-200 md:w-100 bg-lime-400 p-4 text-white"
          onClick={scrollToServices}
        >
          Find Food
        </Button>
      </div>
    </div>
  </section>
  )
}

