import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { TopBar } from '@/components/TopBar'

export const metadata: Metadata = {
  title: 'Aafaq Ahmad - DevOps | SRE | Cloud Engineer',
  description: 'DevOps Engineer specializing in cloud infrastructure, automation, and SRE practices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-screen bg-background">
            {/* Mobile Layout */}
            <div className="sm:hidden flex flex-col h-screen">
              {/* Scrollable Content Area including TopBar */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-4">
                  {/* Top Bar */}
                  <TopBar />
                  
                  {/* Main Content */}
                  <main className="rounded-xl border border-border p-4">
                    {children}
                  </main>
                </div>
              </div>

              {/* Navigation component will render fixed at bottom automatically */}
              <Navigation />
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:block max-w-[1000px] mx-auto p-6">
              {/* Top Bar */}
              <div className="mb-6">
                <TopBar />
              </div>

              {/* Content Area */}
              <div className="flex gap-6">
                {/* Navigation - Sticky */}
                <div className="shrink-0">
                  <div className="sticky top-6">
                    <Navigation />
                  </div>
                </div>

                {/* Main Content Area */}
                <main className="flex-1 rounded-xl border border-border p-4">
                  {children}
                </main>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 