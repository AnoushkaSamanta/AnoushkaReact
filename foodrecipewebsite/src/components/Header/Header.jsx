import React from "react";
import '@fontsource/poppins'; // Defaults to weight 400
import '@fontsource/poppins/700.css'; // Bold
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="h-[40px] flex justify-around mt-[19px] " style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="h-[35px]  w-[115px] flex justify-between">
          <img src="/src/assets/images/hamburger.svg" alt="" />
          <img src="/src/assets/images/logo.png" alt="" />
        </div>
        <div className="flex">
          <div className="bg-gray-200 h-[40px]  flex justify-between p-[5px] rounded">
            <label htmlFor="">All categories</label>
            <select name="" id="" className="bg-gray-200"></select>
            <input
              type="text"
              placeholder=" | Search for recipes..."
              className="bg-gray-200 w-[280px]"
            />
          </div>
          <div
            className="h-[40px] w-[40px] p-[7px] rounded"
            style={{ backgroundColor: "#509E2F" }}
          >
            <img src="/src/assets/images/search.svg" alt="" width={22} />
          </div>
        </div>
        <div className="w-[200px]">
          <ul className="flex justify-between w-[200px]" >
          <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/explore"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                    }
                                >
                                    Explore
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/help"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                    }
                                >
                                    Help
                                </NavLink>
                            </li>
          </ul>
        </div>
        <div className="h-[35px] ">
          <img
            src="/src/assets/images/profile.jpg"
            alt=""
            className="rounded-full h-[35px]  w-[35px]"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
