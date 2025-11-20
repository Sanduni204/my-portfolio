'use client'
import AnimateSection from './AnimateSection'
import { motion } from 'framer-motion'
const MDiv: any = motion.div as any

export default function Education() {
  return (
    <AnimateSection>
      <section id="education" className="container mx-auto px-6 py-16">
        <MDiv
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-2xl font-semibold text-textc-primary mb-3">
            Educational Background
          </h2>

          <div className="bg-brand-green mb-10 rounded-full"></div>

          {/* Timeline container */}
          <div className="space-y-10 border-l border-brand-background-grey/40 pl-6">

            {/* University */}
            <div className="relative">

              <div className="flex items-start gap-4">
                <img
                  src="/images/uni-logo.png"
                  alt="University Logo"
                  className="w-14 h-14 object-contain rounded-md bg-white/10 p-2 border border-brand-background-grey"
                />
                <div>
                  <h3 className="text-xl font-semibold text-textc-primary">
                    BSc (Hons) in Computing & Information Systems
                  </h3>
                  <p className="text-textc-secondary">
                    Sabaragamuwa University of Sri Lanka 
                  </p>
                </div>
              </div>
            </div>

            {/* School */}
            <div className="relative">

              <div className="flex items-start gap-4">
                <img
                  src="/images/school-logo.png"
                  alt="School Logo"
                  className="w-14 h-14 object-contain rounded-md bg-white/10 p-2 border border-brand-background-grey"
                />
                <div>
                  <h3 className="text-xl font-semibold text-textc-primary">
                    G.C.E. Advanced Level – Physical Science Stream
                  </h3>
                  <p className="text-textc-secondary">
                    Gothami Balika Vidyalaya, Colombo </p>
                </div>
              </div>
            </div>

          </div>
        </MDiv>
      </section>
    </AnimateSection>
  )
}
