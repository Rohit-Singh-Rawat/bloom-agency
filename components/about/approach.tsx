'use client';

import { motion } from 'framer-motion';
import {
	IconCircle1,
	IconCircle2,
	IconCircle3,
	IconCircle4,
	IconCircle5,
	IconCircle6,
} from '@tabler/icons-react';
import { IconCheck, IconBrain, IconHandStop, IconChartBar, IconTools } from '@tabler/icons-react';

const ApproachStep = ({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) => {
	return (
		<motion.div
			className='flex flex-col'
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			<div className='flex flex-col gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-xl border border-purple-200 py-4 sm:py-6 z-10 shadow-sm'>
				<div className='flex items-center gap-2 sm:gap-3'>
					<span className='text-purple-600'>{icon}</span>
					<h3 className='text-base sm:text-lg md:text-xl font-medium text-purple-900'>{title}</h3>
				</div>
			</div>
			<div className='p-3 sm:p-4 border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 rounded-b-xl h-full -translate-y-10 py-6 sm:py-7 pt-12 sm:pt-14'>
				<p className='text-sm sm:text-base text-gray-700 font-medium'>{description}</p>
			</div>
		</motion.div>
	);
};

const DifferentiatorCard = ({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) => {
	return (
		<motion.div
			className='bg-blue-50 p-4 sm:p-6 rounded-xl border border-blue-100'
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			whileHover={{ y: -5 }}
		>
			<div className='flex items-start gap-2 sm:gap-3'>
				<span className='text-blue-600 shrink-0'>{icon}</span>
				<div>
					<h4 className='text-base sm:text-lg font-medium text-blue-900 mb-1'>{title}</h4>
					<p className='text-xs sm:text-sm text-gray-600'>{description}</p>
				</div>
			</div>
		</motion.div>
	);
};

const Approach = () => {
	const approachSteps = [
		{
			icon: (
				<IconCircle1
					size={24}
					className='sm:size-[28px]'
				/>
			),
			title: 'Discovery & Strategy',
			description:
				'We begin by understanding your goals, audience, and challenges. Together, we define the scope, tech stack, and success metrics for your project.',
		},
		{
			icon: (
				<IconCircle2
					size={24}
					className='sm:size-[28px]'
				/>
			),
			title: 'UI/UX Design',
			description:
				'Our designers craft wireframes and high-fidelity mockups focused on user experience, branding, and intuitive navigation.',
		},
		{
			icon: (
				<IconCircle3
					size={24}
					className='sm:size-[28px]'
				/>
			),
			title: 'Agile Development',
			description:
				'Our developers bring your product to life with clean, scalable code using the latest technologies — always in sync with your feedback.',
		},
		{
			icon: (
				<IconCircle4
					size={24}
					className='sm:size-[28px]'
				/>
			),
			title: 'Testing & QA',
			description:
				'We rigorously test every feature across devices, browsers, and use-cases to ensure everything works smoothly and securely.',
		},
		{
			icon: (
				<IconCircle5
					size={24}
					className='sm:size-[28px]'
				/>
			),
			title: 'Launch & Deployment',
			description:
				'Once approved, we deploy your solution to production, ensuring optimal performance, SEO readiness, and zero downtime.',
		},
		{
			icon: (
				<IconCircle6
					size={24}
					className='sm:size-[28px]'
				/>
			),
			title: 'Ongoing Support',
			description:
				'After launch, we offer continuous monitoring, updates, and feature enhancements to keep your product running at its best.',
		},
	];

	const differentiators = [
		{
			icon: (
				<IconCheck
					size={20}
					className='sm:size-[24px]'
				/>
			),
			title: 'Startup-Friendly Mindset',
			description: 'We understand the hustle and move fast without compromising quality.',
		},
		{
			icon: (
				<IconBrain
					size={20}
					className='sm:size-[24px]'
				/>
			),
			title: 'Tech-First Thinking',
			description: 'Our team stays ahead of trends, using only proven, future-ready technologies.',
		},
		{
			icon: (
				<IconHandStop
					size={20}
					className='sm:size-[24px]'
				/>
			),
			title: 'Transparent Communication',
			description: 'No jargon, no surprises — just honest updates and clear timelines.',
		},
		{
			icon: (
				<IconChartBar
					size={20}
					className='sm:size-[24px]'
				/>
			),
			title: 'Data-Driven Decisions',
			description:
				'Every choice we make, from design to deployment, is backed by data and user insight.',
		},
		{
			icon: (
				<IconTools
					size={20}
					className='sm:size-[24px]'
				/>
			),
			title: 'Built for Scale',
			description:
				"Whether you're launching an MVP or expanding an enterprise platform, we build for long-term growth.",
		},
	];

	return (
		<section className='py-12 sm:py-16 md:py-24 px-4'>
			<div className='container mx-auto max-w-6xl'>
				{/* Approach Header */}
				<motion.div
					className='text-center mb-10 sm:mb-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-medium mb-2 sm:mb-3'>
						Our Approach
					</h2>
					<p className='text-lg sm:text-xl font-medium text-gray-700 mb-3 sm:mb-4'>
						A Proven Process to Turn Ideas into Scalable Digital Products
					</p>
					<p className='text-sm sm:text-base text-gray-600 max-w-3xl mx-auto'>
						At LinkVerse Labs, we follow a streamlined yet flexible workflow to ensure quality,
						clarity, and speed — from the first conversation to final delivery.
					</p>
				</motion.div>

				{/* Approach Steps */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-x-10 mb-16 sm:mb-20 md:mb-24'>
					{approachSteps.map((step, index) => (
						<ApproachStep
							key={index}
							icon={step.icon}
							title={step.title}
							description={step.description}
						/>
					))}
				</div>

				{/* What Sets Us Apart */}
				<motion.div
					className='text-center mb-8 sm:mb-12'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-medium mb-2 sm:mb-3'>
						<span className='text-blue-600 mr-2'>🔥</span> What Sets Us Apart
					</h2>
					<p className='text-sm sm:text-base text-gray-600 max-w-3xl mx-auto'>
						We don&apos;t just build products — we build partnerships and experiences that drive
						real results.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
					{differentiators.map((diff, index) => (
						<DifferentiatorCard
							key={index}
							icon={diff.icon}
							title={diff.title}
							description={diff.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Approach;
