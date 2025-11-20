'use client'
import AnimateSection from './AnimateSection'
import projects from '../data/projects.json'
import { motion } from 'framer-motion'

export default function Projects(){
	const MDiv: any = motion.div as unknown as any

	const container = {
		hidden: { },
		visible: { transition: { staggerChildren: 0.08 } }
	}

	const item = {
		hidden: { opacity: 0, y: 12 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
	}

	return (
		<AnimateSection>
			<section id="projects" className="container mx-auto px-6 py-12">
				<h2 className="text-2xl sm:text-3xl font-semibold text-textc-primary mb-6">Projects</h2>
				<MDiv variants={container} initial="hidden" whileInView="visible" viewport={{ once:true, amount: 0.15 }} className="grid md:grid-cols-2 gap-6">
					{projects.map((p:any) => (
						<MDiv key={p.title} variants={item} whileHover={{scale:1.03}} transition={{type:'spring',stiffness:200}} className="bg-brand-background-grey rounded-xl p-6 border border-brand-background-grey shadow-lg hover:shadow-xl transition">
							<img src={p.image||'/images/profile-logo.png'} alt={p.title} className="w-full h-44 object-cover rounded-xl mb-4"/>
							<h3 className="font-semibold text-textc-primary text-lg">{p.title}</h3>
							<p className="text-sm text-textc-secondary mt-2">{p.description}</p>
							<div className="mt-3 flex flex-wrap gap-2">
								{p.stack.map((s:any) => (
									<span key={s} className="text-xs px-2 py-1 bg-pastel-soft text-textc-muted rounded">{s}</span>
								))}
							</div>
							<div className="mt-4 flex gap-4 items-center">
								{p.github && (
									<a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center">
										<img src="/images/Icons/github.svg" alt={`${p.title} GitHub`} className="w-5 h-5" />
									</a>
								)}
								{p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="text-brand-green hover:underline">Live Demo</a>}
							</div>
						</MDiv>
					))}
				</MDiv>
			</section>
		</AnimateSection>
	)
}