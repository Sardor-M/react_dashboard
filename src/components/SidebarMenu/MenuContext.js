import React from "react";

const MenuContext = React.createContext({
  entries: {},
  addEntry: () => {},
  removeEntry: () => {},
});

// function MenuContext() {
//   return <div>MenuContext</div>;
// }

export { MenuContext };
