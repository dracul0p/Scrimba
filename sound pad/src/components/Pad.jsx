import React from "react";

export default function Pad(props) {
  // const [on, setOn] = React.useState(props.on);

  return (
    <button
      style={{ backgroundColor: props.color }}
      className={props.on ? "on" : undefined}
      onClick={() => props.toggle(props.id)}
    ></button>
  );
}

// export default function Pad(props) {
//   const [change, setChange] = React.useState(props.on);

//   return (
//     <button
//       onClick={() => setChange(!change)}
//       style={{ backgroundColor: props.color }}
//       className={change ? "on" : undefined}
//     ></button>
//   );
// }
