'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { ShimmerButton } from '../magicui/shimmer-button';

const CTA = () => {
	return (
		<section className='py-12 sm:py-16 relative rounded-2xl sm:rounded-3xl border overflow-hidden my-6 sm:my-10 bg-black'>
			<div className='container mx-auto px-4 sm:px-6 relative z-10'>
				<div className='max-w-3xl mx-auto text-center'>
					<motion.h2
						className='text-2xl sm:text-3xl md:text-4xl font-medium mb-3 md:mb-4 text-white text-shadow-xs text-shadow-white'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Have an Idea in Mind? Let&apos;s Build It Together.
					</motion.h2>

					<motion.p
						className='text-base sm:text-lg text-gray-300 mb-4 sm:mb-6'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						From concept to launch, we&apos;ll partner with you to create something extraordinary.
					</motion.p>

					<motion.div
						className='flex justify-center'
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<Link href='/contact'>
							<ShimmerButton className='bg-gradient-to-r from-purple-500 to-indigo-500 flex gap-2 sm:gap-4 text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6'>
								Get Started{' '}
								<IconArrowRight
									size={16}
									className='sm:size-[18px]'
								/>
							</ShimmerButton>
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default CTA;
