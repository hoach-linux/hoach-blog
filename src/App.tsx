import "./style/App.css";
import LabelBottomNavigation from "./components/LabelBottomNavigation";
import Navbar from "./components/Navbar";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Toolbar />
      <AnimatePresence initial={false} mode={"wait"}>
        <Outlet />
      </AnimatePresence>
      <Toolbar />
      <LabelBottomNavigation />
    </div>
  );
}

export default App;
