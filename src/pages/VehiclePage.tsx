import { Link, useParams } from "react-router-dom";
import ConsumptionCard from "../components/ConsumptionCard";
import RangeCard from "../components/RangeCard";
import { getVehicle } from "../utils/data";

export default function VehiclePage() {
  const { id } = useParams();
  const vehicle = getVehicle(Number(id));

  if (vehicle == null) return <div>Ajoneuvoa ei löytynyt!</div>;

  return (
    <div className="main-container">
      <div className="path">
        <Link to="/" className="link">
          FLTP tietokanta
        </Link>
        <span className="separator">&gt;</span>
        <span>Cupra</span>
      </div>
      <div className="model-year">
        {vehicle?.firstYear}-{vehicle?.lastYear}
      </div>
      <div className="brand">{vehicle?.brand}</div>
      <div>{vehicle?.model}</div>
      <div className="thank-you">
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
