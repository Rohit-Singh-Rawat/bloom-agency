'use client';

import { motion } from 'framer-motion';
import { Squares } from '../ui/squares-background';

const CareersHero = () => {
	return (
		<section className='min-h-[70vh] flex items-center justify-center relative'>
			<Squares
				className='absolute bg-transparent'
				direction='diagonal'
				speed={0.5}
				backgroundColor='#FFFDFA'
				maskColor='#FFFDFA'
				squareSize={40}
				borderColor='#ededed'
				hoverFillColor='#e6f0ff'
			/>
			<div className='container px-4 z-50 w-full'>
				<div className='mx-auto text-center max-w-4xl'>
					<motion.span
						className='text-blue-600 font-medium text-lg mb-2 inline-block'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6 }}
					>
						🚀 Careers at LinkVerse Labs
					</motion.span>

					<motion.h1
						className='text-5xl md:text-6xl font-medium mb-6'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Build the Future With Us
					</motion.h1>

					<motion.p
						className='text-lg md:text-xl text-neutral-600 mx-auto mb-6'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						We&apos;re a team of builders, thinkers, and problem-solvers working on cutting-edge web,
						mobile, IoT, and AI products. If you&apos;re passionate about creating real impact through
						code and design — let&apos;s talk.
					</motion.p>
				</div>
			</div>
		</section>
	);
};

export default CareersHero;
