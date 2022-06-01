import { useState } from "react";
import "./ZoneSelector.css";

function ZoneSelector() {
  const zones = [1, 2, 3, 4, 5];

  const [selectedZone, setSelectedZone] = useState(1);

  const isSelected = (zone: number) =>
    zone === selectedZone ? "btn-selected" : "";

  return (
      <div className="zone-btns">
        {zones.map((zone) => {
          if (zone === 5) {
            return (
              <button
                className={isSelected(zone)}
                onClick={() => setSelectedZone(zone)}
              >
                Alle soner
              </button>
            );
          }
          return (
            <button
              className={isSelected(zone)}
              onClick={() => setSelectedZone(zone)}
            >
              {zone} sone
            </button>
          );
        })}
      </div>
  );
}

export default ZoneSelector;
