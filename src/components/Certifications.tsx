'use client'
import AnimateSection from './AnimateSection'
import certs from '../data/certifications.json'
import { motion } from 'framer-motion'
const MDiv: any = motion.div as any

export default function Certifications() {
	const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }
	const item = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }

	return (
		<AnimateSection>
			<section id="certifications" className="container mx-auto px-6 py-12">
				<h2 className="text-2xl sm:text-3xl font-semibold text-textc-primary mb-6">Certifications</h2>

				<MDiv variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid sm:grid-cols-2 gap-6">
					{certs.map((c: any) => (
						<MDiv key={c.title} variants={item} className="bg-brand-background-grey p-5 rounded-lg border border-brand-background-grey shadow-sm">
							<h3 className="font-semibold text-textc-primary">{c.title}</h3>
							<p className="text-sm text-textc-secondary mt-1">{c.provider}</p>
						</MDiv>
					))}
				</MDiv>
			</section>
		</AnimateSection>
	)
}