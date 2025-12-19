import Hero from '../components/Hero';
import CoreServices from '../components/CoreServices';
import HowItWorks from '../components/HowItWorks';
import FeaturedProjects from '../components/FeaturedProjects';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Partnership from '../components/Partnership';
import CTASections from '../components/CTASections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoreServices />
      <HowItWorks />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <Partnership />
      <CTASections />
    </>
  );
}
