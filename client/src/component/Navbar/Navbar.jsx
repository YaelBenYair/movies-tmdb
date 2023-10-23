import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center h-24 mx-auto px-4 text-white w-[90%]">
        <ul className="flex">
          <li className="p-4 w-max hover:underline">
            <Link to={"/"}>popular</Link>
          </li>
          <li className="p-4 w-max hover:underline">
            <Link to={"/now-playing"}>now playing</Link>
          </li>
          <li className="p-4 w-max hover:underline">
            <Link to={"/my-favorite"}>my favorites</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
