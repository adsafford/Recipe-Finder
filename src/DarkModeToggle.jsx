import { ToggleButton } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";

const toggleMode = () => {
  this.selected(!selected);
};

const darkToggle = () => {
  return (
    <ToggleButton
      value="LightMode"
      selected={selected}
      onChange={() => {
        () => toggleMode();
      }}
    >
      <LightModeIcon />
    </ToggleButton>
  );
};

export default darkToggle;
