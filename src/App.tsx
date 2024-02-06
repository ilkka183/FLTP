import BrandsList from "./components/BrandsList";
import { brands } from "./types/data";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <BrandsList brands={brands} />
    </>
  );
}
