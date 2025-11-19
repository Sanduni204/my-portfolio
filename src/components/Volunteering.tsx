'use client'
import AnimateSection from './AnimateSection'
import { motion } from 'framer-motion'
const MDiv: any = motion.div as any
const MLi: any = motion.li as any

export default function Volunteering() {
	const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }
	const item = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }

	return (
		<AnimateSection>
			<section id="volunteering" className="container mx-auto px-6 py-12">
				<MDiv variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
					<h2 className="text-2xl sm:text-3xl font-semibold text-textc-primary mb-6">Volunteering</h2>

					<ul className="space-y-3">
						<MLi variants={item} className="bg-brand-background-grey p-4 rounded-lg border border-brand-background-grey shadow-sm">Committee Member — IEEE Student Branch, Sabaragamuwa University (2025/2026)</MLi>
						<MLi variants={item} className="bg-brand-background-grey p-4 rounded-lg border border-brand-background-grey shadow-sm">Volunteer — PerlHack 3.0 Support Team, Sabaragamuwa University</MLi>
						<MLi variants={item} className="bg-brand-background-grey p-4 rounded-lg border border-brand-background-grey shadow-sm">Volunteer Coordinator — Computing Undergraduate Research Symposium</MLi>
					</ul>
				</MDiv>
			</section>
		</AnimateSection>
	)
}