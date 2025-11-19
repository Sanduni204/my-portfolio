'use client'
import React from 'react'
import { motion } from 'framer-motion'

const MSection: any = motion.section as any

export default function AnimateSection({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <MSection className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      {children}
    </MSection>
  )
}
