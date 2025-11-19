'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const MDiv: any = motion.div as any
const MSpan: any = motion.span as any

export default function Hero() {
  const roles = [
    'Full-Stack Developer',
    'UI/UX Engineer',
    'Project Manager'
  ]

  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <header className="hero-grid bg-gradient-to-br from-brand-background-darkest to-brand-background-dark text-textc-primary pt-20 pb-8 md:pt-44 md:pb-14">

      <div className="container mx-auto px-6">

        {/* ⭐ UPDATED GRID WIDTH HERE */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-10 items-center">

          {/* LEFT SIDE CONTENT */}
          <MDiv
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >

            <p className="text-sm text-textc-secondary">Hey I'm</p>

            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-brand-green leading-tight">
              Sanduni Hansika
            </h1>

            <div className="inline-flex relative items-center px-4 py-2 rounded-full bg-pastel-soft text-brand-background-dark font-medium h-10">
              <AnimatePresence mode="wait">
                <MSpan
                  key={String(roleIndex)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="whitespace-nowrap"
                >
                  {roles[roleIndex]}
                </MSpan>
              </AnimatePresence>
            </div>

            <p className="text-textc-secondary max-w-3xl leading-relaxed">
              A driven tech enthusiast focused on creating well-crafted, intuitive digital experiences.
              I combine analytical thinking, thoughtful design, and reliable engineering to deliver
              solutions that are both effective and user-centered.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="/cv/Sanduni_Hansika_CV_SE.pdf"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-brand-green text-white font-medium shadow-sm hover:bg-brand-green-dark transition"
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded-lg border border-brand-background-grey text-textc-primary hover:bg-brand-background-moss transition"
              >
                Work with me
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              {[
                { href: 'http://linkedin.com/in/sanduni-hansika-b33575388', label: 'LinkedIn', svg: linkedinSVG },
                { href: 'https://github.com/Sanduni204', label: 'GitHub', svg: githubSVG }
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="p-2 rounded-full bg-brand-background-grey/80 card-soft text-textc-primary hover:text-brand-green transition"
                >
                  <span
                    className="w-6 h-6 inline-block"
                    dangerouslySetInnerHTML={{ __html: s.svg }}
                  />
                </a>
              ))}
            </div>

          </MDiv>

          {/* RIGHT IMAGE CARD */}
          <MDiv
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative flex items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md -mt-20 ">
            <div className="rounded-full p-1 bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light shadow-[0_0_30px_rgba(127,156,133,0.45)]">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden bg-neutral-900 border-2 border-brand-background-grey">
                <img src="/images/profile.png" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </MDiv>


        </div>
      </div>
    </header>
  )
}

const githubSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.53-3.88-1.53-.53-1.35-1.29-1.71-1.29-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.39.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.44.11-3 0 0 .97-.31 3.18 1.17.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.48 3.18-1.17 3.18-1.17.62 1.57.23 2.71.11 3 .73.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.4-5.29 5.69.42.36.8 1.08.8 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.41 24 17.09 24 12c0-6.35-5.15-11.5-11.99-11.5z"/></svg>`

const linkedinSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48s.88 1.98 1.98 1.98 1.98-.88 1.98-1.98S6.08 3.5 4.98 3.5zM3.5 8.9h3v11.6h-3V8.9zM9.5 8.9h2.88v1.58h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v6.96h-3v-6.16c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.26v6.28h-3V8.9z"/></svg>`
