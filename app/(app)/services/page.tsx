import React from 'react';
import { Button } from '@/components/ui/neon-button';
import {
	ArrowRight,
	Globe,
	Smartphone,
	Cpu,
	Bot,
	Brain,
	LightbulbIcon,

} from 'lucide-react';

const ServiceCard = ({
	icon: Icon,
	title,
	description,
}: {
	icon: React.ElementType;
	title: string;
	description: string;
}) => (
	<div className='bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-border/50 hover:border-blue-500/30 transition-all duration-300 flex items-start justify-between gap-4'>
		<div className='flex items-center justify-center rounded-full bg-blue-500/10 text-blue-500'>
			<Icon className='w-6 h-6 m-2' />
		</div>
		<div>
			<h3 className='text-xl font-medium mb-2'>{title}</h3>
			<p className='text-muted-foreground mb-4 font-light'>{description}</p>
		</div>
	</div>
);

const FeatureItem = ({
	emoji,
	title,
	description,
}: {
	emoji: string;
	title: string;
	description: string;
}) => (
	<div className='flex items-start gap-3'>
		<div className='text-blue-500 text-2xl'>{emoji}</div>
		<div>
			<h3 className='font-semibold'>{title}</h3>
			<p className='text-muted-foreground'>{description}</p>
		</div>
	</div>
);

export default function ServicesPage() {
	const services = [
		{
			icon: Globe,
			title: 'Web Development',
			description:
				'We craft blazing-fast, responsive websites tailored to your brand. Every site is built with SEO, performance, and conversion in mind.',
		},
		{
			icon: Smartphone,
			title: 'App Development',
			description:
				'From MVPs to full-scale apps, we build mobile and web applications that are intuitive, secure, and ready for growth.',
		},
		{
			icon: Cpu,
			title: 'IoT Solutions',
			description:
				'We create connected experiences using smart devices and custom IoT architectures — enabling automation, data collection, and real-time control.',
		},
		{
			icon: Bot,
			title: 'AI Integration',
			description:
				'Enhance your existing products with AI features like chatbots, smart recommendations, search enhancements, and automation tools.',
		},
		{
			icon: Brain,
			title: 'AI Development',
			description:
				'Need a tailored AI system? We build and deploy custom ML models and generative AI tools that solve real business problems.',
		},
		{
			icon: LightbulbIcon,
			title: 'Tech Consulting',
			description:
				'Get expert guidance on technology strategy, architecture decisions, and digital transformation initiatives.',
		},
	];

	const features = [
		{
			emoji: '💬',
			title: 'Consultation & Strategy',
			description:
				'We help you validate your ideas, define project scope, and choose the right tech stack before writing a single line of code.',
		},
		{
			emoji: '✨',
			title: 'UI/UX Design',
			description:
				'Eye-catching, intuitive, and user-centric designs that keep your users engaged and happy.',
		},
		{
			emoji: '📈',
			title: 'Scalability Planning',
			description:
				"We don't just build for now — we future-proof your project for scale and growth.",
		},
		{
			emoji: '🧪',
			title: 'Testing & Quality Assurance',
			description:
				'Rigorous testing at every stage ensures your product is stable, secure, and bug-free.',
		},
		{
			emoji: '🔐',
			title: 'Security Best Practices',
			description: 'We follow industry standards to ensure your data and systems are protected.',
		},
	];

	return (
		<div className='container mx-auto px-4 py-16 max-w-screen-xl'>
			<div className='text-center mb-16'>
				<h1 className='text-4xl font-medium mb-4'>Our Services</h1>
				<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
					Future-Ready Solutions, Custom-Built for Your Business
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
				{services.map((service, index) => (
					<ServiceCard
						key={index}
						icon={service.icon}
						title={service.title}
						description={service.description}
					/>
				))}
			</div>

			<div className='bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-border/50 text-center mb-16'>
				<h2 className='text-4xl font-medium mb-4'>More Than Just Code</h2>
				<p className='text-lg text-muted-foreground max-w-3xl mx-auto mb-8'>
					At LinkVerse Labs, we&apos;re not just developers — we&apos;re your tech partners. We
					focus on building solutions that are functional, scalable, and aligned with your business
					goals.
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-8 text-left'>
					{features.map((feature, index) => (
						<FeatureItem
							key={index}
							emoji={feature.emoji}
							title={feature.title}
							description={feature.description}
						/>
					))}
				</div>

				<Button
					variant='solid'
					size='lg'
					className='group'
				>
					Schedule a Consultation
					<ArrowRight className='ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform' />
				</Button>
			</div>
		</div>
	);
}
