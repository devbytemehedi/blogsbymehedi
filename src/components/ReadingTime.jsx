import {PropTypes} from "prop-types";
const ReadingTime = ({readingTime}) => {
  return (
    <div className="border-indigo-500 bg-indigo-600 bg-opacity-10 h-12 font-bold text-indigo-600 w-full rounded-lg text-xl text-center flex justify-center items-center border-solid border">
      Spent time on read: {readingTime} min
    </div>
  );
};

ReadingTime.propTypes = {
  readingTime: PropTypes.number.isRequired,
};
export default ReadingTime;
