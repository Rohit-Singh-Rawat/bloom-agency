'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { GridPattern } from '../magicui/grid-pattern';
const services = [
	{
		title: 'Web Development',
		description:
			'Custom websites and web applications built with modern technologies. We create responsive solutions tailored to your business needs and brand identity.',
		icon: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=60',
		link: '/services/web-development',
	},
	{
		title: 'App Development',
		description:
			'Native and cross-platform mobile apps for iOS and Android. We deliver intuitive mobile experiences that engage users and drive results for your business.',
		icon: 'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=800&auto=format&fit=crop&q=60',
		link: '/services/app-development',
	},
	{
		title: 'IoT Solutions',
		description:
			'Connected device ecosystems that bridge the physical and digital worlds. We build smart solutions that automate processes and provide valuable data insights.',
		icon: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&auto=format&fit=crop&q=60',
		link: '/services/iot-solutions',
	},
	{
		title: 'AI Integration',
		description:
			'Seamless incorporation of artificial intelligence into your existing systems. We help businesses leverage AI to enhance operations and create smarter workflows.',
		icon: 'https://images.unsplash.com/photo-1677442135136-760c813028c0?w=800&auto=format&fit=crop&q=60',
		link: '/services/ai-integration',
	},
	{
		title: 'AI Development',
		description:
			'Custom AI solutions built from the ground up. We develop machine learning models and AI applications that solve complex problems and drive innovation.',
		icon: 'https://images.unsplash.com/photo-1678347123725-2d0d31bc06bd?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		link: '/services/ai-development',
	},
	{
		title: 'Maintenance & Support',
		description:
			'Ongoing technical support and system maintenance to ensure your digital products remain secure and performant. We provide reliable support for long-term success.',
		icon: 'https://images.unsplash.com/photo-1554306274-f23873d9a26c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		link: '/services/maintenance-support',
	},
];

const Services = () => {
	return (
		<section className='py-12 sm:py-16 md:py-20 bg-background'>
			<div className='container mx-auto px-4 sm:px-6'>
				<motion.div
					className='text-center mb-10 sm:mb-12 md:mb-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-medium mb-3 md:mb-4'>
						Our Services
					</h2>
					<p className='text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto'>
						End-to-end services designed to launch, grow, and future-proof your business.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
					{services.map((service, index) => (
						<div
							key={index}
							className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-64 sm:h-72 md:h-80 group border'
						>
							<div className='relative w-full h-[200%] group-hover:-translate-y-1/2 transition-all duration-700'>
								<div className='w-full h-1/2 flex items-center justify-center relative'>
									<Image
										src={service.icon}
										alt={service.title}
										fill
										className='object-cover'
									/>
									<div className='absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center'>
										<p className='text-white text-xl sm:text-2xl font-medium px-4 text-center'>
											{service.title}
										</p>
									</div>
								</div>{' '}
								<div className='w-full h-1/2 flex flex-col items-center justify-center p-4 sm:p-6 relative shadow-inner'>
									<GridPattern
										color='black'
										className={cn(
											'[mask-image:radial-gradient(200px_circle_at_center,transparent,white,transparent)]'
										)}
									/>
									<p className='text-center text-sm sm:text-base md:text-lg font-medium mb-3 md:mb-4'>
										{service.description}
									</p>
									<Link
										href={service.link}
										className='text-foreground font-medium hover:underline text-sm sm:text-base'
									>
										Learn More →
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
