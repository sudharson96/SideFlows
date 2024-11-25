"use client";

import { motion } from "framer-motion";
import { useState } from "react"; // Import useState for managing form state
import { Button } from "@/components/ui/button";

export default function Hero() {
  // State to store email input value
  const [email, setEmail] = useState("");

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload
    console.log("Form submitted with email:", email);
    // Add logic here to handle form submission (e.g., API call)
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-green-800 mb-6"
        >
          Welcome to SideFlows Community
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl md:text-2xl text-green-700 mb-8 max-w-3xl mx-auto"
        >
          Empower your financial future with data-driven insights and a community of experts.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="sm:flex w-full justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:max-w-xs border border-green-300 rounded-lg px-4 py-2 focus:border-green-500 focus:ring-green-500"
            />
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                Join Community
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
