'use client'

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Innovators",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "SoftZenix has been instrumental in our digital transformation. Their expertise and dedication are unmatched.",
  },
  {
    name: "Jane Smith",
    role: "CTO, Future Systems",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Working with SoftZenix has been a game-changer for our company. Their innovative solutions have propelled us to new heights.",
  },
  {
    name: "Mike Johnson",
    role: "Founder, StartUp X",
    image: "/placeholder.svg?height=100&width=100",
    quote: "SoftZenix's team is not just skilled, but also incredibly supportive. They've been crucial to our success.",
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Hear from the businesses we've transformed</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

