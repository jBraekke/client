import Price from "../components/price/Price";
import ZoneSelector from "../components/zone-selector/ZoneSelector";

function Prices() {
  const priceTypes = [
    { name: "Voksen", price: 39, currency: "kr" },
    { name: "Barn", price: 20, currency: "kr" },
    { name: "Ungdom", price: 39, currency: "kr" },
    { name: "Student", price: 39, currency: "kr" },
    { name: "Honnør", price: 20, currency: "kr" },
    { name: "Militær", price: 20, currency: "kr" },
  ] as IPriceType[];

  return (
    <>
      <h1>Enkeltbillett</h1>
      <p>Enkeltbilletten gjelder for én reise med overgang.</p>

      <h3>Pris</h3>
      <p>Velg antall soner</p>
      <ZoneSelector />
      <div style={{ paddingTop: 15 }}>
        {priceTypes.map((type) => (
          <Price {...type} />
        ))}
      </div>
    </>
  );
}

export default Prices;
