'use client'
import { motion } from "framer-motion"
import { Code, Smartphone, Globe, Shield } from "lucide-react"

const services = [
  {
    icon: <Code className="w-12 h-12 text-primary" />,
    title: "Custom Software Development",
    description: "Tailored software solutions to meet your unique business needs and challenges.",
  },
  {
    icon: <Smartphone className="w-12 h-12 text-primary" />,
    title: "Mobile App Development",
    description: "Cutting-edge mobile applications for iOS and Android platforms.",
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: "Web Development",
    description: "Responsive and dynamic web applications using the latest technologies.",
  },
  {
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: "Cybersecurity Solutions",
    description: "Robust security measures to protect your digital assets and data.",
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Comprehensive solutions for your tech needs</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

