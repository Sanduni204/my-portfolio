'use client'
import AnimateSection from './AnimateSection'
import { motion } from 'framer-motion'
const MDiv: any = motion.div as any

export default function About() {
	return (
		<AnimateSection>
			<section id="about" className="container mx-auto px-6 py-12">
				<MDiv initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
					<h2 className="text-2xl sm:text-3xl font-semibold text-textc-primary mb-4">About Me</h2>
					<p className="text-textc-secondary max-w-3xl leading-relaxed">
						I am an undergraduate pursuing a <strong>BSc (Hons) in Computing & Information Systems</strong> at Sabaragamuwa University of Sri Lanka. I enjoy creating meaningful digital experiences, exploring new technologies, and solving problems with clarity and creativity.
					</p>
				</MDiv>
			</section>
		</AnimateSection>
	)
}