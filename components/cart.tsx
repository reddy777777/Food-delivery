'use client'

import { useCart } from './CartContext'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ShoppingCart } from 'lucide-react'

export function Cart() {
  const { cart, removeFromCart, clearCart, totalItems, totalPrice } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            You have {totalItems} item(s) in your cart
          </SheetDescription>
        </SheetHeader>
        {cart.length > 0 ? (
          <div className="mt-8 flex flex-col gap-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <div className="mt-4 flex items-center justify-between border-t pt-4">
              <p className="font-semibold">Total:</p>
              <p className="font-semibold">${totalPrice.toFixed(2)}</p>
            </div>
            <Button className="mt-4" onClick={clearCart}>
              Clear Cart
            </Button>
            <Button className="mt-2">Checkout</Button>
          </div>
        ) : (
          <p className="mt-8 text-center text-muted-foreground">
            Your cart is empty
          </p>
        )}
      </SheetContent>
    </Sheet>
  )
}

