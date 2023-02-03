import "./style/App.css";
import LabelBottomNavigation from "./components/LabelBottomNavigation";
import Navbar from "./components/Navbar";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Toolbar />
      <Outlet />
      <Toolbar />
      <LabelBottomNavigation />
    </div>
  );
}

export default App;
