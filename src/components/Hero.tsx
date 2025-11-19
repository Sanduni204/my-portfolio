'use client'
import { motion } from 'framer-motion'
export default function Hero(){
  return (
    <header className="bg-gradient-to-br from-blue-600 to-indigo-500 text-white py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div className="flex-1" initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{duration:0.6}}>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold">Software Engineer | Project Manager | UI/UX Engineer</h1>
            <p className="mt-4 text-lg">A driven and adaptable tech enthusiast committed to delivering impactful digital solutions.</p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-5 py-3 bg-white text-blue-600 rounded-lg">View Projects</a>
              <a href="/cv/Sanduni_Hansika_CV_SE.pdf" className="px-5 py-3 border border-white rounded-lg">Download CV</a>
            </div>
          </motion.div>
          <motion.div className="w-48 h-48 bg-white rounded-full flex items-center justify-center" initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:0.4}}>
            <img src="/images/profile.svg" alt="profile" className="w-40 h-40 rounded-full"/>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
