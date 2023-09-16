import {PropTypes} from "prop-types";
import {FaBookReader} from "react-icons/fa";
const ReadingTime = ({readingTime}) => {
  return (
    <div className=" bg-indigo-600 bg-opacity-10 h-12 font-bold text-indigo-600 w-full rounded-lg text-base lg:text-lg text-center flex justify-center items-center gap-2">
      <FaBookReader /> Reading Time: {readingTime} min
    </div>
  );
};

ReadingTime.propTypes = {
  readingTime: PropTypes.number.isRequired,
};
export default ReadingTime;
