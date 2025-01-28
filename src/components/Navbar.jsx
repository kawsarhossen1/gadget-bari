import { CiShoppingCart, CiHeart } from "react-icons/ci";


const Navbar = () => {
  return (
    <div className="navbar md:px-8 mt-8 text-white bg-[#9538E2]">
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
            <li>
              <a>Home</a>
            </li>
            
            <li>
              <a>Statistics</a>
            </li>
            
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>New Arrival</a>
            </li>
          </ul>
        </div>
        <a className=" text-xl">Gadget Bari</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
              <a>Home</a>
            </li>
            
            <li>
              <a>Statistics</a>
            </li>
            
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>New Arrival</a>
            </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <a className="bg-white rounded-full p-2 text-black  border-[#0b0b0b1a] "><CiShoppingCart /></a>
        <a className="bg-white rounded-full p-2 text-black border-[#0b0b0b1a] "><CiHeart /></a>
      </div>
    </div>
  );
};

export default Navbar;
