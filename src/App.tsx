import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import DatabasePage from "./pages/DatabasePage";
import HelpPage from "./pages/HelpPage";
import NotFoundPage from "./pages/NotFoundPage";
import VehiclePage from "./pages/VehiclePage";
import "./App.css";

export default function App() {
  const [responsive, setResponsive] = useState(false);

  const handleBarsClick = () => {
    setResponsive(!responsive);
  };

  return (
    <>
      <div
        className={"main-container topnav" + (responsive ? " responsive" : "")}
      >
        <Link to="/" className="active">
          FLTP.fi
        </Link>
        <Link to="/">Etusivu</Link>
        <Link to="/help">Ohjeita osallistujille</Link>
        <Link to="/database">FLTP tietokanta</Link>
        <Link to="#" className="icon" onClick={handleBarsClick}>
          <FaBars />
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<DatabasePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/database" element={<DatabasePage />} />
        <Route path="/vehicle/:id" element={<VehiclePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
