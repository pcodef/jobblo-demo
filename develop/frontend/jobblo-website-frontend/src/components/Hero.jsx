import React from "react";

function Hero() {
  return (
    <section className="bg-gray-100 text-center py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">More than Jobs, Opportunities!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Connecting workers and employers through personalized and inclusive solutions for temporary jobs.
        </p>
        <a href="#features" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500">
          Explore Features
        </a>
      </div>
    </section>
  );
}

export default Hero;
