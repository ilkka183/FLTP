import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import VehicleView from "../views/VehicleView";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/vehicle/:id", element: <VehicleView /> },
]);

export default router;
