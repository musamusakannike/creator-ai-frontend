import HeroImage from "@/assets/images/hero.png"
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center md:text-left md:flex-row">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Elevate Your YouTube Channel <br />
            <span className="text-indigo-600">with AI-Powered Tools</span>
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl">
            Manage, analyze, create, and grow your YouTube presence with our all-in-one AI assistant for content creators.
          </p>
          <div className="space-y-4 sm:space-x-4 sm:space-y-0 flex flex-col sm:flex-row">
            <button className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
              Get Started
            </button>
            <button className="px-6 py-3 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50">
              Watch Demo
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Trusted by <strong>15k+</strong> users worldwide
          </p>
        </div>

        {/* Right Content */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src={HeroImage}
            alt="AI tools illustration"
            className="w-full max-w-md md:max-w-lg"
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">15k+</p>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">30k+</p>
            <p className="text-gray-600">Downloads</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">35k+</p>
            <p className="text-gray-600">Registered Users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
