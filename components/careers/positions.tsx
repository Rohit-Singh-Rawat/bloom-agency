'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Job position data
const positions = [
	{
		id: 1,
		icon: '🖥️',
		title: 'Frontend Developer (React/Next.js)',
		location: 'Remote / Bangalore',
		experience: '1–3 years',
		description:
			"We're looking for someone who loves creating clean, responsive, and accessible user interfaces using React and Next.js. Tailwind experience is a big plus!",
	},
	{
		id: 2,
		icon: '⚙️',
		title: 'Backend Developer (Node.js/Express)',
		location: 'Remote',
		experience: '1–3 years',
		description:
			'If you can design scalable APIs, manage databases, and care about performance and security, we want to hear from you. Bonus: experience with MongoDB and Docker.',
	},
	{
		id: 3,
		icon: '📱',
		title: 'Mobile App Developer (Flutter)',
		location: 'Remote / Hybrid',
		experience: '0.5–2 years',
		description:
			'Join us to build cross-platform mobile apps that are fast, beautiful, and functional. Great opportunity for developers eager to work on production-ready MVPs.',
	},
	{
		id: 4,
		icon: '🤖',
		title: 'AI Developer / ML Engineer',
		location: 'Remote',
		experience: '1–3 years',
		description:
			"Build intelligent systems using OpenAI, LangChain, and Python-based ML tools. You'll work on exciting use-cases like AI chatbots, recommendation engines, and smart automation.",
	},
	{
		id: 5,
		icon: '🎨',
		title: 'UI/UX Designer',
		location: 'Remote',
		experience: '1–2 years',
		description:
			"Help shape the look and feel of innovative products. We're looking for someone who understands user behavior, loves Figma, and can turn ideas into intuitive designs.",
	},
];

const OpenPositions = () => {
	return (
		<section className='mb-24'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				{positions.map((position, index) => (
					<motion.div
						key={position.id}
						className='border border-blue-100 rounded-xl p-6 bg-blue-50/30 hover:shadow-lg transition-all'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						whileHover={{ y: -5 }}
					>
						<div className='text-2xl mb-3'>{position.icon}</div>
						<h3 className='text-xl font-medium text-blue-900 mb-2'>{position.title}</h3>

						<div className='flex gap-4 mb-3 text-sm text-gray-600'>
							<div>Location: {position.location}</div>
							<div>Experience: {position.experience}</div>
						</div>

						<p className='text-gray-700 mb-4'>{position.description}</p>

						<Link
							href='https://forms.google.com/your-form-link'
							target='_blank'
							className='text-blue-600 font-medium hover:text-blue-800 transition-colors'
						>
							Apply for this position →
						</Link>
					</motion.div>
				))}
			</div>

			<motion.div
				className='mt-16 text-center border-t border-gray-200 pt-12'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.6 }}
			>
				<h3 className='text-2xl font-medium mb-4'>💼 Don&apos;t See Your Role?</h3>
				<p className='text-gray-700 mb-4 max-w-2xl mx-auto'>
					We&apos;re always open to talent. If you think you can add value to LinkVerse Labs, send us
					your profile at{' '}
					<a
						href='mailto:careers@linkverselabs.com'
						className='text-blue-600 hover:underline'
					>
						careers@linkverselabs.com
					</a>
				</p>
			</motion.div>
		</section>
	);
};

export default OpenPositions;
