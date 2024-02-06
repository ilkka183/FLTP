import VehicleCard from "./VehicleCard";
import { Brand, Vehicle } from "../types/Data";

interface Props {
  brand: Brand;
}

export default function BrandList({ brand }: Props) {
  const handleClick = (vehicle: Vehicle) => {
    alert(vehicle.model);
  };

  return (
    <div>
      <h3>{brand.name}</h3>
      <div>
        {brand.vehicles.map((vehicle, index) => (
          <div key={index}>
            <VehicleCard vehicle={vehicle} onClick={handleClick} />
          </div>
        ))}
      </div>
    </div>
  );
}
