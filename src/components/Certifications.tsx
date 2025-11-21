'use client'
import AnimateSection from './AnimateSection'
import certs from '../data/certifications.json'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
const MDiv: any = motion.div as any

export default function Certifications() {
	const [active, setActive] = useState<string | null>(null)
	const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }
	const item = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }

	function toggle(slug: string) {
		setActive((s) => (s === slug ? null : slug))
	}

	// Group certificates by category
	const groups: Record<string, any[]> = (certs as any).reduce((acc: any, cur: any) => {
		const key = cur.category || 'Other'
		if (!acc[key]) acc[key] = []
		acc[key].push(cur)
		return acc
	}, {})

	// track which groups are open (visible)
	const [openGroups, setOpenGroups] = useState<string[]>([])

	function toggleGroup(category: string) {
		setOpenGroups((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]))
	}

	return (
		<AnimateSection>
			<section id="certifications" className="container mx-auto px-6 py-12">
				<h2 className="text-2xl sm:text-3xl font-semibold text-textc-primary mb-6">Certifications</h2>

				<div className="space-y-8">
					{Object.entries(groups).map(([category, items]) => (
						<div key={category} className="">
							<div className="max-w-4xl mx-auto">
								<button
									onClick={() => toggleGroup(category)}
									className="cert-category-heading w-full text-left py-4 px-5 mb-4 rounded-xl h-14 flex items-center font-medium"
								>
									{category}
								</button>

								{openGroups.includes(category) && (
									<div className="space-y-3">
										{items.map((c: any) => (
										<MDiv key={c.slug || c.title} variants={item} className="">
											<div
													role="button"
													onClick={() => toggle(c.slug || c.title)}
													className="flex items-center justify-between cursor-pointer group"
												>
													<div className="flex items-center gap-3 min-w-0 flex-1">
													<div className="w-1.5 h-10 rounded-l-md bg-gradient-to-b from-emerald-400/80 to-emerald-600/50 hidden sm:block" />
													<div className="flex items-center gap-3 min-w-0">
														<div className="text-sm font-medium text-textc-primary truncate">{c.title}</div>
														</div>
													</div>

													<div className="ml-4 text-sm text-textc-secondary whitespace-nowrap flex items-center gap-2">
													<span className="hidden sm:inline-block text-xs px-2 py-0.5 rounded-md bg-white/3 backdrop-blur-sm">{c.provider}</span>
													<span className="text-xs text-textc-secondary">›</span>
												</div>
												</div>

												{active === (c.slug || c.title) && (
													<div className="mt-3 px-3 py-2 rounded-md bg-white/3 backdrop-blur-sm border border-white/6 shadow-sm">
														<div className="flex items-center justify-between">
															<div>
																<div className="font-medium text-textc-primary">{c.title}</div>
																<div className="text-sm text-textc-secondary mt-1">Provider: {c.provider}</div>
																</div>
															<div className="ml-4">
																{c.url ? (
																	<a href={c.url} target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-300 underline">View Certificate</a>
																	) : (
																	<Link href={`/certifications/${c.slug}`} className="text-sm text-emerald-300 underline">Open Details</Link>
																	)}
															</div>
														</div>
													</div>
												)}
											</MDiv>
										))}
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</section>
		</AnimateSection>
	)
}