import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";


const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


    const location = useLocation();


    const routeTitles = {
      "/": "Dashboard",
      "/jobs": "Jobs",
      "/employment": "Employment",
      "/job-seekers": "Job Seekers",
      "/content-strategy": "Content Strategy",
      "/settings": "Settings",
    };

    const currentTitle = routeTitles[location.pathname] || "Dashboard";

  return (
    <div className="h-screen w-full flex flex-row bg-white">
      {/* Sidebar */}
      <div 
      className={`mySidebar
      ${isSidebarOpen ? "block absolute z-50 left-0 h-full" : "hidden"}
         md:w-[20%] md:block`}>
        <Sidebar handleToggle={handleToggle} />
      </div>

      {/* Main Content */}
      <div className="main flex-1   overflow-y-auto">
        <div className="flex items-center justify-between  h-20  w-full sticky top-0 border-b-2">
          <div className=" h-full w-full px-4 flex items-center justify-between">
            <div className="flex items-center gap-3 ">
              <button className="md:hidden" onClick={handleToggle}>
                <i className="ri-menu-line text-2xl"></i>
              </button>
 {/* Dynamic title */}
 <h1 className="text-xl font-semibold">{currentTitle}</h1>            </div>
            <div className="flex items-center gap-3">
             <div className="h-8 w-8 bg-[#119EB5] text-white rounded-full flex items-center justify-center">
             <i className="ri-notification-4-line "></i>
             </div>
             <div className="h-8 w-8 bg-[#119EB5] text-white rounded-full flex items-center justify-center">
              <i className="ri-user-3-line text-sm"></i>
             </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
