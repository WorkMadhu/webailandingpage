import Hero from '../components/Hero';
import TrustMetrics from '../components/TrustMetrics';
import CoreServices from '../components/CoreServices';
import HowItWorks from '../components/HowItWorks';
import FeaturedProjects from '../components/FeaturedProjects';
import ClientLogos from '../components/ClientLogos';
import Testimonials from '../components/Testimonials';
import CTASections from '../components/CTASections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <CoreServices />
      <HowItWorks />
      <FeaturedProjects />
      <ClientLogos />
      <Testimonials />
      <CTASections />
    </>
  );
}
