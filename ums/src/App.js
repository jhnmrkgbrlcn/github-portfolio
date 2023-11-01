import "./App.css";
import List from "./Examples/list";
import Button from "./Examples/handleClick";
import OnChange from "./Examples/onChange";
import Count from "./Examples/useState";
import Prop from "./Examples/prop";
import Heart from "./Examples/heart";
import Show from "./Examples/show";
import Sample from "./Examples/sample";
import Navbar from "./components/Home/navbar";
import Sidebar from "./components/Home/sidebar";

function App() {
  return (
    <>
      <Sidebar />
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
