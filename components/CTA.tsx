'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section id="join" className="py-20 bg-gradient-to-r from-blue-900 to-teal-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Join the SideFlows Community?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8"
        >
          Empower your decision-making with data analytics, investment insights, and a network of industry leaders.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="#" className="bg-gold-500 hover:bg-gold-600 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
            Join Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}