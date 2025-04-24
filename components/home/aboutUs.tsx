'use client';

import { motion } from 'framer-motion';

const AboutUs = () => {
	const features = [
		{
			icon: '🚀',
			title: 'Startup-Friendly',
			description: 'Flexible pricing and rapid development cycles',
		},
		{
			icon: '🧩',
			title: 'Custom-Built',
			description: 'No cookie-cutter templates — everything is made to fit your brand',
		},
		{
			icon: '🔒',
			title: 'Reliable & Scalable Code',
			description: 'Built with the future in mind',
		},
		{
			icon: '🧑‍💻',
			title: 'Tech-First Team',
			description: 'We are developers, innovators, and builders at heart',
		},
		{
			icon: '📞',
			title: 'Ongoing Support',
			description: "We don't just deliver — we maintain, improve, and evolve your product",
		},
		{
			icon: '🌐',
			title: 'Global Perspective',
			description: 'Solutions designed with international standards and accessibility in mind',
		},
	];

	return (
		<section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 relative overflow-hidden'>
			<div className='absolute inset-0 flex items-center justify-center pointer-events-none translate-y-13 opacity-50 sm:opacity-100'>
				<motion.div
					className='bg-transparent w-40 h-40 sm:w-80 sm:h-80 md:w-120 md:h-120 flex items-center justify-center rounded-full border border-black/20 border-dashed'
					animate={{ rotate: 360 }}
					transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
				>
					<motion.div
						className='bg-transparent w-32 h-32 sm:w-64 sm:h-64 md:w-100 md:h-100 flex items-center justify-center rounded-full border border-black/20 border-dashed'
						animate={{ rotate: 360 }}
						transition={{ duration: 40, repeat: Infinity, ease: 'linear', direction: 'reverse' }}
					>
						<motion.div
							className='bg-transparent w-24 h-24 sm:w-52 sm:h-52 md:w-80 md:h-80 rounded-full border border-black/20 border-dashed flex items-center justify-center'
							animate={{ rotate: 360 }}
							transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
						>
							<motion.div
								className='bg-transparent w-16 h-16 sm:w-40 sm:h-40 md:w-60 md:h-60 flex items-center justify-center rounded-full border border-black/20 border-dashed'
								animate={{ rotate: 360 }}
								transition={{
									duration: 20,
									repeat: Infinity,
									ease: 'linear',
									direction: 'reverse',
								}}
							>
								<motion.div
									className='bg-transparent w-12 h-12 sm:w-28 sm:h-28 md:w-40 md:h-40 flex items-center justify-center rounded-full border border-black/20 border-dashed'
									animate={{ rotate: 360 }}
									transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
								>
									<motion.div
										className='bg-transparent w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border border-black/20 border-dashed'
										animate={{ rotate: 360 }}
										transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
									></motion.div>
								</motion.div>
							</motion.div>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>

			<div className='container mx-auto px-4 relative z-10'>
				<motion.div
					className='text-center mb-10 sm:mb-12 md:mb-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-medium mb-3 md:mb-4'>
						Why Choose LinkVerse Labs?
					</h2>
				</motion.div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-neutral-100 hover:border-blue-200 transition-all duration-300 group hover:-translate-y-1 active:scale-[0.98]'
							data-aos='fade-up'
							data-aos-delay={100 * (index + 1)}
						>
							<div className='text-xl sm:text-2xl mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-4'>
								{feature.icon}
							</div>
							<h3 className='text-lg sm:text-xl font-medium mb-1 sm:mb-2'>{feature.title}</h3>
							<p className='text-sm sm:text-base text-neutral-600'>{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
