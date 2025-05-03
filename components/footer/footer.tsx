'use client';

import Link from 'next/link';
// import { IconBrandTwitter, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

const Footer = () => {
	return (
		<footer className='bg-background border-t border-border py-12 z-50'>
			<div className='container mx-auto px-4 max-w-7xl'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{/* Logo and description */}
					<div>
						<h3 className='font-medium text-xl text-foreground mb-4'>LinkVerse Labs</h3>
						<p className='text-muted-foreground mb-4'>
							Building innovative digital solutions for modern businesses.
						</p>
						{/* <div className="flex space-x-4">
							<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-amber-500 transition-colors">
								<span className="sr-only">Twitter</span>
								<IconBrandTwitter size={24} />
							</a>
							<a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-amber-500 transition-colors">
								<span className="sr-only">GitHub</span>
								<IconBrandGithub size={24} />
							</a>
							<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-amber-500 transition-colors">
								<span className="sr-only">LinkedIn</span>
								<IconBrandLinkedin size={24} />
							</a>
						</div> */}
					</div>

					{/* Quick links */}
					<div>
						<h3 className='font-medium text-lg text-foreground mb-4'>Quick Links</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/'
									className='text-muted-foreground hover:text-amber-500 transition-colors'
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href='/services'
									className='text-muted-foreground hover:text-amber-500 transition-colors'
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href='/about'
									className='text-muted-foreground hover:text-amber-500 transition-colors'
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href='/approach'
									className='text-muted-foreground hover:text-amber-500 transition-colors'
								>
									Approach
								</Link>
							</li>
							<li>
								<Link
									href='/careers'
									className='text-muted-foreground hover:text-amber-500 transition-colors'
								>
									Careers
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact info */}
					<div>
						<h3 className='font-medium text-lg text-foreground mb-4'>Contact</h3>
						<p className='text-muted-foreground mb-2'>info@linkverselabs.com</p>
						<p className='text-muted-foreground'>+91 6354035567</p>
					</div>
				</div>

				<div className='border-t border-border mt-12 pt-6 text-center text-muted-foreground text-sm'>
					<p>© {new Date().getFullYear()} LinkVerse Labs. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
