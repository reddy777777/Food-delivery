'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Order = {
  id: string
  date: string
  total: number
  status: string
}

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [recentOrders, setRecentOrders] = useState<Order[]>([])

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
  }, [user, isLoading, router])

  useEffect(() => {
    // Simulating fetching recent orders
    const fetchRecentOrders = async () => {
      // This would typically be an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setRecentOrders([
        { id: '1', date: '2023-05-01', total: 25.99, status: 'Delivered' },
        { id: '2', date: '2023-05-03', total: 34.50, status: 'Processing' },
        { id: '3', date: '2023-05-05', total: 18.75, status: 'In Transit' },
      ])
    }

    if (user) {
      fetchRecentOrders()
    }
  }, [user])

  if (isLoading || !user) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">Welcome, {user.name}!</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <Button className="mt-4">Edit Profile</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            {recentOrders.length > 0 ? (
              <ul className="space-y-2">
                {recentOrders.map(order => (
                  <li key={order.id} className="flex flex-col sm:flex-row sm:justify-between">
                    <span>{order.date}</span>
                    <span>${order.total.toFixed(2)}</span>
                    <span>{order.status}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No recent orders.</p>
            )}
            <Button className="mt-4">View All Orders</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Favorite Restaurants</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You have added any favorites yet.</p>
            <Button className="mt-4">Browse Restaurants</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

