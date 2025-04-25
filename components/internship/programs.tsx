'use client';

import { Check, X, Clock, Calendar, Briefcase,  } from 'lucide-react';
import Link from 'next/link';

function InternshipPrograms() {
	const programs = [
		{
			icon: <Clock size={24} />,
			title: 'Short-Duration Internship',
			subtitle: 'Ideal for Beginners | Duration: 2–4 Weeks',

			features: [
				{ text: 'No Interview Required', included: true },
				{ text: 'Weekly Tasks & Assignments', included: true },
				{ text: 'Team Training Sessions', included: true },
				{ text: 'No Bond', included: true },
				{ text: 'Unpaid (Learning-focused)', included: true },
				{ text: 'Internship Certificate Provided', included: true },
				{ text: 'Opportunity for Job Placement', included: false },
			],
			recommendation: 'Great for students exploring tech for the first time.',
			isPopular: false,
		},
		{
			icon: <Calendar size={24} />,
			title: 'Long-Duration Internship',
			subtitle: 'Skill-Builder Program | Duration: 3–6 Months',

			features: [
				{ text: 'No Interview Required', included: true },
				{ text: 'Daily Task Assignments', included: true },
				{ text: 'Team Training Sessions', included: true },
				{ text: 'No Bond', included: true },
				{ text: 'Unpaid (Skill-based learning)', included: true },
				{ text: 'Internship Certificate Provided', included: true },
				{ text: 'Opportunity for Job Placement', included: false },
			],
			recommendation: 'Perfect for students who want consistent training and a strong portfolio.',
			isPopular: true,
		},
		{
			icon: <Briefcase size={24} />,
			title: 'Internship + Job Opportunity',
			subtitle: 'Career-Track Program | 6 Months + 1 Year Job',

			features: [
				{ text: 'Resume + Interview-Based Selection', included: true },
				{ text: 'Daily Assignments & Team Projects', included: true },
				{ text: 'Training + Real Client Exposure', included: true },
				{ text: 'Paid Internship with Stipend', included: true },
				{ text: '1 Year Job Offer Post Internship', included: true },
				{ text: '1 Year Bond Applies', included: true },
				{ text: 'Internship Certificate Provided', included: true },
			],
			recommendation: 'Best for those serious about entering the tech industry full-time.',
			isPopular: false,
		},
	];

	return (
		<section id='programs' className='w-full py-20'>
			<div className='container mx-auto'>
				<div className='flex text-center justify-center items-center gap-4 flex-col'>
					<div className='px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary'>
						Internships
					</div>
					<div className='flex gap-2 flex-col'>
						<h2 className='text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular'>
							Our Internship Programs
						</h2>
						<p className='text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center'>
							Choose the program that best fits your goals, availability, and career aspirations.
						</p>
					</div>
					<div className='grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8'>
						{programs.map((program, index) => (
							<div
								key={index}
								className={`w-full shadow-xl shadow-blue-200/90 rounded-md bg-white border hover:scale-110 transition-all group duration-300 p-6 ${
									program.isPopular ? 'shadow-2xl border-blue-200' : 'border-border '
								}`}
							>
								<div className='pb-6'>
									<div>
										<span className='flex flex-row gap-4 items-center  text-2xl font-medium '>
											{program.title}
										</span>
									</div>
									<div className='text-sm text-muted-foreground mt-2'>{program.subtitle}</div>
								</div>
								<div>
									<div className='flex flex-col gap-8 justify-start'>
										<div className='flex flex-col gap-4 justify-start'>
											{program.features.map((feature, idx) => (
												<div
													key={idx}
													className='flex flex-row gap-4'
												>
													<span className={feature.included ? 'text-primary' : 'text-gray-300'}>
														{feature.included ? (
															<Check className='p-1 bg-accent border rounded-full ' />
														) : (
															<X className='p-1 bg-accent border rounded-full ' />
														)}
													</span>
													<div className='flex flex-col'>
														<p className={feature.included ? '' : 'text-gray-400 line-through'}>
															{feature.text}
														</p>
													</div>
												</div>
											))}
										</div>
										<Link href='/apply'>
											<button
												className={`w-full py-2 px-4 rounded-md					border border-input bg-background hover:bg-accent hover:text-accent-foreground  group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300`}
											>
												Apply Now
											</button>
										</Link>
										<p className='text-xs text-muted-foreground'>✅ {program.recommendation}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default InternshipPrograms;
