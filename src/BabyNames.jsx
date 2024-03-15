import { useState } from "react";
import babyNamesData from "./babyNamesData.json";
function BabyNames() {
  const [babyNames, setBabyNamesData] = useState(babyNamesData);
  const sortedNamesData = babyNames
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      {sortedNamesData.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </>
  );
}

export default BabyNames;
