import React, { useContext } from "react";

import { SubmenuContext } from "../../../../context/submenu.context";

import NavItem from "../../navItem/NavItem";

import { Container, List, Title } from "./Clothing.styles";
import { Divider } from "../../../../styles/common";

import { men, children, women, storeCoupon } from "../../../../utils/nav";

const Clothing = () => {
  const { setSubmenuHover } = useContext(SubmenuContext);

  return (
    <Container
      onMouseEnter={() => setSubmenuHover("clothing")}
      onMouseLeave={() => setSubmenuHover(null)}
    >
      <List>
        <Title>men</Title>
        <ul>
          {men.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
        <Divider />
        <Title style={{ marginTop: "7px" }}>children</Title>
        <ul>
          {children.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
      </List>
      <List>
        <Title>women</Title>
        <ul>
          {women.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
        <Divider />
        <Title style={{ marginTop: "7px" }}>Travel</Title>
        <NavItem item="luggage" />
        <Divider />
        <NavItem item="all clothing" />
      </List>
      <List>
        <Title>store coupons</Title>
        <ul>
          {storeCoupon.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
        <Divider />
        <NavItem item="all clothing coupons" />
      </List>
    </Container>
  );
};

export default Clothing;
