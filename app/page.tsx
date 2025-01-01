import { Hero } from '@/components/hero'
import { RestaurantList } from '@/components/restaurant-list'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Utensils, Gift } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      
      {/* Our Services Section */}
      <section id ="our-services " className="my-16">
        <h2 className="mb-8 text-3xl font-bold text-center">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Utensils className="mr-2" />
                Wide Selection
              </CardTitle>
            </CardHeader>
            <CardContent>
              Choose from a diverse range of cuisines and restaurants in your area.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowRight className="mr-2" />
                Fast Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              Enjoy quick and reliable delivery right to your doorstep.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gift className="mr-2" />
                Special Offers
              </CardTitle>
            </CardHeader>
            <CardContent>
              Take advantage of exclusive deals and discounts from our partner restaurants.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Aim Section */}
      <section  id ="our-aim" className="my-16 bg-primary text-primary-foreground rounded-lg p-8">
        <h2 className="mb-4 text-3xl font-bold text-center">Our Aim</h2>
        <p className="text-center text-lg">
          At Foodie, we strive to connect food lovers with the best local restaurants, 
          providing a seamless and delightful dining experience. Our goal is to make 
          every meal special, whether you're dining in or ordering out.
        </p>
      </section>

      {/* Offers Section */}
      <section className="my-16">
        <h2 className="mb-8 text-3xl font-bold text-center">Special Offers</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-yellow-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">New User Special</h3>
              <p className="mb-4">Get 20% off your first order with code: NEWBIE20</p>
              <Button asChild>
                <Link href="/restaurants">Order Now</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Weekday Lunch Deal</h3>
              <p className="mb-4">15% off all orders between 11 AM and 2 PM, Mon-Fri</p>
              <Button asChild>
                <Link href="/restaurants">Order Now</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Family Feast</h3>
              <p className="mb-4">$10 off orders over $50 for family-sized meals</p>
              <Button asChild>
                <Link href="/restaurants">Order Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <h2 className="mb-8 text-3xl font-bold text-center">Restaurant's</h2>
      <RestaurantList selectedCuisine="All" searchTerm="" />
    </div>
  )
}

