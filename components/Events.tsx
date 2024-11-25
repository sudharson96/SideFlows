import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const events = [
  {
    date: 'May 15',
    title: 'Data Analytics in Finance',
    speaker: 'Jane Doe, CEO of FinTech Innovations',
  },
  {
    date: 'June 2',
    title: 'Investment Strategies for 2024',
    speaker: 'John Smith, Wealth Management Expert',
  },
  {
    date: 'June 20',
    title: 'The Future of Cryptocurrency',
    speaker: 'Alice Johnson, Blockchain Specialist',
  },
]

export default function Events() {
  return (
    <section className="py-20 bg-background" id="events">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join our expert-led webinars and workshops to stay ahead in the financial world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{event.date}</p>
                <p className="font-medium">{event.speaker}</p>
              </CardContent>
              <CardFooter>
                <Button>Register</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" size="lg">View All Events</Button>
        </div>
      </div>
    </section>
  )
}