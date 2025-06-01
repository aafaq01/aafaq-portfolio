'use client'

import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'AWS', category: 'Cloud' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'GCP', category: 'Cloud' },
  { name: 'Terraform', category: 'IaC' },
  { name: 'AWS CDK', category: 'IaC' },
  { name: 'Kubernetes', category: 'Container Orchestration' },
  { name: 'Docker', category: 'Containerization' },
  { name: 'GitHub Actions', category: 'CI/CD' },
  { name: 'Jenkins', category: 'CI/CD' },
  { name: 'Prometheus', category: 'Monitoring' },
  { name: 'Grafana', category: 'Monitoring' },
  { name: 'Python', category: 'Programming' },
  { name: 'Go', category: 'Programming' },
  { name: 'Node.js', category: 'Programming' },
]

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">Who am I?</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-text-secondary mb-8">
              I'm a DevOps Engineer with extensive experience in designing, implementing, and maintaining cloud infrastructure across multiple platforms. My expertise lies in automating deployment processes, implementing robust CI/CD pipelines, and ensuring high availability and scalability of applications.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-8">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card flex flex-col"
              >
                <span className="text-sm text-primary mb-1">{skill.category}</span>
                <span className="text-lg font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-2">Senior DevOps Engineer</h3>
              <p className="text-primary mb-4">Company Name • 2020 - Present</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Led the migration of legacy infrastructure to a multi-cloud architecture</li>
                <li>Implemented GitOps practices using FluxCD and ArgoCD</li>
                <li>Reduced deployment time by 70% through CI/CD pipeline optimization</li>
                <li>Designed and implemented a comprehensive monitoring solution</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
} 