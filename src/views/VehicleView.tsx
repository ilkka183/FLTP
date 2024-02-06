import { useParams } from "react-router-dom";
import ConsumptionCard from "../components/ConsumptionCard";
import RangeCard from "../components/RangeCard";
import { getVehicle } from "../types/data";

export default function VehicleView() {
  const params = useParams();
  const vehicle = getVehicle(Number(params.id));

  if (vehicle == null) return <div>Ajoneuvoa ei löytynyt!</div>;

  return (
    <div className="main-container">
      <div>
        {vehicle?.firstYear}-{vehicle?.lastYear}
      </div>
      <h2>{vehicle?.brand}</h2>
      <div>{vehicle?.model}</div>
      <div>
        Kiitos kaikille FLTP:n osallistujille. Ilman teitä, näitä tuloksia ei
        olisi.
      </div>
      <h3>Ranget</h3>
      <div className="card-container">
        <RangeCard title="WLTP" range={405} />
        <RangeCard title="FLTP" range={382} />
      </div>
      <h3>FLTP Range</h3>
      <div className="card-container">
        <RangeCard title="Kesä" range={460} />
        <RangeCard title="Kevät" range={420} />
        <RangeCard title="Talvi" range={320} />
        <RangeCard title="Yhdistetty" range={382} />
      </div>
      <h3>FLTP Kulutus</h3>
      <div className="card-container">
        <ConsumptionCard title="Kesä" consumption={12.62} />
        <ConsumptionCard title="Kevät" consumption={13.8} />
        <ConsumptionCard title="Talvi" consumption={19.17} />
        <ConsumptionCard title="Yhdistetty" consumption={15.2} />
      </div>
      <h3>Kulutus kesällä</h3>
      <div className="card-container">
        <ConsumptionCard title="Moottoritie" consumption={16.0} />
        <ConsumptionCard title="Maantie" consumption={11.1} />
        <ConsumptionCard title="Kaupunki" consumption={9.5} />
      </div>
      <h3>Kulutus kevällä</h3>
      <div className="card-container">
        <ConsumptionCard title="Moottoritie" consumption={17.7} />
        <ConsumptionCard title="Maantie" consumption={11.75} />
        <ConsumptionCard title="Kaupunki" consumption={10.7} />
      </div>
      <h3>Kulutus talvella</h3>
      <div className="card-container">
        <ConsumptionCard title="Moottoritie" consumption={22.0} />
        <ConsumptionCard title="Maantie" consumption={18.13} />
        <ConsumptionCard title="Kaupunki" consumption={16.18} />
      </div>
    </div>
  );
}
