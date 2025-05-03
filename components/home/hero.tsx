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
						className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mb-4 text-blue-50 text-shadow-lg'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Turning Bold Ideas into Powerful Digital Products
					</motion.h1>

					<motion.p
						className='text-base sm:text-lg text-shadow-2xs md:text-2xl text-[#130e4f] mx-auto mb-6'
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
								className='w-full sm:w-auto px-6 py-3 bg-foreground text-background rounded-md font-medium hover:bg-foreground/80 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out'
							>
								Contact Us
							</Button>
						</motion.a>

						<motion.button
							className='w-full sm:w-auto px-6 py-3 border border-blue-900  text-blue-900 rounded-md font-medium bg-blue-100 '
							whileHover={{ scale: 1.05 }}
							transition={{ type: 'spring', stiffness: 400 }}
						>
							Explore Services
						</motion.button>
					</motion.div>

					
				</div>
			</div>
		</section>
	);
};

export default Hero;
