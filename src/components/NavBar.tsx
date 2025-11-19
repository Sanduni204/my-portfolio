"use client"
import React, { useState } from 'react'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="w-full bg-brand-background-dark/95 sticky top-0 z-50 border-b border-brand-background-grey">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <img src="/images/profile-logo.png" alt="EAxt logo" className="w-10 h-10 object-contain rounded-full" />
                  </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-textc-secondary hover:text-textc-primary transition">
                {l.label}
              </a>
            ))}
            <a href="/cv/Sanduni_Hansika_CV_SE.pdf" className="ml-2 px-4 py-2 bg-brand-green text-white rounded-md text-sm hover:bg-brand-green-dark transition">Download CV</a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="inline-flex items-center justify-center p-2 rounded-md text-textc-primary hover:bg-brand-background-moss">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-background-grey bg-brand-background-dark/90">
          <div className="px-6 pt-4 pb-6 space-y-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-textc-primary py-2">
                {l.label}
              </a>
            ))}
            <a href="/cv/Sanduni_Hansika_CV_SE.pdf" className="block mt-2 px-4 py-2 bg-brand-green text-white rounded-md text-sm">Download CV</a>
          </div>
        </div>
      )}
    </header>
  )
}
