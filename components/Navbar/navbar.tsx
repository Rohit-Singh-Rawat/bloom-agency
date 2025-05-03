'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { PulsatingButton } from '../ui/pulsebutton';

interface NavItem {
	label: string;
	href: string;
}

const navItems: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Approach', href: '/approach' },
	{ label: 'Services', href: '/services' },
	{ label: 'Careers', href: '/careers' },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [hidden, setHidden] = useState(false);
	const [atTop, setAtTop] = useState(true);
	const { scrollY } = useScroll();
	const [lastScrollY, setLastScrollY] = useState(0);
	const pathname = usePathname();
	const isHomePage = pathname === '/';

	useMotionValueEvent(scrollY, 'change', (latest) => {
		// Hide navbar when scrolling down, show when scrolling up
		if (latest > lastScrollY && latest > 50) {
			setHidden(true);
		} else {
			setHidden(false);
		}

		// Check if at top of page
		setAtTop(latest < 50);
		setLastScrollY(latest);
	});

	// Determine navbar background color based on page and scroll position
	const getNavbarBgClass = () => {
		if (isHomePage && atTop) {
			return 'bg-white/20 backdrop-blur-sm';
		}
		return 'bg-[#F2FFFF] shadow-sm';
	};

	// Determine text color based on page and scroll position
	const getTextColorClass = () => {
		if (isHomePage && atTop) {
			return 'text-white';
		}
		return 'text-black';
	};

	return (
		<motion.nav
			className={`w-full py-3 px-4 sm:px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-[100] mx-auto transition-colors duration-300 ${getNavbarBgClass()}`}
			variants={{
				visible: { y: 0 },
				hidden: { y: '-100%' },
			}}
			animate={hidden ? 'hidden' : 'visible'}
			transition={{ duration: 0.35, ease: 'easeInOut' }}
		>
			<div className='container mx-auto flex items-center justify-between max-w-7xl px-4'>
				<Link
					href='/'
					className={`text-lg sm:text-xl font-medium ${getTextColorClass()}`}
				>
					LinkVerse
				</Link>

				{/* Desktop Navigation */}
				<div className='hidden md:flex items-center space-x-8'>
					{navItems.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className={`${getTextColorClass()} hover:opacity-70 transition-colors font-medium`}
						>
							{item.label}
						</Link>
					))}
				</div>
				<div>
					<Link href='/internship'>
						<PulsatingButton
							pulseColor={hidden ? ' #F2FFFF' : 'gray'}
							className='bg-black/80 '
						>
							Internship
						</PulsatingButton>
					</Link>
				</div>
				{/* Mobile Navigation Toggle */}
				<button
					className={`md:hidden ${getTextColorClass()}`}
					onClick={() => setIsOpen(!isOpen)}
					aria-label='Toggle menu'
				>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						{isOpen ? (
							<path
								d='M18 6L6 18M6 6L18 18'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						) : (
							<path
								d='M4 6H20M4 12H20M4 18H20'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						)}
					</svg>
				</button>

				{/* Mobile Navigation Menu */}
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className='absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 md:hidden z-[101]'
					>
						<div className='flex flex-col space-y-4'>
							{navItems.map((item) => (
								<Link
									key={item.label}
									href={item.href}
									className='hover:text-gray-500 transition-colors text-center py-2'
									onClick={() => setIsOpen(false)}
								>
									{item.label}
								</Link>
							))}
							<Link
								href='/internship'
								className='bg-white text-primary-foreground px-4 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium text-center mt-2 '
								onClick={() => setIsOpen(false)}
							>
								Internship
							</Link>
						</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
};

export default Navbar;
