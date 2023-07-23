import React, { useState } from "react";

import {
  HeaderContainer,
  Logo,
  Navigation,
  NavigationItem,
  NavExtended,
  About,
  Search,
  HeaderDown,
  Greaterthan,
  IndivdualNavItem,
  MenuIcon,
} from "./Header.styles";

import logo from "../../images/logo.png";
import Categories from "./dropdowns/cateogories/Categories";
import Stores from "./dropdowns/stores/Stores";

import { navLinks } from "../../utils/nav";
import Blog from "./dropdowns/blog/Blog";
import Reviews from "./dropdowns/reviews/Reviews";
import AboutDropdown from "./dropdowns/about/AboutDropdown";
import SearchDropdown from "./dropdowns/search/SearchDropdown";
import DrawerNav from "../drawers/drawerNav/DrawerNav";
import Modal from "../modal/Modal";

const Header = () => {
  const [navHover, setNavhover] = useState("");
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleNavhover = (navItem) => {
    setNavhover(navItem);
  };

  const handleToggleSearch = () => setToggleSearch((prevState) => !prevState);

  const handleMouseLeave = () => setNavhover("");

  const handleToggleDrawer = () => setToggleDrawer((prevState) => !prevState);

  return (
    <>
      <HeaderContainer>
        <DrawerNav open={toggleDrawer} onClose={handleToggleDrawer} />
        <MenuIcon onClick={handleToggleDrawer} />
        <Logo src={logo} alt="logo" />
        <Navigation>
          {navLinks &&
            navLinks.map((item, index) => (
              <NavigationItem
                key={index}
                onMouseEnter={() => handleNavhover(item)}
                onMouseLeave={handleMouseLeave}
              >
                {item}
                {item === "categories" ? (
                  <Categories hover={navHover} />
                ) : item === "stores" ? (
                  <Stores hover={navHover} />
                ) : item === "blog" ? (
                  <Blog hover={navHover} />
                ) : item === "reviews" ? (
                  <Reviews hover={navHover} />
                ) : (
                  <></>
                )}
              </NavigationItem>
            ))}
        </Navigation>
        <NavExtended>
          <IndivdualNavItem
            onMouseEnter={() => handleNavhover("about")}
            onMouseLeave={handleMouseLeave}
          >
            <About style={{ textTransform: "lowercase" }}>i</About>
            <AboutDropdown hover={navHover} />
          </IndivdualNavItem>
          <NavigationItem>
            <div>
              <Search onClick={handleToggleSearch} />
              <SearchDropdown toggle={toggleSearch} />
            </div>
          </NavigationItem>
          <IndivdualNavItem onClick={handleDialogOpen}>
            Sign In
          </IndivdualNavItem>
        </NavExtended>
      </HeaderContainer>
      <HeaderDown>
        <span>DealNews is reader-supported.</span> &nbsp;
        <div>
          We may earn commissions on qualifying purchases.&nbsp;
          <Greaterthan />
        </div>
      </HeaderDown>
      <Modal open={openDialog} handleClose={handleDialogClose} />
    </>
  );
};

export default Header;
