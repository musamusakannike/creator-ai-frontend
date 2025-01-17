import React from "react";

const PricingSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Choose Your Plan
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Get the tools you need to grow your YouTube channel. Select a plan
          that suits you.
        </p>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Free Plan */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900">Free</h3>
            <p className="mt-4 text-gray-600 text-sm">
              Perfect for beginners.
            </p>
            <p className="mt-6 text-4xl font-bold text-gray-900">$0</p>
            <ul className="mt-6 space-y-4 text-gray-600 text-sm">
              <li>✔️ Basic Analytics</li>
              <li>✔️ Limited AI Video Editing</li>
              <li>✔️ 10 Content Ideas per Month</li>
            </ul>
            <button className="mt-8 w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
              Select Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white border-2 border-indigo-600 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
            <p className="mt-4 text-gray-600 text-sm">
              Ideal for growing channels.
            </p>
            <p className="mt-6 text-4xl font-bold text-gray-900">$19</p>
            <p className="text-sm text-gray-600">/mo</p>
            <ul className="mt-6 space-y-4 text-gray-600 text-sm">
              <li>✔️ Advanced Analytics</li>
              <li>✔️ Unlimited AI Video Editing</li>
              <li>✔️ Unlimited Content Ideas</li>
              <li>✔️ AI Assistant</li>
            </ul>
            <button className="mt-8 w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
              Selected
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
            <p className="mt-4 text-gray-600 text-sm">
              For teams and large creators.
            </p>
            <p className="mt-6 text-4xl font-bold text-gray-900">Custom</p>
            <ul className="mt-6 space-y-4 text-gray-600 text-sm">
              <li>✔️ Team Collaboration Tools</li>
              <li>✔️ Priority Support</li>
              <li>✔️ Dedicated AI Consultant</li>
              <li>✔️ Custom Integrations</li>
            </ul>
            <button className="mt-8 w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
