'use client'
import { motion } from 'framer-motion'
const MDiv: any = motion.div as any
const MSection: any = motion.section as any

const githubSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.53-3.88-1.53-.53-1.35-1.29-1.71-1.29-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.39.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.44.11-3 0 0 .97-.31 3.18 1.17.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.48 3.18-1.17 3.18-1.17.62 1.57.23 2.71.11 3 .73.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.4-5.29 5.69.42.36.8 1.08.8 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.41 24 17.09 24 12c0-6.35-5.15-11.5-11.99-11.5z"/></svg>`

const linkedinSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48s.88 1.98 1.98 1.98 1.98-.88 1.98-1.98S6.08 3.5 4.98 3.5zM3.5 8.9h3v11.6h-3V8.9zM9.5 8.9h2.88v1.58h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v6.96h-3v-6.16c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.26v6.28h-3V8.9z"/></svg>`
export default function Contact() {
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.06, when: 'beforeChildren', duration: 0.6 }
    }
  }

  const item = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }

  return (
    <MSection id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={container} className="container mx-auto px-6 py-16">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-textc-primary mb-10">Contact</h2>

        <MDiv
          variants={container}
          className="grid md:grid-cols-2 gap-12 p-8 rounded-2xl bg-brand-background-grey/20 border border-brand-background-grey/40 backdrop-blur"
        >

          {/* LEFT COLUMN — DETAILS */}
          <MDiv variants={item} className="space-y-8">

            <div>
              <h4 className="sr-only">Email</h4>
              <a
                href="mailto:sandunihansika001@gmail.com"
                className="block mt-1 text-lg text-textc-primary hover:text-brand-green transition"
              >
                <span aria-hidden="true" className="mr-3 inline-block w-5 h-5 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                sandunihansika001@gmail.com
              </a>
            </div>

            <div>
              <h4 className="sr-only">Address</h4>
              <p className="mt-1 text-lg text-textc-primary"><span aria-hidden="true" className="mr-3 inline-block w-5 h-5 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              </span>Colombo, Sri Lanka</p>
            </div>

            <div>
              <h4 className="sr-only">Phone</h4>
              <a
                href="tel:+94766523585"
                className="block mt-1 text-lg text-textc-primary hover:text-brand-green transition"
              >
                <span aria-hidden="true" className="mr-3 inline-block w-5 h-5 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.16.46 2.43.71 3.76.71a1 1 0 011 1V20a1 1 0 01-1 1C9.28 21 3 14.72 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.33.25 2.6.71 3.76a1 1 0 01-.24 1.05l-2.2 2.2z" />
                  </svg>
                </span>
                +94 766 523 585
              </a>
            </div>
          </MDiv>

          {/* RIGHT COLUMN — SOCIAL */}
          <MDiv variants={item} className="flex flex-col md:items-end space-y-6">


            <div className="flex items-center gap-3 mt-5">
              {[
                { href: 'http://linkedin.com/in/sanduni-hansika-b33575388', label: 'LinkedIn', svg: linkedinSVG },
                { href: 'https://github.com/Sanduni204', label: 'GitHub', svg: githubSVG }
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="p-2 rounded-full bg-brand-background-grey/80 card-soft text-textc-primary hover:text-brand-green transition border border-brand-background-grey/40"
                >
                  <span
                    className="w-6 h-6 inline-block"
                    dangerouslySetInnerHTML={{ __html: s.svg }}
                  />
                </a>
              ))}
            </div>
          </MDiv>

        </MDiv>
    </MSection>
  )
}
