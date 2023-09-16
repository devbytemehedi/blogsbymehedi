import {PropTypes} from "prop-types";
const BookmarkedBlog = ({title}) => {
  return (
    <div className="bg-gray-900 bg-opacity-50 rounded-lg  p-3 w-full h-fit font-semibold">
      {title}
    </div>
  );
};

BookmarkedBlog.propTypes = {
  title: PropTypes.string.isRequired,
};
export default BookmarkedBlog;
