import React from "react";
import Logo from "./Navbarlogo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div>
      <div className="upper-navbar flex bg-orange-200  items-center justify-between py-2 px-5 sm:px-10">
        <div className="upper-left ">
          <a href="#" className=" text-2xl flex gap-1">
            <img className=" w-12" src={Logo} alt="logo" />
            <h3 className="font-medium sm:text-2xl">Shopsy</h3>
          </a>
        </div>
        <div className="upper-right flex items-center gap-3 ">
          <div className="group relative" >
            <input type="text " placeholder="Search"
            className=" w-50 group-hover:w-75 transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-300  "
             />
             <IoMdSearch className=" text-2xl text-gray-500 group-hover:text-orange-400 absolute top-2 right-3"/>
          </div>
          <div>
            <button className="  bg-gradient-to-r from-orange-300 to-orange-400 text-white rounded-full px-3 py-1 flex gap-2  transition-all duration-200 group">
 <span className="group-hover:block hidden transition-all duration-200">Order</span>
<span className="pt-1"><  FaCartShopping />
</span>
            </button>
           
          </div>
          <div><button>Theme </button></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
