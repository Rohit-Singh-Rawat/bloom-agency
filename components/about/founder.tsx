'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, User } from 'lucide-react';

const Founder = () => {
	return (
		<section className='py-12 sm:py-16 md:py-24 px-4'>
			<div className='container mx-auto'>
				<motion.div
					className='text-center mb-10 md:mb-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-medium mb-3 md:mb-4'>
						Meet the Founder
					</h2>
				
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center'>
					{/* Founder Image - Column 1 (takes 2 column spaces on large screens) */}
					<motion.div
						className='lg:col-span-2 flex justify-center items-start mb-8 lg:mb-0'
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className='relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-100'>
							{/* Placeholder for founder image - replace with actual image */}
							<div className='w-full h-full bg-blue-50 flex items-center justify-center'>
								<User
									size={64}
									className='text-blue-400'
								/>
							</div>
						</div>
					</motion.div>

					{/* Founder Bio - Column 2 (takes 3 column spaces on large screens) */}
					<motion.div
						className='lg:col-span-3'
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						
						<p className='text-neutral-700 mb-3 md:mb-4 text-sm sm:text-base'>
							The founder of LinkVerse Labs — a next-gen development agency
							built to transform ideas into powerful digital products.
						</p>
						<p className='text-neutral-700 mb-3 md:mb-4 text-sm sm:text-base'>
							With hands-on experience delivering high-impact solutions for Fortune 500 companies
							and Shark Tank-backed startups, I&apos;ve seen what separates average products from
							truly game-changing ones. I&apos;ve learned how to build systems that don&apos;t just
							work — they scale, convert, and deliver results.
						</p>
						<p className='text-neutral-700 mb-4 md:mb-6 text-sm sm:text-base'>
							At LinkVerse Labs, I now focus on helping startups, entrepreneurs, and growth-stage
							businesses bring their visions to life. From the first brainstorming session to the
							final line of code, I&apos;m here to guide your product journey with insight,
							precision, and purpose.
						</p>
						<p className='text-neutral-700 mb-4 md:mb-6 font-medium text-sm sm:text-base'>
							If you&apos;re looking for a tech partner who understands your goals, thinks
							long-term, and is personally invested in your success — let&apos;s connect.
						</p>
						<div className='flex justify-center lg:justify-start'>
							<Link href='/contact'>
								<motion.button
									className='px-5 py-2.5 sm:px-6 sm:py-3 bg-black text-white rounded-md font-medium transition-all flex gap-2 items-center'
									whileHover={{ scale: 1.02,  }}
									whileTap={{ scale: 0.98 }}
									transition={{ duration: 0.2 }}
								>
									Get in Touch <ArrowRight className='animate-horizontal-bounce size-5'/>
								</motion.button>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Founder;
