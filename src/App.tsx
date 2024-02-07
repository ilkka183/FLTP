import BrandsList from "./components/BrandsList";
import { brands } from "./types/data";

export default function App() {
  return (
    <>
      <BrandsList brands={brands} />
    </>
  );
}
