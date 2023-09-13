import {PropTypes} from "prop-types";
const BookmarkedBlog = ({title}) => {
  return (
    <div className="bg-white rounded-lg p-3 w-full h-fit font-semibold">
      {title}
    </div>
  );
};

BookmarkedBlog.propTypes = {
  title: PropTypes.string.isRequired,
};
export default BookmarkedBlog;
