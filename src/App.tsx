import "./style/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import LabelBottomNavigation from "./components/LabelBottomNavigation";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Toolbar from "@mui/material/Toolbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Toolbar />
        <LabelBottomNavigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
