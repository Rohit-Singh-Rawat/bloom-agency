
import InternshipPrograms from '@/components/internship/programs';
import WhyChooseUs from '@/components/internship/why-choose-us';
import InternshipHero from '@/components/internship/hero';

export const metadata = {
	title: 'Internships | LinkVerse Labs',
	description:
		'Kickstart your tech career with real-world experience. Apply for internship programs at LinkVerse Labs.',
};

const InternshipPage = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center container mx-auto max-w-7xl'>
			<InternshipHero />
			<div className='container max-w-7xl px-4'>
				<InternshipPrograms />
				<WhyChooseUs />
			</div>
		</div>
	);
};

export default InternshipPage;
