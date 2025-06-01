'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Multi-Cloud Infrastructure',
    description: 'Automated infrastructure deployment across AWS, Azure, and GCP using Terraform and GitHub Actions.',
    tags: ['Terraform', 'AWS', 'Azure', 'GCP', 'GitHub Actions'],
    link: '/projects/multi-cloud',
    github: 'https://github.com/yourusername/multi-cloud-infra'
  },
  {
    title: 'Kubernetes Monitoring Stack',
    description: 'Complete monitoring solution for Kubernetes clusters using Prometheus, Grafana, and Alert Manager.',
    tags: ['Kubernetes', 'Prometheus', 'Grafana', 'Helm'],
    link: '/projects/k8s-monitoring',
    github: 'https://github.com/yourusername/k8s-monitoring'
  },
  {
    title: 'CI/CD Pipeline Framework',
    description: 'Reusable CI/CD pipeline templates for various application stacks using GitHub Actions and Azure DevOps.',
    tags: ['GitHub Actions', 'Azure DevOps', 'Docker', 'Python'],
    link: '/projects/cicd-framework',
    github: 'https://github.com/yourusername/cicd-framework'
  }
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="w-full mb-8 pt-8 sm:pt-12">
        <div className="px-2 sm:px-4 max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-2">Projects</h1>
          <p className="text-text-secondary">Featured work and technical implementations</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full mb-16">
        <div className="px-2 sm:px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/30 backdrop-blur-sm rounded-lg border border-border p-6 hover:border-white/30 transition-colors max-w-3xl"
            >
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-text-secondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (tagIndex * 0.05) }}
                    className="px-2 py-1 text-sm bg-primary/10 text-primary rounded"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={project.link}
                  className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 group"
                >
                  View Details
                  <motion.svg
                    className="w-4 h-4"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  GitHub
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
} 