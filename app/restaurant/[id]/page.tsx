'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useCart } from '@/components/CartContext'
import { useToast } from '@/hooks/use-toast'

// This would typically come from an API or database
const restaurants = [
  {
    id: 1,
    name: 'Pizza Palace',
    cuisine: 'Italian',
    rating: 4.5,
    image: '/images/download (2).jpg?Weight= 200&Height=300',
    description: 'Authentic Italian pizzas and pasta dishes.',
    menu: [
      { id: 101, name: 'Margherita Pizza', price: 12.99, category: 'Pizza' },
      { id: 102, name: 'Pepperoni Pizza', price: 14.99, category: 'Pizza' },
      { id: 103, name: 'Spaghetti Carbonara', price: 13.99, category: 'Pasta' },
      { id: 104, name: 'Garlic Bread', price: 4.99, category: 'Sides' },
      { id: 105, name: 'Tiramisu', price: 6.99, category: 'Dessert' },
    ]
  },

  {
    id: 2,
    name: 'sensation',
    cuisine: 'japanese',
    rating: 4.7,
    image: '/images/download (1).jpg?Weight= 200&Height=300',
    description: 'Authentic japanese items and pasta dishes.',
    menu: [
      { id: 101, name: 'Tempura', price: 15.99, category: 'snack' },
      { id: 102, name: 'Yakitori', price: 13.99, category: 'Sides' },
      { id: 103, name: 'Takitori', price: 10.99, category: 'Sides' },
      { id: 104, name: 'Onigiri', price: 9.99, category: 'rice' },
      { id: 105, name: 'Donburi', price: 11.99, category: 'rice' },
    ]
  },

  {
    id: 3,
    name: 'sensation',
    cuisine: 'Mexican',
    rating: 4.3,
    image: '/images/download.jpg?Weight= 200&Height=300',
    description: 'Authentic mexican items',
    menu: [
      { id: 101, name: 'Chilaquiles', price: 9.99, category: 'Breakfast' },
      { id: 102, name: 'Huevos rancheros', price: 11.99, category: 'Lunch' },
      { id: 103, name: 'Machaca', price: 4.99, category: 'sides' },
      { id: 104, name: 'Taco', price: 12.99, category: 'Dessert' },
      { id: 105, name: 'Burrito', price: 10.99, category: 'snack' },
    ]
  },

  {
    id: 4,
    name: 'sensation',
    cuisine: 'Indian',
    rating: 4.9,
    image: '/images/images.jpg?Weight= 200&Height=300',
    description: 'Authentic Indian items.',
    menu: [
      { id: 101, name: 'Idli', price: 5.99, category: 'Breakfast' },
      { id: 102, name: 'Butter chicken', price: 11.99, category: 'Lunch' },
      { id: 103, name: 'Samosa', price: 4.99, category: 'sides' },
      { id: 104, name: 'Ras malai', price: 12.99, category: 'Dessert' },
      { id: 105, name: 'Chaat', price: 2.99, category: 'snack' },
      { id: 106, name: 'Biriyani', price: 8.99, category: 'Dinner' },
    ]
  },

  {
    id: 5,
    name: 'sensation',
    cuisine: 'American',
    rating: 4.2,
    image: '/images/images (1).jpg?Weight= 200&Height=300',
    description: 'Authentic American items.',
    menu: [
      { id: 101, name: 'Submarine sandwich', price: 10.99, category: 'Breakfast' },
      { id: 102, name: 'Hot chicken', price: 19.99, category: 'Lunch' },
      { id: 103, name: 'Pizza', price: 9.99, category: 'Pizza' },
      { id: 104, name: 'Apple pie', price: 20.99, category: 'Dessert' },
      { id: 105, name: 'Cheeseburger', price: 10.99, category: 'snack' },
      { id: 106, name: 'Chicken-fried steak', price: 12.99, category: 'Dinner' },
    ]
  },

  {
    id: 6,
    name: 'sensation',
    cuisine: 'Thai',
    rating: 4.4,
    image: '/images/images3.jpg?Weight= 200&Height=300',
    description: 'Authentic Thai items.',
    menu: [
      { id: 101, name: 'Massaman curry', price: 5.99, category: 'Breakfast' },
      { id: 102, name: 'Green curry', price: 11.99, category: 'Lunch' },
      { id: 103, name: 'Khao man gai', price: 4.99, category: 'rice' },
      { id: 104, name: 'Mango sticky rice', price: 12.99, category: 'Dessert' },
      { id: 105, name: 'Pad thai', price: 2.99, category: 'snack' },
      { id: 106, name: 'Suea rong hai', price: 8.99, category: 'Dinner' },
    ]
  },
  // Add more restaurants here...
]

const categories = ['All', 'Pizza', 'Pasta', 'Sides', 'Dessert',  'Breakfast', 'Lunch','snack','Dinner','rice']

export default function RestaurantPage() {
  const { id } = useParams()
  const restaurant = restaurants.find(r => r.id === Number(id))
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const { addToCart } = useCart()
  const { toast } = useToast()

  if (!restaurant) {
    return <div>Restaurant not found</div>
  }

  const filteredMenu = restaurant.menu.filter(item => 
    (selectedCategory === 'All' || item.category === selectedCategory) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddToCart = (item: typeof restaurant.menu[0]) => {
    addToCart({ id: item.id, name: item.name, price: item.price })
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col items-center md:flex-row md:items-start">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          width={600}
          height={400}
          className="mb-4 rounded-lg object-cover md:mb-0 md:mr-8"
        />
        <div>
          <h1 className="mb-2 text-3xl font-bold">{restaurant.name}</h1>
          <p className="mb-2 text-xl text-muted-foreground">{restaurant.cuisine}</p>
          <p className="mb-4 text-yellow-500">★ {restaurant.rating}</p>
          <p className="text-lg">{restaurant.description}</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold">Menu</h2>
      
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <Input
          type="search"
          placeholder="Search menu items"
          className="max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredMenu.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-muted-foreground">{item.category}</p>
              <p className="mt-2 font-bold">${item.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

