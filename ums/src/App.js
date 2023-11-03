import "./App.css";
import List from "./Examples/list";
import SampleRam from "./Examples/useState";
import UseState from "./Examples/sampleRam";
import Button from "./Examples/handleClick";
import OnChange from "./Examples/onChange";
import Count from "./Examples/useState";
import Prop from "./Examples/prop";
import Heart from "./Examples/heart";
import Show from "./Examples/show";
import Sample from "./Examples/sample";

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
      {/* <Button /> */}
      {/* <List /> */}
      {/* <OnChange /> */}
      {/* <Count /> */}
      {/* <Prop /> */}
      {/* <Heart onClick={() => console.log("Clicked")} /> */}
      {/* <Show maxChars={20}>
        lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem ipsum
        dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
        dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
        dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
        dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
        dolor lorem ipsum dolorlorem ipsum dolorlorem ipsum dolor
      </Show> */}
      {/* <Sample /> */}
    </>
  );
}

export default App;
