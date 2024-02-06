import { Vehicle } from "../types/data";

interface Props {
  vehicle: Vehicle;
  onClick: (vehicle: Vehicle) => void;
}

export default function VehicleCard({ vehicle, onClick }: Props) {
  return (
    <div className="vehicle-card" onClick={() => onClick(vehicle)}>
      <div className="model-year">
        <span>{vehicle.firstYear}</span>
        <span> - </span>
        <span>{vehicle.lastYear}</span>
      </div>
      <div className="model-name">{vehicle.model}</div>
    </div>
  );
}
