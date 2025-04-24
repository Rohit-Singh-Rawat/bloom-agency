'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CurrentOpenings = () => {
	return (
		<section className='py-20'>
			<div className='text-center mb-16'>
				<motion.h2
					className='text-3xl md:text-4xl font-medium mb-6'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<span className='text-blue-600 mr-2'>🔍</span> Current Openings
				</motion.h2>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex justify-center'
				>
					<Link
						href='https://forms.google.com/your-form-link'
						target='_blank'
						className='inline-block'
					>
						<motion.button
							className='px-6 py-3 bg-blue-700 text-white rounded-md font-medium transition-all'
							whileHover={{ scale: 1.02, backgroundColor: '#1d4ed8' }}
							whileTap={{ scale: 0.98 }}
							transition={{ duration: 0.2 }}
						>
							Apply Now
						</motion.button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default CurrentOpenings;
