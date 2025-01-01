'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
// import { useCart } from './CartContext'
// import { useToast } from '@/hooks/use-toast'

const restaurants = [
  { id: 1, name: 'Pizza Palace', cuisine: 'Italian', rating: 4.5, image: '/images/download (2).jpg?height=200&width=200' },
  { id: 2, name: 'Sushi Sensation', cuisine: 'Japanese', rating: 4.7, image: '/images/download (1).jpg?height=200&width=200' },
  { id: 3, name: 'Taco Town', cuisine: 'Mexican', rating: 4.3, image: '/images/download.jpg?height=200&width=200' },
  { id: 4, name: 'Curry House', cuisine: 'Indian', rating: 4.9, image: '/images/images.jpg?height=200&width=200' },
  { id: 5, name: 'Burger Barn', cuisine: 'American', rating: 4.2, image: '/images/images (1).jpg?height=200&width=200' },
  { id: 6, name: 'Pad Thai Paradise', cuisine: 'Thai', rating: 4.4, image: '/images/images3.jpg?heiight=200&width=200' },
]

interface RestaurantListProps {
  selectedCuisine: string
  searchTerm: string
}

export function RestaurantList({ selectedCuisine, searchTerm }: RestaurantListProps) {
  

  const filteredRestaurants = restaurants.filter(restaurant => 
    (selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine) &&
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  )


  return (
    <div id ="target" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredRestaurants.map((restaurant) => (
        <Card key={restaurant.id} className="flex flex-col">
          <CardContent className="p-4">
            <Link href={`/restaurant/${restaurant.id}`}>
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                width={200}
                height={200}
                className="mb-4 w-full rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold">{restaurant.name}</h3>
            </Link>
            <p className="text-muted-foreground">{restaurant.cuisine}</p>
            <p className="text-yellow-500">★ {restaurant.rating}</p>
           
          </CardContent>
          <CardFooter className="mt-auto">
          <Button asChild>
                <Link href={`/restaurant/${restaurant.id}`}>View Menu</Link>
              </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

