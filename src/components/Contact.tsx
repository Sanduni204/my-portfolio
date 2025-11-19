'use client'
import AnimateSection from './AnimateSection'
import { motion } from 'framer-motion'
const MDiv: any = motion.div as any
const MForm: any = motion.form as any

export default function Contact() {
	const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }
	const item = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }

	return (
		<AnimateSection>
			<section id="contact" className="container mx-auto px-6 py-12">
				<h2 className="text-2xl sm:text-3xl font-semibold text-textc-primary mb-6">Contact</h2>

				<MDiv variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid md:grid-cols-2 gap-8">
					<MDiv variants={item} className="space-y-3 text-textc-secondary">
						<p>
							Email: <a href="mailto:sandunihansika001@gmail.com" className="text-brand-green">sandunihansika001@gmail.com</a>
						</p>
						<p>
							LinkedIn: <a href="https://www.linkedin.com/in/sanduni-hansika-b33575388" target="_blank" rel="noreferrer" className="text-brand-green">linkedin.com/in/sanduni-hansika-b33575388</a>
						</p>
						<p>
							GitHub: <a href="https://github.com/Sanduni204" target="_blank" rel="noreferrer" className="text-brand-green">github.com/Sanduni204</a>
						</p>
					</MDiv>

					<MForm variants={item} action={`mailto:sandunihansika001@gmail.com`} className="bg-brand-background-grey p-6 rounded-lg border border-brand-background-grey shadow-sm">
						<label className="block mb-3">
							<div className="text-sm mb-1 text-textc-secondary">Name</div>
							<input name="name" className="w-full border border-brand-background-grey px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green" />
						</label>

						<label className="block mb-3">
							<div className="text-sm mb-1 text-textc-secondary">Email</div>
							<input name="email" className="w-full border border-brand-background-grey px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green" />
						</label>

						<label className="block mb-3">
							<div className="text-sm mb-1 text-textc-secondary">Message</div>
							<textarea name="message" className="w-full border border-brand-background-grey px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green" />
						</label>

						<button type="submit" className="mt-2 px-4 py-2 bg-brand-green text-white rounded-md hover:bg-brand-green-dark">Send</button>
					</MForm>
				</MDiv>
			</section>
		</AnimateSection>
	)
}