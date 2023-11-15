import "./App.css";
import List from "./Examples/list";
import UseState from "./Examples/sampleRam";
import SampleRam from "./Examples/useState";

import { Outlet, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/Home/login";
import LogsTable from "./components/Home/logsTable";
import Navbar from "./components/Home/navbar";
import Profile from "./components/Home/profile";
import Role from "./components/Home/role";
import Settings from "./components/Home/settings";
import Sidebar from "./components/Home/sidebar";
import UserRegistration from "./components/Home/userRegistration";
import Users from "./components/Home/users";

const SidebarLayout = () => (
  <>
    <div className="container-scroller">
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  </>
);
const shet = () => (
  <>
    <div className="main-panel"></div>
  </>
);
function App() {
  return (
    <>
      <div className="main-panel">
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/dashboard" index element={<Home />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/role" element={<Role />}></Route>
            <Route path="/user/adduser" element={<UserRegistration />}></Route>
            <Route path="/user/profile" element={<Profile />}></Route>
            <Route path="/logs" element={<LogsTable />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
