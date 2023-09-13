import BookmarkIcon from "./BookmarkIcon";
import PropTypes from "prop-types";
import MarkReadIcon from "./MarkReadIcon";
const Blog = ({blog, addToBookmark, addReadingTime}) => {
  const {
    id,
    coverImage,
    userImage,
    userName,
    postDate,
    title,
    tags,
    readingTime,
  } = blog;
  return (
    <div
      key={id}
      className="w-[700px] border border-solid rounded-lg bg-gray-100"
    >
      <div className="blog-cover p-5">
        <img className="rounded-lg w-fit" src={coverImage} alt="coverImage" />
      </div>
      <div className="blog-body px-5">
        <div className="flex justify-between items-center pt-5">
          <div className="flex gap-4 items-center">
            <img
              className="rounded-full w-14"
              src={userImage}
              alt="userImage"
            />
            <div>
              <h3 className="font-bold text-2xl">{userName}</h3>
              <p className=" opacity-50 font-semibold">{postDate}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" opacity-50 font-medium">{readingTime} min read</p>
            <BookmarkIcon addToBookmark={addToBookmark} blog={blog} />
          </div>
        </div>
        <h2 className="text-4xl font-bold pt-5">{title}</h2>
        <p className=" opacity-50 pt-5 font-medium">
          {tags.map((tag, idx) => (
            <span key={idx} className="pr-2 hover:text-purple-500">
              <a href="#">{tag}</a>
            </span>
          ))}
        </p>
        <div
          onClick={() => addReadingTime(id, readingTime)}
          className="py-2 mt-5 text-center border-t border-solid text-indigo-700 underline cursor-pointer hover:text-purple-700 font-semibold flex justify-center items-center gap-2"
        >
          <MarkReadIcon /> Mark as read
        </div>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  addToBookmark: PropTypes.func.isRequired,
  addReadingTime: PropTypes.func.isRequired,
};
export default Blog;
