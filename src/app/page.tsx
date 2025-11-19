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

export default function Page(){
  return (
    <>
      <Hero />
      <main className="container py-12 space-y-16">
        <About />
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
