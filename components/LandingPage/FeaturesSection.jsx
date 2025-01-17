import React from 'react';
import { FaChartBar, FaEdit, FaLightbulb, FaRobot } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Powerful Features for Content Creators
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Manage, analyze, and grow your YouTube channel with cutting-edge AI tools tailored for creators.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1: Advanced Analytics */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-center items-center text-indigo-600 text-4xl">
              <FaChartBar />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Advanced Analytics</h3>
            <p className="mt-2 text-gray-600">
              Gain actionable insights into your channel's performance, audience engagement, and growth trends.
            </p>
          </div>

          {/* Feature 2: AI Video Editor */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-center items-center text-indigo-600 text-4xl">
              <FaEdit />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">AI Video Editor</h3>
            <p className="mt-2 text-gray-600">
              Edit videos effortlessly with AI-powered tools that enhance visuals, audio, and pacing.
            </p>
          </div>

          {/* Feature 3: Idea Generator */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-center items-center text-indigo-600 text-4xl">
              <FaLightbulb />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Idea Generator</h3>
            <p className="mt-2 text-gray-600">
              Never run out of content ideas with our AI-driven topic and trend suggestion engine.
            </p>
          </div>

          {/* Feature 4: AI Assistant */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-center items-center text-indigo-600 text-4xl">
              <FaRobot />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">AI Assistant</h3>
            <p className="mt-2 text-gray-600">
              Automate repetitive tasks, get personalized advice, and manage your workflow efficiently with AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
