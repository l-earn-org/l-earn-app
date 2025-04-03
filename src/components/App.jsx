import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Temp } from "../pages/Temp.jsx";
import { Landing } from "../pages/Landing.jsx";
import { Home } from "../pages/Home.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Temp />}></Route>
      <Route path="/landing" element={<Landing />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
