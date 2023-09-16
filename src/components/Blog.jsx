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
      className="w-[350px] md:w-96 lg:w-[700px]  rounded-lg bg-gray-800"
    >
      <div className="blog-cover p-5">
        <img className="rounded-lg w-fit" src={coverImage} alt="coverImage" />
      </div>
      <div className="blog-body px-5">
        <div className="flex justify-between items-center pt-5">
          <div className="flex gap-4 items-center">
            <img
              className="rounded-full w-10 md:w-14"
              src={userImage}
              alt="userImage"
            />
            <div>
              <h3 className="font-bold text-lg md:text-2xl">{userName}</h3>
              <div className="text-sm opacity-50 font-semibold flex items-center gap-2">
                <p>{postDate}</p>
                <p className="block lg:hidden">({readingTime} min read)</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-base opacity-50 font-medium hidden lg:block">
              {readingTime} min read
            </p>
            <BookmarkIcon addToBookmark={addToBookmark} blog={blog} />
          </div>
        </div>
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold pt-5">
          {title}
        </h2>
        <p className="flex flex-wrap opacity-50 pt-5 font-medium">
          {tags.map((tag, idx) => (
            <span key={idx} className="pr-2 hover:text-purple-500">
              <a href="#">{tag}</a>
            </span>
          ))}
        </p>
        <div
          onClick={() => addReadingTime(id, readingTime)}
          className="py-2 my-5 text-center border-2 rounded-xl border-gray-700 border-solid text-indigo-700 underline cursor-pointer hover:text-purple-700 hover:bg-purple-700 hover:bg-opacity-20 font-semibold flex justify-center items-center gap-2"
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
