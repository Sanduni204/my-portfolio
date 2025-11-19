'use client'
import AnimateSection from './AnimateSection'
import { motion } from 'framer-motion'
const MDiv: any = motion.div as any

export default function Achievements() {
	return (
		<AnimateSection>
			<section id="achievements" className="container mx-auto px-6 py-12">
					<MDiv initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
						<h2 className="text-2xl sm:text-3xl font-semibold text-textc-primary mb-6">Achievements</h2>

						<ul className="space-y-4">
							<li className="bg-brand-background-grey p-4 rounded-lg border border-brand-background-grey shadow-sm">
								<div className="text-textc-primary">Finalists (Group) — <strong>Hack Like A Girl 2.0</strong> (SLASSCOM)</div>
							</li>
						</ul>
					</MDiv>
			</section>
		</AnimateSection>
	)
}