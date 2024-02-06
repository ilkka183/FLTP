import { useParams } from "react-router-dom";
import { getVehicle } from "../types/data";

export default function VehicleView() {
  const params = useParams();
  const vehicle = getVehicle(Number(params.id));

  if (vehicle == null) return <div>Ajoneuvoa ei löytynyt!</div>;

  return (
    <div className="main-container">
      <h2>{vehicle?.brand}</h2>
      <div>{vehicle?.model}</div>
      <div>
        Kiitos kaikille FLTP:n osallistujille. Ilman teitä, näitä tuloksia ei
        olisi.
      </div>
      <h3>Ranget</h3>
      <h3>FLTP Range</h3>
      <h3>FLTP Kulutus</h3>
      <h3>Kulutus kesällä</h3>
      <h3>Kulutus kevällä</h3>
      <h3>Kulutus talvella</h3>
    </div>
  );
}
