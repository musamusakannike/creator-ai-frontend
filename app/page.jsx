import FeaturesSection from "@/components/LandingPage/FeaturesSection";
import Footer from "@/components/LandingPage/FooterSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import Navbar from "@/components/LandingPage/Navbar";
import PricingSection from "@/components/LandingPage/PricingSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Home;
