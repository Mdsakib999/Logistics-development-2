const ContactForm = () => {
  return (
    <div className="max-w-4xl p-8 md:p-10 bg-white shadow-2xl rounded-2xl mb-16 mx-5 md:mx-auto border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Contact Us
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600">
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>
      </div>

      <div>
        {/* grid for fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Name *
            </label>
            <input
              type="text"
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-0 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Email *
            </label>
            <input
              type="email"
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-0 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-0 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Subject *
            </label>
            <input
              type="text"
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-0 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
              placeholder="What's this regarding?"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-8 space-y-2">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Your Message *
          </label>
          <textarea
            rows="5"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-0 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300 resize-none"
            placeholder="Tell us about your logistics needs, timeline, or any specific requirements..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="cursor-pointer bg-[#0778D4] text-white border-2 border-transparent hover:text-[#0778D4] hover:bg-white hover:border-[#0778D4] transition-all duration-300 px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
