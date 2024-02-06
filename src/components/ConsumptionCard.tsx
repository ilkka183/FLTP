interface Props {
  title: string;
  consumption: number;
}

export default function ConsumptionCard({ title, consumption }: Props) {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-value">{consumption}</div>
      <div className="card-unit">kWh/100 km</div>
    </div>
  );
}
