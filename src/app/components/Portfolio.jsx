'use client'
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce solution with advanced features.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization and predictive analytics tool.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Smart Home IoT System",
    description: "Integrated IoT solution for modern smart homes.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Blockchain-based Supply Chain",
    description: "Transparent and secure supply chain management system.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Showcasing our best work</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

