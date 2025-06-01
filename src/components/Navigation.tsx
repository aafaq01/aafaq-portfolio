'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()

  const links = [
    {
      href: '/',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: 'Home',
    },
    {
      href: '/projects',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      label: 'Projects',
    },
    {
      href: '/experience',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Experience',
    },
    {
      href: '/skills',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      label: 'Skills',
    },
    {
      href: '/contact',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Contact',
    },
  ]

  return (
    <nav className="fixed sm:static bottom-0 left-0 right-0 sm:bottom-auto z-50 p-2 bg-secondary/30 backdrop-blur-sm border-t sm:border-t-0 sm:border sm:rounded-xl border-border">
      <div className="flex sm:flex-col items-center sm:items-stretch justify-around sm:justify-start sm:gap-1 max-w-lg mx-auto sm:mx-0">
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-2 w-16 sm:w-full h-14 sm:h-10 rounded-lg px-3
                transition-all duration-200 group
                ${isActive ? 'text-primary bg-primary/10' : 'text-text-secondary hover:text-primary hover:bg-primary/5'}
              `}
              title={link.label}
            >
              {link.icon}
              <span className="text-xs sm:text-sm">{link.label}</span>
              <div className={`
                absolute inset-0 rounded-lg border border-transparent
                transition-all duration-200 scale-95 opacity-0
                group-hover:scale-100 group-hover:opacity-100
                ${isActive ? 'border-primary' : 'group-hover:border-primary/50'}
              `} />
            </Link>
          )
        })}
      </div>
    </nav>
  )
} 