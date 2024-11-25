import Link from 'next/link'

const resources = ['Market Reports', 'E-Books', 'Podcasts', 'Video Tutorials']
const community = ['Events', 'Forum', 'Mentorship', 'Networking']

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SideFlows</h3>
            <p className="text-muted-foreground">Empowering financial decision-makers</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {community.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Join Our Community</h3>
            <Link href="#join-community" className="text-primary hover:text-primary/80">
              Join Now
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          
<p>&copy; {new Date().getFullYear()} SideFlows Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}