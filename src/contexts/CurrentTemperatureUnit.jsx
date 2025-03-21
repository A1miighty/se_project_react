import { createContext } from "react";

const CurrentTemperatureUnitContext = createContext({
  currentTemperatureUnit: "C",
  toggleTemperatureUnit: () => {},
});

export default CurrentTemperatureUnitContext;
