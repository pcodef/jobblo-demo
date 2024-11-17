import React from "react";

function Features() {
  return (
    <section id="features" className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Jobblo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">Find Temporary Jobs</h3>
            <p className="text-gray-700">Access thousands of temporary job offers tailored to your skills and availability.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">For Employers</h3>
            <p className="text-gray-700">Efficiently find the right candidates with tools to personalize and optimize your job offers.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">Inclusive Platform</h3>
            <p className="text-gray-700">Resources and tools designed to be accessible for everyone, regardless of technical expertise.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
