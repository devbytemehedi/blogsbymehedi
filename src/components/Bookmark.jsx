import BookmarkedBlog from "./BookmarkedBlog";
import ReadingTime from "./ReadingTime";
import {PropTypes} from "prop-types";

const Bookmark = ({bookmarks, readingTime}) => {
  return (
    <div className="flex flex-col w-full h-fit justify-center items-center gap-4">
      <ReadingTime readingTime={readingTime} />
      <div className="p-5 h-fit w-full bg-gray-100 rounded-lg">
        <h2 className="font-bold text-xl py-2">
          Bookmarked Blogs: {bookmarks.length}
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
