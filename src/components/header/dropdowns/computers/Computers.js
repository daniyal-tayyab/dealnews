import React, { useContext } from "react";

import { SubmenuContext } from "../../../../context/submenu.context";

import { Container, List, Title } from "../clothing/Clothing.styles";

import NavItem from "../../navItem/NavItem";

import {
  computers,
  tabs,
  peripherals,
  storage,
  coupons,
} from "../../../../utils/nav";
import { Divider } from "../../../../styles/common";

const Computers = () => {
  const { setSubmenuHover } = useContext(SubmenuContext);
  return (
    <Container
      onMouseEnter={() => setSubmenuHover("computers")}
      onMouseLeave={() => setSubmenuHover(null)}
      style={{ width: "51rem" }}
    >
      <List>
        <ul>
          {computers.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
        <Divider />
        <Title>IPADS & TABLETS</Title>
        <ul>
          {tabs.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
      </List>
      <List>
        <Title>PERIPHERALS</Title>
        <ul>
          {peripherals.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
        <Title>STORAGE, ACCESSORIES, & UPGRADES</Title>
        <ul>
          {storage.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
        <Divider />
        <NavItem item="all computers" />
      </List>
      <List>
        <Title>STORE COUPONS</Title>
        <ul>
          {coupons.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
      </List>
    </Container>
  );
};

export default Computers;
