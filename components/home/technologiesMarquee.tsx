'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
const technologies = [
	{ name: 'React', icon: '/images/technologies/react.png' },
	{ name: 'Next.js', icon: '/images/technologies/next.png' },
	{ name: 'Node.js', icon: '/images/technologies/node.png' },
	{ name: 'Flutter', icon: '/images/technologies/flutter.png' },
	{ name: 'Django', icon: '/images/technologies/django.png' },
	{ name: 'PHP', icon: '/images/technologies/php.png' },
	{ name: 'Python', icon: '/images/technologies/python.png' },
];

export const InfiniteMovingCards = ({
	items,
	direction = 'left',
	speed = 'fast',
	pauseOnHover = true,
	className,
}: {
	items: {
		name: string;
		icon: string;
	}[];
	direction?: 'left' | 'right';
	speed?: 'fast' | 'normal' | 'slow';
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty('--animation-direction', 'forwards');
			} else {
				containerRef.current.style.setProperty('--animation-direction', 'reverse');
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === 'fast') {
				containerRef.current.style.setProperty('--animation-duration', '20s');
			} else if (speed === 'normal') {
				containerRef.current.style.setProperty('--animation-duration', '40s');
			} else {
				containerRef.current.style.setProperty('--animation-duration', '80s');
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					'flex w-max min-w-full shrink-0 flex-nowrap gap-4 sm:gap-6 md:gap-8 py-4 sm:py-6',
					start && 'animate-scroll',
					pauseOnHover && 'hover:[animation-play-state:paused]'
				)}
			>
				{items.map((item, idx) => (
					<li
						className='flex flex-col items-center justify-center w-20 sm:w-28 md:w-32'
						key={idx}
					>
						<div className='w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 relative mb-2 sm:mb-3'>
							<Image
								src={item.icon}
								alt={item.name}
								fill
								className='object-contain mix-blend-multiply grayscale-50'
							/>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

const TechnologiesMarquee = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<div className='py-8 sm:py-10 md:py-12 bg-background overflow-hidden pt-12 sm:pt-16 md:pt-20'>
			<div className='container mx-auto px-4'>
				<h2 className='text-lg sm:text-xl font-medium text-center text-neutral-600 mb-4 sm:mb-6'>
					Technologies We Use
				</h2>
			</div>

			<div className='relative'>
				<InfiniteMovingCards
					items={technologies}
					direction='left'
					speed='normal'
					pauseOnHover={true}
				/>
			</div>
		</div>
	);
};

export default TechnologiesMarquee;
