import Hero from '@/components/home/hero';
import TechnologiesMarquee from '@/components/home/technologiesMarquee';
import Services from '@/components/home/services';
import AboutUs from '@/components/home/aboutUs';
import CTA from '@/components/home/cta';
const page = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center '>
			<Hero />
			<div className=' container max-w-6xl '>
				<TechnologiesMarquee />
				<Services />
				<AboutUs />
				<CTA />
			</div>
		</div>
	);
};
export default page;
