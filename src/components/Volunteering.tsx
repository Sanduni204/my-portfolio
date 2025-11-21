'use client'
import AnimateSection from './AnimateSection'
import { motion } from 'framer-motion'
const MDiv: any = motion.div as any
const MLi: any = motion.li as any

export default function Volunteering() {
	const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }
	const item = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }

	const volunteeringItems = [
		{
			title: 'Committee Member - IEEE Student Branch',
			href: 'https://www.linkedin.com/posts/sanduni-hansika-b33575388_ieee-ieeesusl-susl-activity-7380334147581558784-5sk9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF962xcBqehMyTPbSLt0TDr-7bPF3erukMM'
		},
		{
			title: 'Volunteer - PerlHack 3.0 Support Team',
			href: 'https://www.linkedin.com/posts/sanduni-hansika-b33575388_ieee-wie-ieeewie-activity-7380332907241873409-W22E?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF962xcBqehMyTPbSLt0TDr-7bPF3erukMM'
		},
		{
			title: 'Volunteer Coordinator - Computing Undergraduate Research Symposium',
			href: 'https://www.linkedin.com/posts/sanduni-hansika-b33575388_comurs2025-facultyofcomputing-susl-activity-7380329961565622272-ZQwg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF962xcBqehMyTPbSLt0TDr-7bPF3erukMM'
		}
	]

	return (
		<AnimateSection>
			<section id="volunteering" className="container mx-auto px-6 py-12">
				<MDiv variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
					<h2 className="text-2xl sm:text-3xl font-semibold text-textc-primary mb-8">Volunteering</h2>

					{/* Timeline container */}
					<div className="relative pl-8">
						{/* vertical gradient line */}
						<div className="absolute left-4 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-emerald-800 via-emerald-600 to-emerald-400 opacity-95" />

						<ul className="space-y-8">
							{volunteeringItems.map((it, idx) => (
								<MLi key={idx} variants={item} className="relative flex items-start gap-4 p-4 pr-6 rounded-2xl bg-white/6 backdrop-blur-sm shadow-sm transform transition hover:-translate-y-1 hover:shadow-lg">
									<a
										href={it.href}
										target="_blank"
										rel="noopener noreferrer"
										className="block w-full text-sm text-textc-primary hover:underline"
										aria-label={it.title}
									>
										{it.title}
									</a>
								</MLi>
							))}
						</ul>
					</div>
				</MDiv>
			</section>
		</AnimateSection>
	)
}