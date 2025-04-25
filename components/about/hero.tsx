'use client';

import { motion } from 'framer-motion';
import { Squares } from '../ui/squares-background';

const AboutHero = () => {
	return (
		<section className='min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center relative py-16 sm:py-0'>
			<Squares
				className='absolute bg-transparent'
				direction='diagonal'
				speed={0.5}
				backgroundColor='#fafafa'
				maskColor='#fafafa'
				squareSize={40}
				borderColor='#ededed'
				hoverFillColor='#e6f0ff'
			/>
			<div className='container px-4 sm:px-6 z-50 w-full'>
				<div className='mx-auto text-center max-w-4xl'>
					<motion.span
						className='text-blue-600 font-medium text-base sm:text-lg mb-2 inline-block'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6 }}
					>
						Our Story
					</motion.span>

					<motion.h1
						className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 sm:mb-6'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Building Digital Excellence
					</motion.h1>

					<motion.p
						className='text-base sm:text-lg md:text-xl text-neutral-600 mx-auto mb-6'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						We&apos;re a team of passionate developers, designers, and strategists dedicated to
						transforming ideas into powerful digital products that make a real impact.
					</motion.p>
				</div>
			</div>
		</section>
	);
};

export default AboutHero;
