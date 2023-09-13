import {PropTypes} from "prop-types";
const BookmarkIcon = ({blog, addToBookmark}) => {
  return (
    <button
      className="cursor-pointer hover:text-red-500"
      onClick={() => addToBookmark(blog)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-bookmark opacity-50 w-5 h-5 "
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
      </svg>
    </button>
  );
};
BookmarkIcon.propTypes = {
  addToBookmark: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired,
};
export default BookmarkIcon;
