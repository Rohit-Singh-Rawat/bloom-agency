import AboutHero from '@/components/about/hero';
import Founder from '@/components/about/founder';
export const metadata = {
	title: 'About Us | LinkVerse Labs',
	description:
		'Learn about LinkVerse Labs, our founder, and our mission to transform ideas into powerful digital products.',
};

const AboutPage = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center'>
			<AboutHero />
			<div className='container max-w-6xl'>
				<Founder />
			</div>
		</div>
	);
};

export default AboutPage;
