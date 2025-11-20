import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import Certifications from '../components/Certifications'
import Volunteering from '../components/Volunteering'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Education from '../components/Education'

export default function Page(){
  return (
    <>
        
        <main className="container mx-auto px-6 space-y-20 py-16">

        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
