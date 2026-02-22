import React from "react";
import Pad from "./components/Pad";
import padsData from "./pads";

export default function App() {
  const [pads, setPads] = React.useState(padsData);

  function toggle(id) {
    // console.log(id);
    setPads((prevPads) => prevPads.map((pad) => pad.id===id ? {...pad, on: !pad.on} : pad));
  }

  const buttonElements = pads.map((pad) => (
    <Pad
      toggle={toggle}
      id={pad.id}
      // key={pad.id} wrong way to pass key
      color={pad.color}
      on={pad.on}
    />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
      <button className="all-off">Turn All Off</button>
    </main>
  );
}
