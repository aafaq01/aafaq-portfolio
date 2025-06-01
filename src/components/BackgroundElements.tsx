'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'

export function BackgroundElements() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Geometric Patterns */}
      <div className="absolute inset-0">
        {/* Top Right Pattern */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 transform rotate-45" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:24px_24px]" />
        </div>

        {/* Bottom Left Pattern */}
        <div className="absolute bottom-0 left-0 w-[280px] h-[280px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-orange-500/20 transform -rotate-45" />
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:18px_18px]" />
        </div>
      </div>

      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(255, 255, 255) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255, 255, 255) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          height: 'fit-content',
          minHeight: '100%'
        }}
      />

      {/* Fine Diagonal Lines */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="opacity-[0.03]">
          <pattern id="diagonal-pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M-1,1 l2,-2 M0,16 l16,-16 M15,17 l2,-2" stroke="white" strokeWidth="0.75" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#diagonal-pattern)" />
        </svg>
      </div>
    </div>
  )
} 