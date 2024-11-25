import { BarChart2, Users, Video, BookOpen } from 'lucide-react'

const features = [
  {
    icon: BarChart2,
    title: 'Data-Driven Insights',
    description: 'Access cutting-edge analytics tools for informed financial decisions.',
  },
  {
    icon: BookOpen,
    title: 'Investment Strategies',
    description: 'Learn from experts and share knowledge on wealth-building approaches.',
  },
  {
    icon: Users,
    title: 'Networking',
    description: 'Connect with like-minded professionals for partnerships and growth.',
  },
  {
    icon: Video,
    title: 'Exclusive Webinars',
    description: 'Participate in monthly sessions featuring industry leaders and innovators.',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-background" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join SideFlows Community?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}