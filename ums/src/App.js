import "./App.css";
import Sidebar from "./components/Home/sidebar";
import Navbar from "./components/Home/navbar";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Home/users";
import Role from "./components/Home/role";
import Home from "./components/Home/home";

function App() {
  return (
    <>
      <div className="container-scroller">
        <Navbar />
        <Sidebar />

        <div className="main-panel">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users" element={<Role />}></Route>
            <Route path="/role" element={<Users />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
