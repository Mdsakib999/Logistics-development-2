import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-3xl p-6 bg-white shadow-md rounded-lg mb-10 mx-5 md:mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h2>

      <form>
        {/* grid for fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the subject"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Your Message
          </label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="cursor-pointer bg-[#0778D4] text-white border-2 border-transparent hover:text-[#0778D4] hover:bg-white hover:border-[#0778D4] transition-all duration-300 px-8 py-2 rounded text-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
