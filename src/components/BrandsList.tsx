import BrandList from "./BrandList";
import { Brand } from "../types/data";

interface Props {
  brands: Brand[];
}

export default function BrandsList({ brands }: Props) {
  return (
    <div className="main-container">
      <h2>Tietokanta</h2>
      {brands.map((brand, index) => (
        <BrandList key={index} brand={brand} />
      ))}
    </div>
  );
}
