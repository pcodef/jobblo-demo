import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
        <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <div className="form-group">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-500 transition-all duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
