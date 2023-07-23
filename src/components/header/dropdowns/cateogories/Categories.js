import React, { useContext } from "react";

import { Container, InnerContainer } from "./Categories.styles";
import NavItemSub from "../../navItemSub/NavItemSub";
import { Divider } from "../../../../styles/common";
import NavItem from "../../navItem/NavItem";

import { categoriesSub, categoires } from "../../../../utils/nav";
import Clothing from "../clothing/Clothing";
import Computers from "../computers/Computers";
import Electronics from "../electronics/Electronics";
import HomeGarden from "../home&garden/HomeGarden";
import { SubmenuContext } from "../../../../context/submenu.context";

const Categories = ({ hover }) => {
  const { submenuHover, setSubmenuHover } = useContext(SubmenuContext);

  const handleSubMenuHover = (item) => {
    setSubmenuHover(item);
  };

  return (
    <Container hover={hover}>
      <InnerContainer>
        <ul>
          {categoriesSub.map((item, index) => (
            <NavItemSub
              key={index}
              item={item}
              handleHover={handleSubMenuHover}
            />
          ))}
        </ul>
        {submenuHover === "clothing" ? (
          <Clothing />
        ) : submenuHover === "computers" ? (
          <Computers />
        ) : submenuHover === "electronics" ? (
          <Electronics />
        ) : submenuHover === "home & garden" ? (
          <HomeGarden />
        ) : (
          <></>
        )}
        <Divider />
        <ul>
          {categoires.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
        <Divider />
        <NavItem item="all categories" />
      </InnerContainer>
    </Container>
  );
};

export default Categories;
