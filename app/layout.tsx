import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import { AuthProvider } from '@/components/AuthContext'
import { CartProvider } from '@/components/CartContext'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LoginWrapper } from '@/components/login-wrapper'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Favorite Food Delivered',
  description: 'Order delicious meals from top-rated restaurants in your area. Fast delivery, easy ordering, and exclusive deals await!',
  keywords: 'food delivery, online ordering, restaurants, fast delivery, meal deals',
  icons:{
    icon:['/images/favicon.icon?v=4'],
    apple: ['images/apple-touch-icon.png?v=4'],
    shortcut:['/images/apple-touch-icon.png'],
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <LoginWrapper>
              <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <Toaster />
            </LoginWrapper>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

