'use client'
import AnimateSection from './AnimateSection'
import skills from '../data/skills.json'
import { motion } from 'framer-motion'
const MDiv: any = motion.div as any

export default function Skills() {
	const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }
	const item = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }

	return (
		<AnimateSection>
			<section id="skills" className="container mx-auto px-6 py-12">
				<h2 className="text-2xl sm:text-3xl font-semibold text-textc-primary mb-6">Skills</h2>

				<MDiv variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{Object.entries(skills).map(([cat, items]) => (
						<MDiv key={cat} variants={item} className="p-4 bg-brand-background-grey rounded-lg border border-brand-background-grey shadow-sm">
							<h3 className="font-semibold mb-3 text-textc-primary">{cat}</h3>
							<ul className="text-sm space-y-2">
								{items.map((it: any) => (
									<li key={it} className="text-textc-secondary">{it}</li>
								))}
							</ul>
						</MDiv>
					))}
					</MDiv>
			</section>
		</AnimateSection>
	)
}