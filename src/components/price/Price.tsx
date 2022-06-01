import "./Price.css";

function Price(type: IPriceType) {
  return <div className="price">Type: {type.name} Pris: {type.price},- kr</div>;
}

export default Price;
