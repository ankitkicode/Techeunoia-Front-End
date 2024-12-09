const DashboardBoxComponent = (props) => {
  const { jobData, title } = props;

  // Helper function to truncate text
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <div
      className={`w-full px-4 py-3 ${
        title === "Jobs" ? "bg-gradient-to-t from-[#004A56] to-[#1094A9]" : "bg-[#F2F2F2]"
      } rounded-lg shadow-md`}
    >
      {/* Header Section */}
      <div className="titles  flex items-center justify-between w-full">
        <h1
          className={`text-xl font-bold ${
            title === "Jobs" ? "text-white" : "text-[#004A56]"
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-sm font-medium ${
            title === "Jobs" ? "text-white" : "text-[#004A56] hidden"
          } cursor-pointer hover:underline`}
        >
          View All <span><i className="ri-arrow-right-line"></i></span>
        </p>
      </div>

      {/* Job Data Section */}
      <div className="mt-4 space-y-3">
        {jobData.map((data, index) => (
          <div
            className="dataShadow flex items-center justify-between w-full text-[#004A56]"
            key={index}
          >
            {/* Title */}
            <h1
              className={`text-sm font-semibold ${
                title === "Jobs" ? "text-white" : "text-[#004A56]"
              } w-[29%]`}
            >
              {truncateText(data.title, 10)}
            </h1>

            {/* Salary */}
            <h2
              className={`text-sm font-semibold ${
                title === "Jobs" ? "block text-white" : "hidden"
              }`}
            >
              ${data.salary}
            </h2>

            {/* Position */}
            <h2
              className={`text-[.70rem] font-normal ${
                title === "Employment" ? "block text-[#004A56]" : "hidden"
              }`}
            >
              {data.position}
            </h2>

            {/* Status Button */}
            <button
              className={`h-6 w-[13vh] bg-zinc-50 text-xs font-semibold rounded-full flex items-center justify-center ${
                data.status === "Active" ? "bg-green-100 text-green-700 button-shadow " : " button-shadow-red  text-red-700"
              }`}
            >
              {data.status === "Active" ? (
                <img src="/icons/active.svg" alt="active" className="h-4" />
              ) : (
                ""
              )}
              {data.status}
              {data.status === "Active" ? (
                ""
              ) : (
                <img src="/icons/in-active.svg" alt="inactive" className="h-4" />
              )}
              
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardBoxComponent;
