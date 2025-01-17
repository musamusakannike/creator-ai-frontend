import FeaturesSection from '@/components/LandingPage/FeaturesSection';
import HeroSection from '@/components/LandingPage/HeroSection';
import Navbar from '@/components/LandingPage/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  )
}

export default Home;