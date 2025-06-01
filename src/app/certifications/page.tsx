'use client'

import React from 'react'
import { motion } from 'framer-motion'

const certifications = [
  {
    title: 'AWS Solutions Architect Professional',
    issuer: 'Amazon Web Services',
    date: 'Jan 2024',
    expires: 'Jan 2027',
    credentialId: 'AWS-SAP-123456',
    skills: ['AWS', 'Cloud Architecture', 'Security', 'Cost Optimization']
  },
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: 'Dec 2023',
    expires: 'Dec 2026',
    credentialId: 'CKA-1234567',
    skills: ['Kubernetes', 'Container Orchestration', 'Cloud Native']
  },
  {
    title: 'Azure DevOps Engineer Expert',
    issuer: 'Microsoft',
    date: 'Nov 2023',
    expires: 'Nov 2025',
    credentialId: 'MS-AZ400',
    skills: ['Azure DevOps', 'CI/CD', 'Infrastructure as Code']
  },
  {
    title: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: 'Oct 2023',
    expires: 'Oct 2026',
    credentialId: 'GCP-PCA-123456',
    skills: ['GCP', 'Cloud Architecture', 'Security']
  }
]

export default function Certifications() {
  return (
    <div className="space-y-8">
      <motion.h1 
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certifications
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.credentialId}
            className="card p-6 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-primary">{cert.title}</h2>
              <p className="text-text-secondary">{cert.issuer}</p>
            </div>
            
            <div className="flex justify-between text-sm">
              <span>Issued: {cert.date}</span>
              <span>Expires: {cert.expires}</span>
            </div>
            
            <div>
              <p className="text-sm text-text-secondary mb-2">Credential ID:</p>
              <p className="text-sm font-mono bg-background/50 px-3 py-1 rounded-lg inline-block">
                {cert.credentialId}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {cert.skills.map(skill => (
                <span 
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 