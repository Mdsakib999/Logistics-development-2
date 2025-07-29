import { useNavigate } from "react-router";
import { blogData } from "../../utils/blogData";
import blogImage from "../../assets/blogImage.png";
import { Fade } from "react-awesome-reveal";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F3F7F9] p-4 sm:p-6 md:p-10 mb-20">
      {/* Section Title */}
      <div className="text-center mt-10 sm:mt-16 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold">Our Blog</h2>
        <h1 className="text-2xl sm:text-4xl font-bold">
          Update Blogs & <span className="text-[#417BE6]">News</span>
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-6 md:gap-8 my-10 md:my-20 px-2 md:px-0">
        {/* Left - Blog List */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          {blogData.map((blog) => (
            <Fade key={blog.id}>
              <div
                onClick={() => navigate(`/blogs/${blog.id}`)}
                className="flex items-center gap-4 bg-white shadow-md rounded-lg my-2 p-3 sm:p-4 cursor-pointer hover:shadow-xl transition"
              >
                <img
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-md object-cover"
                  src={blog.image}
                  alt="blog"
                />
                <div className="space-y-1 sm:space-y-2 w-full">
                  <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm text-gray-600">
                    <p>{blog.date}</p>
                    <p>{blog.author}</p>
                  </div>
                  <h1 className="font-semibold text-sm sm:text-base md:text-lg">
                    {blog.blogTitle}
                  </h1>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Right - Featured Image */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-full">
            <Fade duration={3000}>
              <img
                className="w-full h-full object-cover rounded-xl min-h-[350px] max-h-[550px] sm:min-h-[400px] md:h-full brightness-50"
                src={blogImage}
                alt="Featured Blog"
              />
            </Fade>
            {/* Overlay Info */}
            <div className="absolute bottom-4 left-4 text-white max-w-[90%]">
              <h1 className="font-semibold text-sm sm:text-base md:text-lg mb-1">
                {blogData[0].blogTitle}
              </h1>
              <div className="flex items-center gap-x-2 text-xs sm:text-sm">
                <p>{blogData[0].date}</p>
                <p>{blogData[0].author}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
