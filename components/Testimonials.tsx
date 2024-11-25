import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const testimonials = [
  {
    quote: "SideFlows Community has been instrumental in helping me make informed financial decisions. The resources and connections are invaluable.",
    name: "Jane Doe",
    title: "CEO, TechInvest Inc.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "The monthly webinars and collaborative environment have significantly improved our data analytics strategies and investment returns.",
    name: "John Smith",
    title: "Data Scientist, FinTech Solutions",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}