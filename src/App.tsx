import { Route, Routes } from "react-router-dom";
import DatabasePage from "./pages/DatabasePage";
import HelpPage from "./pages/HelpPage";
import NotFoundPage from "./pages/NotFoundPage";
import VehiclePage from "./pages/VehiclePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DatabasePage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/database" element={<DatabasePage />} />
      <Route path="/vehicle/:id" element={<VehiclePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
