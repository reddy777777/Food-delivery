'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { RestaurantList } from '@/components/restaurant-list'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const cuisines = ['All', 'Italian', 'Chinese', 'Mexican', 'Indian', 'Japanese', 'Thai', 'American']

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [searchTerm, setSearchTerm] = useState(initialQuery)
  const [selectedCuisine, setSelectedCuisine] = useState('All')

  useEffect(() => {
    setSearchTerm(initialQuery)
  }, [initialQuery])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Search Results for "{initialQuery}"</h1>
      
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <Input
          type="search"
          placeholder="Refine your search"
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

