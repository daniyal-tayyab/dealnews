import React from "react";

import { Container } from "./About.styels";
import { about } from "../../../../utils/nav";
import NavItem from "../../navItem/NavItem";

const AboutDropdown = ({ hover }) => {
  return (
    <Container hover={hover}>
      <ul>
        {about.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </ul>
    </Container>
  );
};

export default AboutDropdown;
