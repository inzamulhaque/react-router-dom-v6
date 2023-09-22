import { NavLink } from "react-router-dom";

export default function Menu({ userStatus }) {
  return (
    <>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <NavLink
                className="md:p-4 py-2 block hover:text-purple-400"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="md:p-4 py-2 block hover:text-purple-400"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="md:p-4 py-2 block hover:text-purple-400"
                to="/protected"
              >
                Protected
              </NavLink>
            </li>
            {userStatus && (
              <li>
                <NavLink
                  className="md:p-4 py-2 block hover:text-purple-400"
                  to="/private"
                >
                  Private
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                to="/signin"
              >
                Sign In
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
