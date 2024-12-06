import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Employment from "./pages/Employment";
import JobSeekers from "./pages/JobSeekers";
import ContentStrategy from "./pages/ContentStrategy";
import Setting from "./pages/Setting";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/job-seekers" element={<JobSeekers />} />
        <Route path="/content-strategy" element={<ContentStrategy />} />
        <Route path="/settings" element={<Setting />} />
      
      </Route>
    </Routes>
  );
};

export default App;
