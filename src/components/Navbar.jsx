import {FaGithub} from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-300">
        BlogsByMehedi
      </h1>
      <div className="flex justify-center items-center gap-4">
        <div>
          <a href="https://dub.sh/firecoder">
            <img className="w-8 lg:w-10" src="/icon.png" alt="BurnImage" />
          </a>
        </div>
        <div className="avatar">
          <a
            href="https://github.com/devbytemehedi"
            className="text-2xl lg:text-4xl fill-black dark:fill-white"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
