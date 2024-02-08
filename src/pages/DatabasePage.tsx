import BrandList from "../components/BrandList";
import { brands } from "../utils/data";

export default function DatabasePage() {
  return (
    <div className="main-container">
      <h2>Tietokanta</h2>
      {brands.map((brand, index) => (
        <BrandList key={index} brand={brand} />
      ))}
    </div>
  );
}
