import { Route, BrowseRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dex from "./pages/Dex";

function App() {
  return (
    <BrowseRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
      </Routes>
    </BrowseRouter>
  );
}

export default App;
