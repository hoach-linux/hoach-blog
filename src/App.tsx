import "./style/App.css";
import { BrowserRouter } from "react-router-dom";
import LabelBottomNavigation from "./components/LabelBottomNavigation";
import Navbar from "./components/Navbar";
import Toolbar from "@mui/material/Toolbar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Toolbar />
        <AppRouter />
        <Toolbar />
        <LabelBottomNavigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
