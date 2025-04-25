'use client';

import { UserCheck, Code, Link, Award, Rocket } from 'lucide-react';
import { ReactNode } from 'react';

interface FeatureProps {
	icon: ReactNode;
	title: string;
	description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
	return (
		<div className='space-y-2  shadow-md hover:bg-accent hover:border-blue-500 transition-all duration-300 group bg-white rounded-2xl border border-blue-200'>
			<div className='flex items-center gap-2'>
				<div className='group-hover:scale-120 transition-all duration-300'>{icon}</div>
				<h3 className='text-sm font-medium'>{title}</h3>
			</div>
			<p className='text-sm'>{description}</p>
		</div>
	);
};

export default function WhyChooseUs() {
	const features = [
		{
			icon: <UserCheck className='size-4' />,
			title: 'Industry Professionals',
			description: 'Real training from experienced professionals working in the tech industry.',
		},
		{
			icon: <Code className='size-4' />,
			title: 'Hands-on Projects',
			description: 'Work on practical tasks and projects that build your portfolio and skills.',
		},
		{
			icon: <Link className='size-4' />,
			title: 'Client Exposure',
			description: 'Connect with ongoing client work to understand real business challenges.',
		},
		{
			icon: <Award className='size-4' />,
			title: 'Certification',
			description:
				'Receive an internship certificate you can proudly add to your LinkedIn profile.',
		},
		{
			icon: <Rocket className='size-4' />,
			title: 'Career Fast-Track',
			description: 'Accelerate your career in Web, App, IoT, or AI development.',
		},
		{
			icon: <UserCheck className='size-4' />,
			title: 'No Hidden Conditions',
			description: 'Clear expectations and transparent program structure from day one.',
		},
	];

	return (
		<section className='py-12 md:py-20 bg-neutral-200 border'>
			<div className='mx-auto max-w-5xl space-y-8 px-6 md:space-y-16'>
				<div className='relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12'>
					<h2 className='text-balance text-4xl font-medium lg:text-5xl'>Why Choose Us?</h2>
					<p>
						Our internship programs are designed with your career growth in mind, providing
						real-world experience and professional development opportunities.
					</p>
				</div>

				<div className='relative mx-auto grid max-w-4xl divide-x divide-y  *:p-12 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{features.map((feature, index) => (
						<Feature
							key={index}
							icon={feature.icon}
							title={feature.title}
							description={feature.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
