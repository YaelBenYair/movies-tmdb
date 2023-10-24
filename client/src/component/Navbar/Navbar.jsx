import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  let activeStyle = {
    textDecoration: "solid underline white 3px",
    textUnderlineOffset: "4px",
  };
  return (
    <>
      <div className="flex justify-between items-center h-24 mx-auto ms:px-4 text-white w-[90%]">
        <ul className="flex">
          <li className=" p-3 md:p-4 w-max uppercase hover:text-gray-400">
            <NavLink
              to={"/"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              popular
            </NavLink>
          </li>
          <li className="p-3 md:p-4 w-max uppercase hover:text-gray-400">
            <NavLink
              to={"/now-playing"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              now playing
            </NavLink>
          </li>
          <li className="p-3 md:p-4 w-max uppercase hover:text-gray-400">
            <NavLink
              to={"/my-favorite"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              my favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
