import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold text-center">About Foodie</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Story</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Foodie was founded in 2023 with a simple mission: to connect food lovers 
            with the best local restaurants. We believe that great food has the power to 
            bring people together and create memorable experiences.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What We Do</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            We partner with a wide range of restaurants to offer you a diverse selection 
            of cuisines. From quick bites to gourmet meals, foodie makes it easy to 
            discover, order, and enjoy delicious food from the comfort of your home or office.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Commitment</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            At Foodie, we are committed to:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Providing a seamless ordering experience</li>
            <li>Ensuring timely and reliable delivery</li>
            <li>Supporting local restaurants and communities</li>
            <li>Offering excellent customer service</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Join Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Whether your are a food enthusiast, a restaurant owner, or someone who simply 
            enjoys a good meal, we invite you to join the Foodie community. Together, 
            let's explore the wonderful world of flavors right at your fingertips!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

