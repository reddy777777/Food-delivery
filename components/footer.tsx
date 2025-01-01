import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Foodie</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/press">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">For Restaurants</h3>
            <ul className="space-y-2">
              <li><Link href="/partner">Become a Partner</Link></li>
              <li><Link href="/restaurant-app">Restaurant App</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Learn More</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect with Us</h3>
            <ul className="space-y-2">
              <li><Link href="https://facebook.com">Facebook</Link></li>
              <li><Link href="https://twitter.com">Twitter</Link></li>
              <li><Link href="https://instagram.com">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p>&copy; 2024 Foodie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

