import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import {
  Share2,
  BookOpen,
  Clock,
  User,
  Calendar,
  ArrowLeft,
  Heart,
  MessageCircle,
  Eye,
  ChevronRight,
} from "lucide-react";
import { blogData } from "../../utils/blogData";
import Banner from "../Shared/Banner";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const blog = blogData.find((item) => item.id === parseInt(id));

  if (!blog)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-16">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-gray-400" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Blog Not Found
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The blog post you're looking for doesn't exist or may have been
            moved.
          </p>
          <button
            onClick={() => navigate("/blogs")}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </button>
        </div>
      </div>
    );

  const relatedBlogs = blogData.filter((b) => b.id !== blog.id).slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      <Banner
        bannerImage="https://plus.unsplash.com/premium_photo-1661932036915-4fd90bec6e8a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bG9naXN0aWNzfGVufDB8fDB8fHww"
        title="Global Logistics News & Insights"
        paragraph="Explore industry-changing trends, AI integration, and sustainable innovations transforming the logistics world. Stay informed, stay ahead."
        buttonText="Explore More Insights"
        onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => navigate("/blogs")}
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Blogs
            </button>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600 truncate">
              {blog.blogTitle.replace("📝 ", "").substring(0, 30)}...
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8">
          {/* Main Content */}
          <article className="lg:col-span-8">
            {/* Article Header */}
            <header className="mb-8">
              <div className="mb-4">
                <span className="inline-flex items-center bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full">
                  <BookOpen className="w-3 h-3 mr-1.5" />
                  Logistics
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                {blog.blogTitle.replace("📝 ", "")}
              </h1>

              {/* Author & Meta Info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm sm:text-lg font-semibold text-white">
                      {blog.author.split(" ")[1][0]}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      {blog.author.replace("👤 ", "")}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Senior Logistics Analyst
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <time dateTime={blog.date}>{blog.date}</time>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>5 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>2.4k views</span>
                  </div>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100">
                <img
                  src={blog.image}
                  alt={blog.blogTitle}
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-gray max-w-none mb-8">
              <div className="text-lg text-justify leading-relaxed text-gray-700 font-light mb-8">
                {blog.excerpt}
              </div>

              {/* Sample additional content to make it less empty */}
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  The logistics industry continues to evolve at an unprecedented
                  pace, driven by technological innovations and changing
                  consumer expectations. Understanding these shifts is crucial
                  for businesses looking to maintain competitive advantage in
                  today's dynamic marketplace.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Key Industry Insights
                </h3>

                <p>
                  Modern supply chain management requires a delicate balance
                  between efficiency, sustainability, and adaptability.
                  Companies that successfully navigate these challenges often
                  employ cutting-edge technologies and data-driven
                  decision-making processes.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 my-8 rounded-r-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">💡</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-blue-800 font-medium mb-2">
                        Industry Insight
                      </p>
                      <p className="text-blue-700 text-sm leading-relaxed">
                        Companies implementing AI-driven logistics solutions
                        report up to 30% improvement in operational efficiency
                        and significant cost reductions across their supply
                        chain operations.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  As we look toward the future, the integration of artificial
                  intelligence, machine learning, and IoT devices will continue
                  to reshape how we approach logistics and supply chain
                  management, creating new opportunities for optimization and
                  growth.
                </p>
              </div>
            </div>

            {/* Engagement Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 border-t border-b border-gray-200 mb-8">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isLiked
                      ? "bg-red-50 text-red-600 border border-red-200"
                      : "bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`}
                  />
                  <span className="text-sm font-medium">
                    {isLiked ? "127" : "126"}
                  </span>
                </button>

                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 transition-all duration-200">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">23</span>
                </button>
              </div>

              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition-all duration-200">
                <Share2 className="w-4 h-4" />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>

            {/* Author Bio */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-xl font-semibold text-white">
                    {blog.author.split(" ")[1][0]}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">
                    {blog.author.replace("👤 ", "")}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Senior Logistics Analyst at TransEdge Global
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    With over 8 years of experience in global logistics and
                    supply chain optimization, specializing in AI-driven
                    solutions and sustainable transportation networks.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 drop-shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                  In This Article
                </h3>
                <nav className="space-y-2">
                  <a
                    href="#"
                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                  >
                    Key Industry Insights
                  </a>
                  <a
                    href="#"
                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                  >
                    Technology Integration
                  </a>
                  <a
                    href="#"
                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                  >
                    Future Predictions
                  </a>
                </nav>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br bg-white rounded-lg p-4 sm:p-6 border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-2">Stay Updated</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest logistics insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow shadow-blue-200">
                <h3 className="font-bold text-gray-900 mb-4">Article Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Reading Time</span>
                    <span className="text-sm font-medium text-gray-900">
                      5 minutes
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Views</span>
                    <span className="text-sm font-medium text-gray-900">
                      2,431
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Likes</span>
                    <span className="text-sm font-medium text-gray-900">
                      126
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Comments</span>
                    <span className="text-sm font-medium text-gray-900">
                      23
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Related Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover more insights and analysis from our logistics experts to
              stay ahead of industry trends.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {relatedBlogs.map((item) => (
              <article
                key={item.id}
                onClick={() => navigate(`/blogs/${item.id}`)}
                className="bg-white rounded-lg shadow-md hover:shadow-xl group transition-all duration-300 cursor-pointer border border-gray-200 transform hover:-translate-y-1"
              >
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.blogTitle}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug text-sm sm:text-base">
                    {item.blogTitle.replace("📝 ", "")}
                  </h3>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <time dateTime={item.date}>{item.date}</time>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span className="truncate max-w-20 sm:max-w-none">
                        {item.author.replace("👤 ", "").split(" ")[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
