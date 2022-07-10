import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Parts from "./pages/parts";
import Assamble from "./pages/assamble";
import Fisnish from "./pages/finish";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-parts" element={<Parts />} />
          <Route path="/assamble" element={<Assamble />} />
          <Route path="/finish" element={<Fisnish />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
