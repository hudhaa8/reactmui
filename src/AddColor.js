import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = {
    background: color,
  };
  const [colorList, setColorList] = useState([
    "lightblue",
    "purple",
    "lightgreen",
  ]);
  return (
    <div>
      <input
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a Color" />
      <button onClick={() => setColorList([...colorList, color])}>
        Add Color
      </button>

      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
