const Jobs = () => {
  return (
    <div className="h-full w-full py-4">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#317e89] to-[#1094A9] h-[10rem] lg:h-[12rem] w-full rounded-xl flex items-center px-6 lg:px-10 py-5">
        <div className="w-1/2 text-white">
          <h1 className="text-2xl lg:text-3xl font-bold">Looking for Jobs?</h1>
          <p className="text-sm lg:text-base mt-2">Let's find your next opportunity!</p>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            src="../assets/content.png" // Replace with the actual image path
            alt="Document"
            className="w-[6rem] lg:w-[8rem]"
          />
        </div>
      </div>
      <div className="h-auto w-full bg-zinc-400  pb-5">
          {/* Tabs Section */}
      <div className=" w-full mt-4 rounded-xl shadow-md px-6 lg:px-10 py-4 bg-red-200">
        <div className="flex space-x-5 border-b pb-3">
          <button className="text-sm lg:text-base font-semibold text-gray-600 border-b-2 border-transparent hover:border-[#1094A9]">
            All Applicants
          </button>
          <button className="text-sm lg:text-base font-semibold text-gray-600 border-b-2 border-transparent hover:border-[#1094A9]">
            Recent Applicants
          </button>
          <button className="text-sm lg:text-base font-semibold text-[#1094A9] border-b-2 border-[#1094A9]">
            My Vacancies
          </button>
        </div>
      </div>

      {/* Filter and Search Section
      <div className="flex items-center  justify-between bg-green-300 mt-4 px-6 lg:px-10 py-4 shadow-md rounded-xl">
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-sm bg-[#1094A9] text-white rounded-lg shadow-md">
            All Vacancies
          </button>
          <button className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
            Active
          </button>
          <button className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
            In-Active
          </button>
        </div>
        <div className="flex items-center border rounded-lg px-4 py-2 w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none text-sm w-full"
          />
          <i className="ri-search-line text-gray-500 text-lg"></i>
        </div>
      </div> */}

      {/* Job Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 lg:px-10 mt-4 ">
        {/* Job Card */}
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 flex items-center space-x-4"
            >
              <div className="w-1/6">
                <img
                  src="/images/logo-placeholder.png" // Replace with actual logo path
                  alt="Company Logo"
                  className="w-full"
                />
              </div>
              <div className="w-4/6">
                <h1 className="text-base font-semibold text-[#004A56]">
                  {index % 2 === 0 ? "Business Developer Manager" : "IT Recruiter"}
                </h1>
                <p className="text-sm text-gray-500">TechFusion International Pvt Ltd</p>
                <p className="text-xs text-gray-400">Entry Level · Full-Time</p>
              </div>
              <div className="w-1/6 text-right">
                <h2 className="text-sm font-semibold text-[#004A56]">
                  ${index % 2 === 0 ? "255" : "300"}
                </h2>
                <span
                  className={`text-xs bg-black font-semibold px-2 py-1 rounded-lg ${
                    index % 2 === 0 ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
                  }`}
                >
                  {index % 2 === 0 ? "Active" : "In-Active"}
                </span>
              </div>
            </div>
          ))}
      </div>
      </div>
     
    </div>
  );
};

export default Jobs;
