'use client'

import { motion } from "framer-motion"

const roadmapItems = [
  {
    year: "2023",
    title: "AI Integration",
    description: "Implementing advanced AI capabilities across our product line.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Opening new offices in Asia and Europe to serve our growing international client base.",
  },
  {
    year: "2025",
    title: "Quantum Computing Research",
    description: "Initiating research into quantum computing applications for our solutions.",
  },
  {
    year: "2026",
    title: "Sustainable Tech Initiative",
    description: "Launching a company-wide initiative to develop eco-friendly tech solutions.",
  },
]

const Roadmap = () => {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Roadmap</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Charting our course for the future</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-8 ${index % 2 === 0 ? "md:ml-auto md:pl-4" : "md:mr-auto md:pr-4"} md:w-1/2`}
            >
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="absolute top-6 -left-3 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-xl font-bold mb-2">{item.year}</h3>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap

