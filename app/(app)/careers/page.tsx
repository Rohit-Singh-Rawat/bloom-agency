import CareersHero from '@/components/careers/hero';
import CurrentOpenings from '@/components/careers/openings';
import OpenPositions from '@/components/careers/positions';


export const metadata = {
	title: 'Careers | LinkVerse Labs',
	description: 'Join our team of builders, thinkers, and problem-solvers at LinkVerse Labs.',
};

const CareersPage = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center'>
			<CareersHero />
			<div className='container max-w-6xl'>
				<CurrentOpenings />
				<OpenPositions />
			</div>
		</div>
	);
};

export default CareersPage;
