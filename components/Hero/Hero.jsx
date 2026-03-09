"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center py-32"
    >
      <h1 className="text-5xl font-bold mb-6">
        Hi, I'm Sach Patel
      </h1>

      <p className="text-lg max-w-xl text-gray-600">
        Full Stack Developer building scalable web applications
        using MERN, cloud infrastructure, and AI.
      </p>
    </motion.section>
  )
}