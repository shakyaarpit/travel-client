import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { handleSuccess } from "./utils";

const Navbar = () => {
  let admin = localStorage.getItem("email");
  let [active, setActive] = useState("");
  let [logedInUser, setLogedInUser] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    setLogedInUser(localStorage.getItem("logedInUser"));
  }, []);

  let handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("logedInUser");
    localStorage.removeItem("email");

    handleSuccess("logout successfully");
    setTimeout(() => {
      navigate("/login");
       window.location.href = "/login";
      
    }, [4000]);
  };
 
  return (
    <div className="sticky z-10 bg-base-100 top-0">
      <div className="   navbar  shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 "
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/destination">Destination</NavLink>
              </li>

              <li>
                <NavLink to="/booking">Booking</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              {admin == "arpitshakya9956@gmail.com" && (
                <li>
                  <NavLink to="/admin">Admin</NavLink>
                </li>
              )}
            </ul>
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost text-2xl font-bold hover:bg-amber-500"
          >
            Travel@Arpit
          </NavLink>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu  text-[19px] font-semibold menu-horizontal px-1 ">
            <li className="mr-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-amber-500 rounded-[8px] " : ""
                }
              >
                <button
                  className={active === "Home" ? "active" : ""}
                  onClick={() => setActive("Home")}
                >
                  Home
                </button>
              </NavLink>
            </li>

            <li className="mr-2">
              <NavLink
                to="/destination"
                className={({ isActive }) =>
                  isActive ? "bg-amber-500 rounded-[8px] " : ""
                }
              >
                <button
                  className={active === "Destination" ? "active" : ""}
                  onClick={() => setActive("Destination")}
                >
                  Destination
                </button>
              </NavLink>
            </li>

            <li className="mr-2">
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  isActive ? "bg-amber-500 rounded-[8px] " : ""
                }
              >
                <button
                  className={active === "Booking" ? "active" : ""}
                  onClick={() => setActive("Booking")}
                >
                  Booking
                </button>
              </NavLink>
            </li>

            <li className="mr-2">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "bg-amber-500 rounded-[8px] " : ""
                }
              >
                <button
                  className={active === "Blog" ? "active" : ""}
                  onClick={() => setActive("Blog")}
                >
                  Blog
                </button>
              </NavLink>
            </li>

            <li className="mr-2">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "bg-amber-500 rounded-[8px] " : ""
                }
              >
                <button
                  className={active === "Contact" ? "active" : ""}
                  onClick={() => setActive("Contact")}
                >
                  Contact
                </button>
              </NavLink>
            </li>

            {admin == "arpitshakya9956@gmail.com" && (
              <li className="mr-2">
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    isActive ? "bg-amber-500 rounded-[8px] " : ""
                  }
                >
                  <button
                    className={active === "Admin" ? "active" : ""}
                    onClick={() => setActive("Admin")}
                  >
                    Admin
                  </button>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end  font-bold mr-4 text-amber-500 text-[18px]  capitalize ">
          {logedInUser ? (
            <>
              {" "}
              <div className="hide"> welcome {logedInUser}</div>{" "}
            </>
          ) : (
            <NavLink
              to="/login"
              className="btn text-[17px] font-bold border-amber-500 hover:bg-amber-500 "
            >
              Login
            </NavLink>
          )}
        </div>
        {logedInUser && (
          <button
            className="btn border-amber-500 text-[17px] font-bold hover:bg-amber-500"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
