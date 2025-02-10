'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is reshaping the landscape of software development.",
    image: "/placeholder.svg?height=200&width=300",
    date: "May 15, 2023",
    author: "John Doe",
  },
  {
    title: "Cybersecurity Best Practices for 2023",
    excerpt: "Essential cybersecurity measures every business should implement to stay protected.",
    image: "/placeholder.svg?height=200&width=300",
    date: "June 2, 2023",
    author: "Jane Smith",
  },
  {
    title: "The Rise of Edge Computing",
    excerpt: "Understanding the benefits and applications of edge computing in modern tech infrastructure.",
    image: "/placeholder.svg?height=200&width=300",
    date: "June 20, 2023",
    author: "Mike Johnson",
  },
]

const Blog = () => {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Stay updated with our latest tech articles</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.author}</span>
                </div>
                <Link href="#" className="mt-4 inline-block text-primary hover:underline">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

