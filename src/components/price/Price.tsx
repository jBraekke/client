import "./Price.css";

interface IPriceProp {
  type: IPriceType;
  zone: number;
}

function Price(props: IPriceProp) {
  const { type, zone } = props;

  const displayZone = zone !== 5 ? `${zone} sone` : "Alle soner";

  return (
    <div className="price-container">
      <div className="price-name">{type.name}</div>
      <div className="price-context">{displayZone}</div>
      <div className="price-context">{type.price * zone} ,- kr</div>
    </div>
  );
}

export default Price;
