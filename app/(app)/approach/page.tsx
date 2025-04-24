import Approach from '@/components/about/approach';

export const metadata = {
	title: 'Our Approach | LinkVerse Labs',
	description:
		'Learn about our proven process to turn ideas into scalable digital products at LinkVerse Labs.',
};

const ApproachPage = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center'>
			<div className='container max-w-6xl'>
				<Approach />
			</div>
		</div>
	);
};

export default ApproachPage;
