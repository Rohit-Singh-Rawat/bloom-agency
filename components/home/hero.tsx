'use client';

import { motion } from 'framer-motion';
import ParticlesComponent from './particles';
import { Button } from '../ui/neon-button';
const Hero = () => {
	return (
		<section className='min-h-screen flex items-center justify-center relative w-full py-16 sm:py-0'>
			{' '}
			{/* <Squares
				className='absolute bg-transparent'
				direction='diagonal'
				speed={0.5}
				backgroundColor='#FFFDFA'
				maskColor='#FFFDFA'
				squareSize={40}
				borderColor='#ededed'
				hoverFillColor='#e6f0ff'
			/> */}
			<ParticlesComponent />
			<div className='container px-4 sm:px-6 z-50 w-full'>
				<div className='mx-auto text-center max-w-4xl'>
					<motion.h1
						className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 text-neutral-100 text-shadow-lg'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Turning Bold Ideas into Powerful Digital Products
					</motion.h1>

					<motion.p
						className='text-base sm:text-lg md:text-xl text-neutral-600 mx-auto mb-6'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						We help startups, creators, and businesses bring their ideas to life with cutting-edge
						digital solutions that scale and perform.{' '}
					</motion.p>

					<motion.div
						className='flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center'
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<motion.a href='/contact'>
							<Button
								variant='default'
								className='w-full sm:w-auto px-6 py-3 bg-foreground text-background rounded-md font-medium hover:bg-foreground/80 transition-all duration-200'
							>
								Contact Us
							</Button>
						</motion.a>

						<motion.button
							className='w-full sm:w-auto px-6 py-3 border border-foreground rounded-md font-medium bg-background'
							whileHover={{ scale: 1.05 }}
							transition={{ type: 'spring', stiffness: 400 }}
						>
							Explore Services
						</motion.button>
					</motion.div>

					<motion.div
						className='mt-16 sm:mt-24 flex items-center justify-center'
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.4 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						<div className='w-10 sm:w-16 h-[1px] bg-neutral-400 mr-4'></div>
						<p className='text-xs sm:text-sm uppercase tracking-widest text-neutral-500'>
							Scroll to discover
						</p>
						<div className='w-10 sm:w-16 h-[1px] bg-neutral-400 ml-4'></div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
