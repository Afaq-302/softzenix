"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Contact = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    requirements: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log(formData)
    setStep(4) // Move to thank you step
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Let's start with your details</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStep(2)}
              className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
            >
              Next
            </motion.button>
          </motion.div>
        )
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Tell us about your project</h3>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            >
              <option value="">Select Project Type</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile App</option>
              <option value="desktop">Desktop Application</option>
              <option value="other">Other</option>
            </select>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            >
              <option value="">Select Budget Range</option>
              <option value="<5k">Less than $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-50k">$10,000 - $50,000</option>
              <option value="50k+">$50,000+</option>
            </select>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Project Requirements"
              className="w-full p-2 mb-4 border border-gray-300 rounded h-32"
              required
            ></textarea>
            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(1)}
                className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-400 transition duration-300"
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(3)}
                className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
              >
                Next
              </motion.button>
            </div>
          </motion.div>
        )
      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Any additional details?</h3>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional Message"
              className="w-full p-2 mb-4 border border-gray-300 rounded h-32"
            ></textarea>
            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(2)}
                className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-400 transition duration-300"
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
              >
                Submit
              </motion.button>
            </div>
          </motion.div>
        )
      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Thank you for your message!</h3>
            <p>We'll get back to you as soon as possible.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStep(1)}
              className="mt-4 bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
            >
              Send Another Message
            </motion.button>
          </motion.div>
        )
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">We'd love to hear from you</p>
        </motion.div>
        <div className="max-w-md mx-auto">
          <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Contact

