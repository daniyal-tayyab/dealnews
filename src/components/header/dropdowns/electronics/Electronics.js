import React, { useContext } from "react";

import NavItem from "../../navItem/NavItem";

import { SubmenuContext } from "../../../../context/submenu.context";

import { Container, List, Title } from "../clothing/Clothing.styles";

import {
  tv,
  ePeripherals,
  entertainment,
  phones,
  cameras,
  sCoupon,
} from "../../../../utils/nav";

import { Divider } from "../../../../styles/common";

const Electronics = () => {
  const { setSubmenuHover } = useContext(SubmenuContext);

  return (
    <Container
      onMouseEnter={() => setSubmenuHover("electronics")}
      onMouseLeave={() => setSubmenuHover(null)}
    >
      <List>
        <Title>TV SIZES</Title>
        <ul>
          {tv.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
        <Divider />
        <Title>PERIPHERALS</Title>
        <ul>
          {ePeripherals.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
        <Divider />
        <Title>ENTERTAINMENT</Title>
        <ul>
          {entertainment.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
      </List>
      <List>
        <Title>phones</Title>
        <ul>
          {phones.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
        <Title>CAMERAS</Title>
        <ul>
          {cameras.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
        <Divider />
        <NavItem item="all electronics" />
      </List>
      <List>
        <Title>STORE COUPONS</Title>
        <ul>
          {sCoupon.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
        <Divider />
        <NavItem item="all electronics coupon" />
      </List>
    </Container>
  );
};

export default Electronics;
