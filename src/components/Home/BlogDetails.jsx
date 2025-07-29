import { useParams, useNavigate } from "react-router";
import { blogData } from "../../utils/blogData";
import Banner from "../Shared/Banner";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((item) => item.id === parseInt(id));

  if (!blog)
    return (
      <p className="text-center mt-10 text-red-500 text-lg font-semibold">
        Blog not found 🛑
      </p>
    );

  const relatedBlogs = blogData.filter((b) => b.id !== blog.id).slice(0, 4);

  return (
    <div>
      {/* Logistics-Themed Banner (Not Blog Dependent) */}
      <Banner
        bannerImage="https://plus.unsplash.com/premium_photo-1661932036915-4fd90bec6e8a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bG9naXN0aWNzfGVufDB8fDB8fHww"
        title="Global Logistics News & Insights"
        paragraph="Explore industry-changing trends, AI integration, and sustainable innovations transforming the logistics world. Stay informed, stay ahead."
        buttonText="Explore More Insights"
        onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
      />

      {/* Blog Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 text-gray-800 mt-14 mb-20 space-y-8">
        {/* Header Image + Meta */}
        <div>
          <img
            src={blog.image}
            alt={blog.blogTitle}
            className="w-full h-[300px] sm:h-[400px] object-cover rounded-xl shadow-md"
          />
          <div className="flex flex-wrap items-center justify-between mt-6 text-sm text-gray-600">
            <span>{blog.date}</span>
            <span>{blog.author}</span>
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
              News • Logistics
            </span>
          </div>
        </div>

        {/* Blog Title + Description */}
        <div className="mt-5">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-[#0A1931]">
            {blog.blogTitle.replace("📝 ", "")}
          </h1>
          <p className="text-lg text-justify leading-relaxed text-gray-700">
            {blog.description}
          </p>
        </div>

        {/* Author Info Box */}
        <div className="flex items-center gap-4 border-t pt-6">
          <div className="w-14 h-14 bg-blue-200 text-[#0A1931] text-xl font-bold rounded-full flex items-center justify-center">
            {blog.author.split(" ")[1][0]}
          </div>
          <div>
            <p className="font-semibold text-[#0A1931]">
              {blog.author.replace("👤 ", "")}
            </p>
            <p className="text-sm text-gray-500">
              Senior Logistics Analyst at TransEdge Global
            </p>
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0A1931]">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedBlogs.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/blogs/${item.id}`)}
                className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.blogTitle}
                  className="w-full h-44 object-cover rounded-t-xl"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-base font-semibold text-[#0A1931] group-hover:underline">
                    {item.blogTitle.replace("📝 ", "")}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {item.date} • {item.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
