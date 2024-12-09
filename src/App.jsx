import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Employment from "./pages/Employment";
import JobSeekers from "./pages/JobSeekers";
import ContentStrategy from "./pages/ContentStrategy";
import Setting from "./pages/Setting";
import AuthLayout from "./layouts/AuthLayout";
import Register from "./pages/Register";

const App = () => {
  return (
    <Routes>


     {/* Auth Routes */}
     <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<AuthLayout />} />
        {/* Uncomment if these routes are added */}
         <Route path="register" element={<Register />} />
       {/* <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} /> */}
      </Route>


    
         {/* Main App Routes */}
         <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="employment" element={<Employment />} />
        <Route path="job-seekers" element={<JobSeekers />} />
        <Route path="content-strategy" element={<ContentStrategy />} />
        <Route path="settings" element={<Setting />} />
      </Route>
    </Routes>
  );
};

export default App;
