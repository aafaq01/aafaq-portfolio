'use client'

import React from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: 'Cloud Platforms',
    skills: [
      { name: 'AWS', level: 'Expert' },
      { name: 'Azure', level: 'Advanced' },
      { name: 'Google Cloud', level: 'Intermediate' },
    ]
  },
  {
    name: 'Infrastructure as Code',
    skills: [
      { name: 'Terraform', level: 'Expert' },
      { name: 'AWS CDK', level: 'Advanced' },
      { name: 'Pulumi', level: 'Intermediate' },
    ]
  },
  {
    name: 'Container & Orchestration',
    skills: [
      { name: 'Kubernetes', level: 'Expert' },
      { name: 'Docker', level: 'Expert' },
      { name: 'OpenShift', level: 'Advanced' },
    ]
  },
  {
    name: 'CI/CD & Automation',
    skills: [
      { name: 'GitHub Actions', level: 'Expert' },
      { name: 'Jenkins', level: 'Advanced' },
      { name: 'GitLab CI', level: 'Advanced' },
    ]
  },
  {
    name: 'Monitoring & Observability',
    skills: [
      { name: 'Prometheus', level: 'Expert' },
      { name: 'Grafana', level: 'Expert' },
      { name: 'ELK Stack', level: 'Advanced' },
    ]
  },
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 'Expert' },
      { name: 'Go', level: 'Advanced' },
      { name: 'JavaScript', level: 'Intermediate' },
    ]
  }
]

export default function SkillsPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="w-full mb-8 pt-8 sm:pt-12">
        <div className="px-2 sm:px-4 max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-2">Skills & Expertise</h1>
          <p className="text-text-secondary">Technical proficiencies and competencies in DevOps and Cloud Technologies</p>
        </div>
      </section>

      {/* Skills Categories Section */}
      <section className="w-full mb-16">
        <div className="px-2 sm:px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/30 backdrop-blur-sm rounded-lg border border-border p-6 hover:border-white/30 transition-colors"
            >
              <h2 className="text-lg font-semibold text-white mb-4">{category.name}</h2>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">{skill.name}</span>
                      <span className="text-xs text-primary">{skill.level}</span>
                    </div>
                    <div className="h-1.5 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '80%' : '60%' }}
                        transition={{ duration: 0.8, delay: (index * 0.1) + (skillIndex * 0.1) }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
} 