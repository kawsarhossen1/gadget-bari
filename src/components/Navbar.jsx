import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="border p-2 m-1 rounded-md ">
        <div className="bg-[#9538E2] rounded-md">
          <div className="navbar md:px-8 text-white">
            <div className="navbar-start">
              <div className="dropdown ">
                <div tabIndex={0} role="button" className="mx-4 lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
                >
                  <NavLink
                    className={({ isActive }) =>
                      `tab  ${isActive ? "text-warning" : "hover:text-warning"}`
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `tab  ${isActive ? "text-warning" : "hover:text-warning"}`
                    }
                    to="/statistics"
                  >
                    Statistics
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `tab  ${isActive ? "text-warning" : "hover:text-warning"}`
                    }
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `tab  ${isActive ? "text-warning" : "hover:text-warning"}`
                    }
                    to="/new-arrival"
                  >
                    New Arrival
                  </NavLink>
                </ul>
              </div>
              <a className=" text-xl">Gadget Bari</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-6">
                <NavLink className={({ isActive }) =>
                    `tab  ${isActive ? "bg-amber-200 rounded-md" : "hover:text-bold"}`
                  } to="/">Home</NavLink>
                <NavLink className={({ isActive }) =>
                    `tab  ${isActive ? "bg-amber-200 rounded-md" : "hover:text-bold"}`
                  } to="/statistics">Statistics</NavLink>
                <NavLink className={({ isActive }) =>
                    `tab  ${isActive ? "bg-amber-200 rounded-md" : "hover:text-bold"}`
                  } to="/dashboard">Dashboard</NavLink>
                <NavLink className={({ isActive }) =>
                    `tab  ${isActive ? "bg-amber-200 rounded-md" : "hover:text-bold"}`
                  } to="/new-arrival">New Arrival</NavLink>
              </ul>
            </div>
            <div className="navbar-end gap-4">
              <a className="bg-white rounded-full p-2 text-black  border-[#0b0b0b1a] ">
                <CiShoppingCart />
              </a>
              <a className="bg-white rounded-full p-2 text-black border-[#0b0b0b1a] ">
                <CiHeart />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center text-white md:mx-56">
            <h1 className="text-4xl md:text-[56px]  font-bold mb-6 ">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="font-normal text-[16px] mb-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="mb-[268px] py-[15px] px-[30px] bg-white text-[#9538E2] text-xl font-bold rounded-full">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
