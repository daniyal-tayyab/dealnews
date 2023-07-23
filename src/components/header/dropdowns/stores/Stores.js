import React from "react";

import { Container, InnerContainer, List } from "./Stores.styles";
import { Divider } from "../../../../styles/common";
import NavItem from "../../navItem/NavItem";
import { leftStores, rightStores } from "../../../../utils/nav";

const Stores = ({ hover }) => {
  return (
    <Container hover={hover}>
      <InnerContainer>
        <List>
          <ul>
            {leftStores.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </ul>
        </List>
        <List>
          <ul>
            {rightStores.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </ul>
          <Divider />
          <NavItem item="all stores" />
        </List>
      </InnerContainer>
    </Container>
  );
};

export default Stores;
