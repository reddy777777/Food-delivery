'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { User, Menu } from 'lucide-react'
import { useAuth } from './AuthContext'
import { Cart } from '@/components/cart'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  const { user, logout } = useAuth()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
      <Link href="/" className="flex items-center">
          <Image
            src="/images/apple-touch-icon.png"
            alt="TastyBites Logo"
            width={60}
            height={40}
            className="mr-2 rounded-full object-cover"
          />
          <span className="text-2xl font-bold text-primary">Foodie</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/restaurants" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Restaurants
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary">
                About
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/restaurants" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                Restaurants
              </Link>
              <Link href="/about" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              {user && (
                <>
                  <Link href="/dashboard" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                    Dashboard
                  </Link>
                  <Button onClick={() => { logout(); setIsMenuOpen(false); }}>Logout</Button>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center space-x-4">
          <Cart />
          {user && (
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link href="/dashboard">
                <User className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
          )}
          {user && (
            <Button onClick={logout} className="hidden md:flex">Logout</Button>
          )}
        </div>
      </div>
    </header>
  )
}

