'use client'

import { useState, useEffect } from 'react'
import { useAuth } from './AuthContext'
import { AuthModal } from '@/components/auth-modal'

export function LoginWrapper({ children }: { children: React.ReactNode }) {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && !user) {
      const timer = setTimeout(() => {
        setShowAuthModal(true)
      }, 500) // Delay to allow for initial page load
      return () => clearTimeout(timer)
    }
  }, [user, isLoading])

  const handleClick = () => {
    if (!user && !showAuthModal) {
      setShowAuthModal(true)
    }
  }

  return (
    <div onClick={handleClick}>
      {children}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  )
}

