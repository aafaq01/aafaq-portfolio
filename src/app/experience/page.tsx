'use client'

import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Senior DevOps Engineer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description: [
      'Led cloud infrastructure management and optimization across AWS and Azure platforms',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Managed Kubernetes clusters and containerized applications',
      'Automated infrastructure provisioning using Terraform and Ansible',
    ],
  },
  {
    title: 'Cloud Infrastructure Engineer',
    company: 'Global Systems Ltd.',
    period: '2019 - 2021',
    description: [
      'Designed and maintained cloud-native applications on AWS',
      'Implemented monitoring and alerting systems using Prometheus and Grafana',
      'Developed automation scripts for routine maintenance tasks',
      'Managed disaster recovery and backup solutions',
    ],
  },
  {
    title: 'DevOps Engineer',
    company: 'Innovation Labs',
    period: '2017 - 2019',
    description: [
      'Established DevOps practices and culture within the organization',
      'Set up and maintained CI/CD pipelines using Jenkins and GitLab',
      'Implemented container orchestration using Docker and Kubernetes',
      'Managed cloud infrastructure on AWS and GCP',
    ],
  },
]

export default function ExperiencePage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="w-full mb-8 pt-8 sm:pt-12">
        <div className="px-2 sm:px-4 max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-2">Professional Experience</h1>
          <p className="text-text-secondary">Career Journey in DevOps and Cloud Engineering</p>
        </div>
      </section>

      {/* Experience Cards Section */}
      <section className="w-full mb-16">
        <div className="px-2 sm:px-4 max-w-5xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/30 backdrop-blur-sm rounded-lg border border-border p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-white mb-1">{exp.title}</h2>
                  <p className="text-primary text-sm">{exp.company}</p>
                </div>
                <div className="text-sm text-text-secondary bg-primary/10 px-3 py-1 rounded-full">{exp.period}</div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + ((i + 1) * 0.1) }}
                    className="text-text-secondary group"
                  >
                    <span className="text-white group-hover:text-primary transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
} 