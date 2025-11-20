'use client'
import AnimateSection from './AnimateSection'
import { motion } from 'framer-motion'
const MDiv: any = motion.div as any

export default function About() {
  return (
    <AnimateSection>
      <section id="about" className="container mx-auto px-6 py-16">
        <MDiv
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-textc-primary mb-3">
            About Me
          </h2>

          {/* Accent Bar */}
		  <div className=" bg-brand-green mb-10 rounded-full"></div>
          <p className="text-textc-secondary max-w-4xl leading-relaxed text-lg">
            I am a passionate Software Engineering undergraduate who enjoys building meaningful
            digital solutions that solve real-world problems. I thrive at the intersection of
            <strong> full-stack development, UI/UX engineering, and project leadership</strong>,
            combining analytical thinking with creativity to deliver user-centered and scalable
            applications.
          </p>
        </MDiv>
      </section>
    </AnimateSection>
  )
}
