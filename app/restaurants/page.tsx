'use client'

import { useState } from 'react'
import { RestaurantList } from '@/components/restaurant-list'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const cuisines = ['All', 'Italian', 'Chinese', 'Mexican', 'Indian', 'Japanese', 'Thai', 'American']

export default function RestaurantsPage() {
  const [selectedCuisine, setSelectedCuisine] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">All Restaurants</h1>
      
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <Input
          type="search"
          placeholder="Search restaurants"
          className="max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {cuisines.map((cuisine) => (
          <Button
            key={cuisine}
            variant={selectedCuisine === cuisine ? "default" : "outline"}
            onClick={() => setSelectedCuisine(cuisine)}
          >
            {cuisine}
          </Button>
        ))}
      </div>

      <RestaurantList selectedCuisine={selectedCuisine} searchTerm={searchTerm} />
    </div>
  )
}

