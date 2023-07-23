import React, { useContext } from "react";

import { SubmenuContext } from "../../../../context/submenu.context";

import NavItem from "../../navItem/NavItem";

import { Container, List, Title } from "../clothing/Clothing.styles";

import { Divider } from "../../../../styles/common";

import {
  tools,
  hFurniture,
  kitchen,
  food,
  stCoupon,
} from "../../../../utils/nav";

const HomeGarden = () => {
  const { setSubmenuHover } = useContext(SubmenuContext);

  return (
    <Container
      onMouseEnter={() => setSubmenuHover("home & garden")}
      onMouseLeave={() => setSubmenuHover(null)}
    >
      <List>
        <Title>TOOLS & GARDEN</Title>
        <ul>
          {tools.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
        <Divider />
        <Title>FURNITURE & DECOR</Title>
        <ul>
          {hFurniture.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
      </List>
      <List>
        <Title>KITCHEN & BATH</Title>
        <ul>
          {kitchen.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
        <Divider />
        <Title>Household Items</Title>
        <NavItem item="robot vacuums" />
        <Divider />
        <Title>FOOD & DRINK</Title>
        <ul>
          {food.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
        <Divider />
        <NavItem item="all home & garden" />
      </List>
      <List>
        <Title>STORE COUPONS</Title>
        <ul>
          {stCoupon.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
        <Divider />
        <NavItem item="all home coupons" />
      </List>
    </Container>
  );
};

export default HomeGarden;
