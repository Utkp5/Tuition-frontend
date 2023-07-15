import React from "react";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100">

      <div className="flex-1">
        <HiMenu size={32} className="invisible"/>
        <a className="normal-case text-xl">TUITION</a>
      </div>

      <div className="flex-none gap-2">

        <div className="mx-6">
          <ul className="flex flex-row ">
             <li className="text-xl border-blue-700 border-2 p-1"><NavLink to="/">Home</NavLink></li>
             <li className="text-xl border-blue-700 border-2 p-1 ml-4 mr-4"><NavLink to="/About">About Us</NavLink></li>
             <li className="text-xl border-blue-700 border-2 p-1 ml-4 mr-4"><NavLink to="/Contact">Contact Us</NavLink></li>
             <li className="text-xl border-blue-700 border-2 p-1 ml-4 mr-4"><NavLink to="/Admission_letter">Admission letter </NavLink></li>
             <li className="text-xl border-blue-700 border-2 p-1 ml-4 mr-4"><NavLink to="/Login_Register">Login/Register </NavLink></li>
          </ul>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full"><img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/></div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li><NavLink to="/Profile" className="">Profile</NavLink></li>
            <li><NavLink to="/Settings">Settings</NavLink></li>
            <li><NavLink to="/Logout">Logout</NavLink></li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default Navbar;
