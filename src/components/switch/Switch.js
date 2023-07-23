import React from "react";

import { Conatainer, Toggle } from "./Switch.styles";

const Switch = ({ toggleSwitch, isSwitch }) => {
  return (
    <Conatainer onClick={toggleSwitch} switch={isSwitch}>
      <Toggle switch={isSwitch} />
    </Conatainer>
  );
};

export default Switch;
