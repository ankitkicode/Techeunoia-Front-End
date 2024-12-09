import React, { useState } from "react";

const InputField = ({ type, icon, placeholder, id }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="form-group w-full my-5 relative px-3 py-1 flex items-center justify-between gap-2 border-[#b8b8b8] border-2 rounded-[0.2rem]">
      <button
        type="button"
        className="relative h-full w-auto flex items-center justify-center"
      >
        <img src={icon} className="h-6" alt="icon" />
      </button>
      <div className="relative h-full w-[90%]">
        <input
          type={type === "password" && !showPassword ? "password" : "text"}
          id={id}
          placeholder={placeholder}
          className="w-full h-10 text-[#8F8989] outline-none"
        />
        {type === "password" && (
          <button
            type="button"
            onClick={handleTogglePassword}
            aria-label={showPassword ? "Hide the password" : "Show the password"}
            className="eye-button absolute right-1 top-[50%] translate-y-[-50%] "
            id="eye-button"
          >
            {showPassword ? (
              <i className="ri-eye-off-line text-[1.18rem]"></i>
            ) : (
              <i className="ri-eye-line text-[1.18rem]"></i>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;