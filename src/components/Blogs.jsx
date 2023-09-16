import {useEffect, useState} from "react";
import Blog from "./Blog";
import {PropTypes} from "prop-types";

const Blogs = ({addToBookmark, addReadingTime}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/devbytemehedi/673b94c4061ccc253520736bc3c3380f/raw/0c6ab4aa07d3306986a42b8d33bed01e041c0059/blogsbymehedi.json"
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="grid grid-cols-1 place-items-center md:flex md:flex-col md:items-center md:justify-center md:gap-5">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          addToBookmark={addToBookmark}
          addReadingTime={addReadingTime}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  addToBookmark: PropTypes.func.isRequired,
  addReadingTime: PropTypes.func.isRequired,
};

export default Blogs;
