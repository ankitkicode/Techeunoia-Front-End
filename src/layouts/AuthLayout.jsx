import { Outlet } from "react-router-dom"; // Import Outlet for nested routing

const AuthLayout = () => {
  return (
    <div className="auth-layout h-screen w-full">
      {/* This will render nested routes */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
