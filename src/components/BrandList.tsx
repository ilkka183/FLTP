import VehicleCard from "./VehicleCard";
import { Brand, Vehicle, getVehicles } from "../types/data";
import { useNavigate } from "react-router-dom";

interface Props {
  brand: Brand;
}

export default function BrandList({ brand }: Props) {
  const navigate = useNavigate();

  const handleClick = (vehicle: Vehicle) => {
    navigate("/vehicle/" + vehicle.id);
  };

  const vehicles = getVehicles(brand.name);

  return (
    <div>
      <h3>{brand.name}</h3>
      <div>
        {vehicles.map((vehicle, index) => (
          <div key={index}>
            <VehicleCard vehicle={vehicle} onClick={handleClick} />
          </div>
        ))}
      </div>
    </div>
  );
}
