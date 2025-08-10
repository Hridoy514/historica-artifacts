import { Link, NavLink } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { FaLeaf, FaMoon, FaSun, FaBars } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    logout()
      .then(() => toast.success("Logout successful!"))
      .catch(() => toast.error("Logout failed"));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-amber-500 font-semibold underline underline-offset-4"
              : "hover:text-amber-400 transition"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-artifacts"
          className={({ isActive }) =>
            isActive
              ? "text-amber-500 font-semibold underline underline-offset-4"
              : "hover:text-amber-400 transition"
          }
        >
          All Artifacts
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-artifact"
          className={({ isActive }) =>
            isActive
              ? "text-amber-500 font-semibold underline underline-offset-4"
              : "hover:text-amber-400 transition"
          }
        >
          Add Artifact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 md:px-8">
      <div className="flex-1">
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold flex items-center gap-2 text-amber-600 dark:text-amber-500"
        >
          Historica
        </Link>
      </div>

      {/* Centered NavLinks (Desktop) */}
      <div className="hidden lg:flex justify-start flex-1">
        <ul className="menu-horizontal gap-10 items-center text-sm font-medium">
          {navLinks}
        </ul>
      </div>

      {/* Right Section: Theme Toggle & Auth */}
      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="btn btn-ghost text-xl"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        {/* Auth */}
        {!user ? (
          <Link
            to="/login"
            className="btn btn-sm bg-amber-500 text-white hover:bg-amber-600"
          >
            Login
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user.photoURL || "/avatar.png"} alt="User Avatar" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 text-sm space-y-1"
            >
              <li className="font-semibold">{user.displayName}</li>
              <li>
                <NavLink to="/my-artifact">My Artifacts</NavLink>
              </li>
              <li>
                <NavLink to="/liked-artifacts">Liked Artifacts</NavLink>
              </li>
              <li>
                <button onClick={handleLogout} className="text-red-500">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Mobile Dropdown Nav */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost text-xl">
            <FaBars />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-60 text-sm font-medium space-y-1"
          >
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
