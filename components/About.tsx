'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <Image
              src="/placeholder.svg"
              alt="About SideFlows Community"
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 lg:pl-12"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">About SideFlows Community</h2>
            <p className="text-gray-600 mb-6">
              SideFlows Community is a vibrant network of decision-makers, business owners, and professionals passionate about data analytics, investment strategies, and financial decision-making. Our mission is to foster collaboration, share knowledge, and empower our members to make informed choices that drive success.
            </p>
            <p className="text-gray-600">
              Through our platform, members gain access to exclusive resources, participate in thought-provoking discussions, and connect with industry leaders. Join us in shaping the future of data-driven decision making and financial excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}