import "./App.css";
import Content from "./components/Content/Content";
import NavBar from "../src/components/Navbar/Navbar";
import Slogan from "./components/Slogan/Slogan";
function App() {
  return (
    <div className="main-container">
      <NavBar />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
