'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ApplicationCTA = () => {
	return (
		<section className='py-20 mb-10'>
			<motion.div
				className='relative overflow-hidden rounded-lg border border-gray-300 bg-white p-10 shadow-sm'
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className='text-center'>
					<h2 className='text-3xl md:text-4xl font-medium mb-6'>Ready to Begin?</h2>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='mb-6'
					>
						<Link
							href='https://forms.google.com/your-application-form'
							target='_blank'
						>
							<button className='bg-gray-900 text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-gray-800 transition-colors'>
								👉 Apply Now – It&apos;s Free & Takes 2 Minutes
							</button>
						</Link>
					</motion.div>

					<p className='text-gray-600 max-w-lg mx-auto'>
						No commitment required. Start your tech journey today and see if it&apos;s the right path for
						you.
					</p>
				</div>
			</motion.div>
		</section>	
	);
};

export default ApplicationCTA;
