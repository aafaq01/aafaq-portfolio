'use client'

import React from 'react'
import { motion } from 'framer-motion'

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Technology',
    location: 'Silicon Valley, CA',
    period: '2020 - 2022',
    gpa: '3.9/4.0',
    highlights: [
      'Specialization in Cloud Computing and Distributed Systems',
      'Research in Container Orchestration Optimization',
      'Teaching Assistant for Cloud Computing Course',
      'Best Graduate Research Award'
    ]
  },
  {
    degree: 'Bachelor of Engineering in Computer Science',
    school: 'National Institute of Technology',
    location: 'Tech City, State',
    period: '2016 - 2020',
    gpa: '3.8/4.0',
    highlights: [
      'First Class with Distinction',
      'Major Project on Automated Cloud Infrastructure',
      'Technical Lead of College Computing Club',
      'Winner of National Level Hackathon'
    ]
  }
]

export default function Education() {
  return (
    <div className="space-y-8">
      <motion.h1 
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h1>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.period}
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-primary">{edu.degree}</h2>
                <div>
                  <p className="text-lg">{edu.school}</p>
                  <p className="text-text-secondary">{edu.location}</p>
                </div>
              </div>
              
              <div className="space-y-1 text-right">
                <p className="text-lg font-medium">{edu.period}</p>
                <p className="text-primary font-medium">GPA: {edu.gpa}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3">Highlights</h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                {edu.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 