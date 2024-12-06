import {  NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import logout from "../assets/logout.png";
import BackpackOutlinedIcon from "@mui/icons-material/BackpackOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Sidebar = ({handleToggle}) => {
  return (
    <div id='sidebar' className="h-full relative py-8 shadow-md bg-white">
      {/* Logo Section */}
      <div className="logo h-14 w-[90%] flex items-center md:ml-8 gap-3 mx-auto">
        <div className="close">
          <i className="ri-close"></i>
        </div>
        <div className="flex items-center gap-3">
        <img src={logo} className="h-10 w-10" alt="logo" />
        <h1 className="text-xl font-semibold">Techeunoia</h1>
        </div>
      </div>

      <div
      onClick={handleToggle}
      className="close md:hidden  absolute h-8 w-8 top-6 right-0 bg-zinc-100 flex items-center justify-center ">
      <i className="ri-arrow-left-double-line text-3xl"></i>
           </div>

      {/* Navigation Links */}
      <div className="nav-links mt-10 px-6 space-y-4">
        <div className="space-y-3">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition duration-300 ${
              isActive
                ? "bg-[#119EB5] text-white"
                : "bg-white hover:bg-[#119EB5] hover:text-white"
            }`
          }
        >
          <i className="ri-home-5-line text-2xl"></i>
          <span className="font-semibold">Dashboard</span>
        </NavLink>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition duration-300 ${
              isActive
                ? "bg-[#119EB5] text-white"
                : "bg-white hover:bg-[#119EB5] hover:text-white"
            }`
          }
        >
          <BackpackOutlinedIcon />
          <span className="font-semibold">Jobs</span>
        </NavLink>
        <NavLink
          to="/employment"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition duration-300 ${
              isActive
                ? "bg-[#119EB5] text-white"
                : "bg-white hover:bg-[#119EB5] hover:text-white"
            }`
          }
        >
          <i className="ri-briefcase-4-line text-2xl"></i>
          <span className="font-semibold">Employment</span>
        </NavLink>
        <NavLink
          to="/job-seekers"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition duration-300 ${
              isActive
                ? "bg-[#119EB5] text-white"
                : "bg-white hover:bg-[#119EB5] hover:text-white"
            }`
          }
        >
          <i className="ri-user-search-line text-2xl"></i>
          <span className="font-semibold">Job Seekers</span>
        </NavLink>
        <NavLink
          to="/content-strategy"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition duration-300 ${
              isActive
                ? "bg-[#119EB5] text-white"
                : "bg-white hover:bg-[#119EB5] hover:text-white"
            }`
          }
        >
          <i className="ri-book-2-line text-2xl"></i>
          <span className="font-semibold">Content Strategy</span>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition duration-300 ${
              isActive
                ? "bg-[#119EB5] text-white"
                : "bg-white hover:bg-[#119EB5] hover:text-white"
            }`
          }
        >
          <SettingsOutlinedIcon />
          <span className="font-semibold">Settings</span>
        </NavLink>
        </div>
      </div>

      {/* Logout Section */}
      <div className="mt-44 md:mt-20 px-6">
        <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg hover:bg-gray-100 hover:text-zinc-600 cursor-pointer">
          <img src={logout} className="h-8 w-8 ml-2 md:ml-4" alt="logout" />
          <span className="font-semibold">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
