'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full mb-16 pt-8 sm:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-2 sm:px-4 md:pl-6 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Hi 👋, I'm <span className="text-primary">Aafaq Ahmad</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            A DevOps Engineer passionate about cloud infrastructure, automation, and building scalable systems.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Get in touch
            </a>
            <a href="#projects" className="px-6 py-2 bg-secondary/50 backdrop-blur-sm border border-border rounded-lg hover:bg-secondary/70 transition-colors">
              View my work
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="w-full mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="px-2 sm:px-4 md:pl-6 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-text-secondary text-justify">
            <p>
              With over 6 years of experience in DevOps and Cloud Engineering, I specialize in designing and implementing robust, scalable infrastructure solutions. My expertise spans across major cloud platforms including AWS, Azure, and GCP, where I've successfully led numerous digital transformation initiatives.
            </p>
            <p>
              I'm passionate about automation and infrastructure as code, having implemented CI/CD pipelines that reduced deployment times by 60% and automated infrastructure provisioning that improved resource utilization by 40%. My approach combines technical expertise with a strong focus on business objectives.
            </p>
            <p>
              Currently, I'm focused on cloud-native technologies, particularly Kubernetes and containerization, where I've been instrumental in modernizing legacy applications and implementing microservices architectures. I have a proven track record of optimizing cloud costs while maintaining high availability and security standards.
            </p>
            <p>
              Beyond technical skills, I'm an advocate for DevOps culture and practices. I regularly contribute to the tech community through mentoring, knowledge sharing, and participating in open-source projects. I believe in continuous learning and staying updated with the latest industry trends and best practices.
            </p>
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-white mb-3">Key Achievements:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Led successful migration of 50+ applications to Kubernetes, improving scalability and reducing operational costs by 35%</li>
                <li>Implemented GitOps practices resulting in 90% faster recovery times and 70% reduction in deployment failures</li>
                <li>Designed and implemented multi-region disaster recovery solutions achieving 99.99% uptime</li>
                <li>Developed automated security scanning pipelines, reducing vulnerability detection time by 80%</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
} 