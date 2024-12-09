import right from '../assets/rightimg.png';
import shadowImage from '../assets/shadowImage.png';
import DashboardImage from '../assets/DashboardImage.png';
import DashboardBoxComponent from '../components/dashboardBoxComponent';

const Dashboard = () => {
  const jobData = [
    {
      title: "IT Recruiter",
      position: "Associate Recruiter",
      salary: 300,
      status: "Active",
    },
    {
      title: "Business Development",
      position: "Senior Recruiter",
      salary: 300,
      status: "Active",
    },
    {
      title: "Software Developer",
      position: "HR Department",
      salary: 300,
      status: "Active",
    },
    {
      title: "Marketing Manager",
      position: "Marketing Manager",
      salary: 300,
      status: "In-Active",
    }
  ];

  return (
    
      <div className="h-screen w-full">
        <div className="banner relative h-[40vh] mt-4 bg-[#1094A9] rounded-2xl">
          <div className="h-full relative w-full overflow-hidden rounded-2xl">
            <div className="BannerRight">
              <img
                className="absolute right-2 bottom-[-14%] w-[40%] max-w-[200px] lg:max-w-[300px]"
                src={right}
                alt=""
              />
            </div>
            <div className="DashboardBannerRight z-50 absolute h-full left-[-5%] bottom-[-5%]">
              <img
                className="w-[60%] max-w-[300px] lg:max-w-[400px]"
                src={shadowImage}
                alt="shadowImage"
              />
            </div>
          </div>
          <div className="DashboardBannerCenter sm:hidden  md:block absolute bottom-0 left-[50%] transform translate-x-[-50%]">
            <img
              src={DashboardImage}
              alt="Dashboard"
              className="z-50  max-w-[200px] lg:max-w-[300px]"
            />
          </div>
          <div className="dashboardBannerText w-full h-full absolute top-0 z-50 py-4 px-4 sm:py-16 sm:px-8 xl:py-10 xl:px-8 lg:py-8   flex">
            <div className="w-full">
              <h1 className="text-[#004A56] text-lg sm:text-2xl font-semibold molish-600">
                <span className="text-xl sm:text-[24px] xl:text-3xl lg:text-3xl">Welcome </span>
                <span className="text-white">,</span>
              </h1>
              <h2 className="text-white text-lg sm:text-[1.10rem] xl:text-2xl lg:text-[1.7rem] lg:mt-1 font-semibold">
                TechEunoia International
              </h2>
              <p className="text-white text-[0.8rem] sm:text-[1rem] xl:text-[1.15rem]  lg:text-[18px] lg:mt-2  mt-[4px] w-[80%] sm:w-[75%] xl:w-[48%] lg:w-[66%]  molish-500">
                <span className="uppercase text-[10px] sm:text-[10px] xl:text-[1.15rem] lg:text-[18px]">
                  Techeunoia
                </span>
                {" "}
                  progressive best digital marketing agency that supports
                businesses for online achievement.
              </p>
            </div>
            <div className="outergrow h-16 sm:h-16 w-32 sm:w-36 xl:w-44 xl:h-20 px-[1px] mr-4 sm:mr-8 mt-[-2%] xl:mr-28 bg-gradient-to-r rounded-md from-[#ffffffdb] opacity-100 to-transparent border-gradient flex justify-center items-center">
              <div className="h-[70px] sm:h-[62px] xl:w-[9.9rem] xl:h-[4.9rem]  w-[98%] py-3 pl-2 font-semibold bg-gradient-to-r from-[#5029293e] rounded-md flex-col items-center">
                <div className="h-full w-full ">
                  <h2 className="text-white text-xl sm:text-[1.21rem] xl:text-[1.8rem]">150%</h2>
                  <p className="text-white text-[10px] sm:text-[11px] xl:text-[15px]">
                    Business Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboardGrid  w-full py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
  {/* Box 1 */}
  <div className=" rounded-lg shadow-md h-auto"> 
  <DashboardBoxComponent title="Jobs" jobData={jobData} />
  </div>

  {/* Box 2 */}
  <div className=" rounded-lg shadow-md">
     <DashboardBoxComponent title="Employment" jobData={jobData} />
  </div>

  {/* Box 3 (Row Span 2) */}
  <div className="bg-green-200 h-[300px] mt-10 md:mt-0 lg:mt-0 rounded-lg shadow-md row-span-2">
    <p>Box 3 (Row Span 2)</p>
  </div>

   {/* Box 4 */}
   <div className=" rounded-lg shadow-md h-auto"> 
  <DashboardBoxComponent title="Jobs" jobData={jobData} />
  </div>

  {/* Box 5 */}
  <div className=" rounded-lg shadow-md ">
     <DashboardBoxComponent title="Employment" jobData={jobData} />
  </div>
  </div>
</div>
  );
};

export default Dashboard;
