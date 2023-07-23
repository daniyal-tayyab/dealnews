import React from "react";

import { Container, ExpandIcon } from "./NavItemSub.styles";

const NavItemSub = ({ item, handleHover }) => {
  return (
    <Container
      onMouseEnter={() => handleHover(item)}
      onMouseLeave={() => handleHover(null)}
    >
      {item} <ExpandIcon className="expand-icon" />
    </Container>
  );
};

export default NavItemSub;
