import "./App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MaltratoPage } from "./pages/MaltratoPage";
import { HomePage } from "./pages/HomePage";
import { ProfesionalPage } from "./pages/ProfesionalPage";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/maltrato" element={<MaltratoPage />} />
        <Route path="/profesional" element={<ProfesionalPage />} />
      </Routes>
    </BrowserRouter>
  );
}
