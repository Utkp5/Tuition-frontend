import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function Navbar() {

  const [toggle,settoggle] = useState(false);

  return (
    <div className="navbar bg-teal-400 ">

      <div className="flex-1">
        {
          toggle ? <RxCross2 className='lg:hidden block text-white' onClick={() => settoggle(!toggle)} size={26}/> : <AiOutlineMenu className='lg:hidden block text-white' onClick={() => settoggle(!toggle)} size={26}/>        
        }
        <a className="normal-case text-xl lg:block hidden">TUITION</a>
      </div>


      <div className="flex-none gap-2">

        <div className="mx-6 lg:block sm:hidden">
          <ul className="flex flex-row ">
             <li className="text-xl p-1 mr-4 "><NavLink to="/">Home</NavLink></li>
             <li className="text-xl p-1 ml-4 mr-4"><NavLink to="/About">About Us</NavLink></li>
             <li className="text-xl p-1 ml-4 mr-4"><NavLink to="/Contact">Contact Us</NavLink></li>
             <li className="text-xl p-1 ml-4 mr-4"><NavLink to="/Admission_letter">Admission letter </NavLink></li>
             <li className="text-xl p-1 ml-4 mr-4"><NavLink to="/Login_Register">Login/Register </NavLink></li>
          </ul>
        </div>

        {/*mobile responsive*/}
        <div className= {`${toggle ? 'left-[0]' : 'left-[100%]'} duration-300 py-8 mx-6 w-full h-full lg:hidden block fixed flex-col bg-black z-[1] top-[66px] text-white`}>
          <ul className="">             
             <li className="text-xl p-1 py-4 ml-4 mr-4 font-bold"><NavLink to="/">TUITION</NavLink></li>
             <hr className="mb-4"/>
             <li className="text-xl p-1 py-4 ml-4 mr-4"><NavLink to="/">Home</NavLink></li>
             <li className="text-xl p-1 py-4 ml-4 mr-4"><NavLink to="/About">About Us</NavLink></li>
             <li className="text-xl p-1 py-4 ml-4 mr-4"><NavLink to="/Contact">Contact Us</NavLink></li>
             <li className="text-xl p-1 py-4 ml-4 mr-4"><NavLink to="/Admission_letter">Admission letter </NavLink></li>
             <li className="text-xl p-1 py-4 ml-4 mr-4"><NavLink to="/Login_Register">Login/Register </NavLink></li>
          </ul>
        </div>
        {/*mobile responsive*/}


        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full"><img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/></div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li><NavLink to="/Profile" className="text-xl">Profile</NavLink></li>
            <li><NavLink to="/Settings" className="text-xl">Settings</NavLink></li>
            <li><NavLink to="/Logout" className="text-xl">Logout</NavLink></li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default Navbar;
