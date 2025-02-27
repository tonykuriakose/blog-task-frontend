import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useBlogStore } from "../store/useBlogStore";
import Banner from "../components/Banner";
import { FaHeart } from "react-icons/fa";

const Home = () => {
  const { blogs, fetchBlogs, likeBlog } = useBlogStore();
  const like=false

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleLike = async (blogId) => {
    await likeBlog(blogId);

  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <div className="py-8">
        <Banner />
        <div className="mt-30">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Explore Our Blogs.
          </h1>
        </div>
        {blogs.length === 0 ? (
          <p className="text-center text-gray-600">
            No blogs available. Be the first to create one!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 my-20">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                {blog.image ? (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500">
                  By {blog.author?.username || "Unknown Author"}
                </p>
                <p className="text-gray-600 mt-4 text-md line-clamp-2">
                  {blog.content?.substring(0, 100) || "No content available"}...
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-500">
                    <FaHeart  onClick={() => handleLike(blog._id,)} className="inline-block mr-1 text-2xl text-red-500 cursor-pointer">
                      Like
                    </FaHeart>{" "}
                    {blog.likes?.length || "0"} Likes
                  </span>
                  <Link
                    to={`/blog/${blog._id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
