'use client'
import React, { useEffect, useState } from 'react'
import AnimateSection from './AnimateSection'
import { motion } from 'framer-motion'
import Image from 'next/image'

const MDiv: any = motion.div as any

export default function Achievements() {
	const images: string[] = [
		'/images/achievements/finals.jpg',
		'/images/achievements/group.jpg',
		'/images/achievements/presents.jpg',
		'/images/achievements/selected.jpg',
	]

	const [index, setIndex] = useState<number>(0)

	useEffect(() => {
		const id = setInterval(() => {
			setIndex((i) => (i + 1) % images.length)
		}, 3500)
		return () => clearInterval(id)
	}, [])

	function prev() {
		setIndex((i) => (i - 1 + images.length) % images.length)
	}

	function next() {
		setIndex((i) => (i + 1) % images.length)
	}

	return (
		<AnimateSection>
			<section id="achievements" className="container mx-auto px-6 py-12">
				<MDiv
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-2xl sm:text-3xl font-semibold text-textc-primary mb-6">Achievements</h2>

					<div className="max-w-md mx-auto">
						<div className="relative w-full h-48 sm:h-64 rounded-lg overflow-hidden border border-brand-background-grey">
							<Image
								src={images[index]}
								alt={`Achievement ${index + 1}`}
								fill
								className="object-cover"
								sizes="(max-width: 640px) 100vw, 640px"
							/>

							<button
								aria-label="Previous"
								onClick={prev}
								className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1.5 hover:bg-black/55"
							>
								‹
							</button>

							<button
								aria-label="Next"
								onClick={next}
								className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1.5 hover:bg-black/55"
							>
								›
							</button>
						</div>

						<div className="flex items-center justify-center gap-2 mt-3">
							{images.map((_, i) => (
								<button
									key={i}
									onClick={() => setIndex(i)}
									aria-label={`Go to slide ${i + 1}`}
									className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-textc-primary' : 'bg-gray-300'}`}
								/>
							))}
						</div>

						<div className="mt-6 bg-brand-background-grey p-4 rounded-lg border border-brand-background-grey shadow-sm text-center">
							<div className="text-sm text-gray-500">2024 December</div>
							<div className="text-lg font-semibold text-textc-primary">Hack Like a girl</div>
							<div className="text-sm text-textc-primary">Finalists</div>
							<div className="text-xs text-gray-500">organized by SLASSCOM</div>
						</div>
					</div>
				</MDiv>
			</section>
		</AnimateSection>
	)
}