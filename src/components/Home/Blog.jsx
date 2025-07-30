import { blogData } from "../../utils/blogData";

const categoryColors = {
  "Last-Mile Delivery": "bg-blue-100 text-blue-800",
  Sustainability: "bg-green-100 text-green-800",
  Technology: "bg-purple-100 text-purple-800",
  "Cold Chain": "bg-cyan-100 text-cyan-800",
  International: "bg-orange-100 text-orange-800",
  Automation: "bg-red-100 text-red-800",
};

const BlogCardSystem = () => {
  const handleCardClick = (blogId) => {
    window.location.href = `/blogs/${blogId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <div className="text-center py-12 mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">
                Latest Updates
              </span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Logistics & Shipping
            <br />
            <span className="text-[#0778D4]">Industry Insights</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Stay ahead in the logistics industry with expert insights on
            shipping, supply chain, and delivery innovations
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Blog Cards Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-4"></div>
              Latest Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {blogData.map((blog, index) => (
                <div
                  key={blog.id}
                  onClick={() => handleCardClick(blog.id)}
                  className="group bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 border border-white/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.blogTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          categoryColors[blog.category]
                        }`}
                      >
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{blog.date}</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors duration-300 leading-snug line-clamp-2">
                      {blog.blogTitle}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                          {blog.author.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {blog.author}
                        </span>
                      </div>

                      <div className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSystem;
