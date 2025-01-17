'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000)) 
    if (email && password) {  // Simulating API call
    const newUser = { id: '1', name: 'John Doe', email }
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
    setIsLoading(false)
    router.push('/')
    }
  }

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (name && email && password) {// Simulating API call
    const newUser = { id: '2', name, email }
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
    setIsLoading(false)
    router.push('/dashboard')
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

