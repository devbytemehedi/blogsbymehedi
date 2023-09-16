import BookmarkedBlog from "./BookmarkedBlog";
import ReadingTime from "./ReadingTime";
import {PropTypes} from "prop-types";
import {BsBookmarksFill} from "react-icons/bs";
const Bookmark = ({bookmarks, readingTime}) => {
  return (
    <div className="hidden md:flex flex-col w-full h-fit justify-center items-center gap-4">
      <ReadingTime readingTime={readingTime} />
      <div className="p-5 h-fit w-full bg-indigo-600 bg-opacity-10 rounded-lg">
        <h2 className="font-bold text-xl pt-2 pb-5 flex items-center gap-2 text-gray-300">
          <BsBookmarksFill /> Bookmarked: {bookmarks.length}
        </h2>
        <div className="flex flex-col gap-4 justify-center items-center">
          {bookmarks.map((blog, idx) => (
            <BookmarkedBlog key={idx} title={blog.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmark.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default Bookmark;
