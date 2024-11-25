import { FileText, Book, Headphones, Video } from 'lucide-react'
import { Button } from '@/components/ui/button'

const resources = [
  { icon: FileText, title: 'Market Reports', description: 'Gain insights from our extensive collection of market reports.' },
  { icon: Book, title: 'E-Books', description: 'Expand your knowledge with our curated e-book library.' },
  { icon: Headphones, title: 'Podcasts', description: 'Listen to expert discussions on various financial topics.' },
  { icon: Video, title: 'Video Tutorials', description: 'Learn visually with our comprehensive video guides.' },
]

export default function Resources() {
  return (
    <section className="py-20 bg-muted" id="resources">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Exclusive Resources</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Access a wealth of financial knowledge and tools to enhance your investment strategies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {resources.map((resource, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-md">
              <resource.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-muted-foreground">{resource.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg">Explore Resources</Button>
        </div>
      </div>
    </section>
  )
}