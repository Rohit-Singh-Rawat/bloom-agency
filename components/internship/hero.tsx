'use client';

import { motion } from 'framer-motion';
import { Squares } from '../ui/squares-background';
import Image from 'next/image';

const InternshipHero = () => {
	return (
		<section className='min-h-screen flex items-center justify-center relative overflow-hidden max-md:pt-20'>
			<Squares
				className='absolute bg-transparent'
				direction='diagonal'
				speed={0.5}
				backgroundColor='#F2FFFF'
				maskColor='#F2FFFF'
				squareSize={40}
				borderColor='#ededed'
				hoverFillColor='#e6f0ff'
			/>
			<div className='container z-10 px-4 mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
					<div className='text-left space-y-6'>
					
						<motion.h1
							className='text-5xl md:text-6xl font-medium tracking-tight'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							Internships at LinkVerse Labs
						</motion.h1>

						<motion.p
							className='text-2xl font-medium text-neutral-700'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							Kickstart Your Tech Career with Real-World Experience
						</motion.p>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className='max-w-xl'
						>
							<p className='text-lg text-neutral-600'>
								At LinkVerse Labs, we believe in empowering the next generation of developers,
								designers, and tech professionals. Our internship programs are designed to help you
								build skills, gain confidence, and understand what the market truly demands.
							</p>
						</motion.div>
						
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.5 }}
						>
							<button className='bg-primary text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary/90 transition-colors'>
								Apply Now
							</button>
						</motion.div>
					</div>
					
					<motion.div
						className='relative h-[500px] rounded-lg overflow-hidden'
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						<Image
							src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&h=800&auto=format&fit=crop"
							alt="Interns working at LinkVerse Labs"
							fill
							className="object-cover rounded-lg shadow-xl"
							priority
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default InternshipHero;
