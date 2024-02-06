interface Props {
  title: string;
  range: number;
}

export default function RangeCard({ title, range }: Props) {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-value">{range}</div>
      <div className="card-unit">km</div>
    </div>
  );
}
