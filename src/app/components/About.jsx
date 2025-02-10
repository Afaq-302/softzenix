'use client'
import Image from "next/image"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Pioneering the future of technology</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="About SoftZenix"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              At SoftZenix, we're on a mission to revolutionize the tech industry through innovative solutions and
              cutting-edge technologies. We believe in pushing the boundaries of what's possible and creating software
              that not only meets but exceeds our clients' expectations.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We envision a world where technology seamlessly integrates into every aspect of life, making it more
              efficient, sustainable, and enjoyable. Our goal is to be at the forefront of this technological
              revolution, driving positive change through our expertise and passion for innovation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white font-bold py-2 px-6 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

