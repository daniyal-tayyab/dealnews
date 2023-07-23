import React from "react";

import { Drawer } from "@mui/material";

import {
  Container,
  Header,
  SignInButton,
  Accordian,
  AccordianSummary,
  AccordianDetails,
  ExpandIcon,
} from "./DrawerNav.styles";

import { Divider } from "../../../styles/common";
import {
  blogs,
  cameras,
  categoires,
  children,
  computers,
  coupons,
  ePeripherals,
  entertainment,
  food,
  hFurniture,
  kitchen,
  leftStores,
  men,
  peripherals,
  phones,
  reviews,
  rightStores,
  sCoupon,
  stCoupon,
  storage,
  storeCoupon,
  tabs,
  tools,
  tv,
  women,
} from "../../../utils/nav";

import ExtendedNavItem from "../../header/navItem/ExtendedNavItem";
import { ExtendedTitle } from "../../header/navItem/ExtendedStyles";

const DrawerNav = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Container>
        <Header>
          <SignInButton>Sign In</SignInButton>
        </Header>
        <Accordian>
          <AccordianSummary expandIcon={<ExpandIcon />}>
            <p>Categories</p>
          </AccordianSummary>
          <AccordianDetails>
            <Accordian>
              <AccordianSummary expandIcon={<ExpandIcon />}>
                <p>Clothing</p>
              </AccordianSummary>
              <AccordianDetails>
                <ExtendedTitle>MEN</ExtendedTitle>
                <ul>
                  {men.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedTitle>children</ExtendedTitle>
                <ul>
                  {children.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedTitle>women</ExtendedTitle>
                <ul>
                  {women.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedTitle>travel</ExtendedTitle>
                <ExtendedNavItem item="luggage" />
                <Divider />
                <ExtendedNavItem item="All Clothing" />
                <ExtendedTitle>store coupons</ExtendedTitle>
                <ul>
                  {storeCoupon.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedNavItem item="All Clothing Coupons" />
              </AccordianDetails>
            </Accordian>
            <Accordian>
              <AccordianSummary expandIcon={<ExpandIcon />}>
                <p>Computers</p>
              </AccordianSummary>
              <AccordianDetails>
                <ul>
                  {computers.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedTitle>ipads & tablets</ExtendedTitle>
                <ul>
                  {tabs.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <ExtendedTitle>peripherals</ExtendedTitle>
                <ul>
                  {peripherals.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedTitle>storage, asseccories & updates</ExtendedTitle>
                <ul>
                  {storage.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedNavItem item="All Computers" />
                <ExtendedTitle>store coupons</ExtendedTitle>
                <ul>
                  {coupons.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedNavItem item="All Computer Coupons" />
              </AccordianDetails>
            </Accordian>
            <Accordian>
              <AccordianSummary expandIcon={<ExpandIcon />}>
                <p>Electronics</p>
              </AccordianSummary>
              <AccordianDetails>
                <ExtendedTitle>tv sizes</ExtendedTitle>
                <ul>
                  {tv.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedTitle>peripherals</ExtendedTitle>
                <ul>
                  {ePeripherals.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedTitle>entertainment</ExtendedTitle>
                <ul>
                  {entertainment.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <ExtendedTitle>phones, tablets, & asseccories</ExtendedTitle>
                <ul>
                  {phones.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedTitle>cameras & accessories</ExtendedTitle>
                <ul>
                  {cameras.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedNavItem item="All Electronics" />
                <ExtendedTitle>store coupons</ExtendedTitle>
                <ul>
                  {sCoupon.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedNavItem item="All Electronics Coupons" />
              </AccordianDetails>
            </Accordian>
            <Accordian>
              <AccordianSummary expandIcon={<ExpandIcon />}>
                <p>Home & Garden</p>
              </AccordianSummary>
              <AccordianDetails>
                <ExtendedTitle>tools & garden</ExtendedTitle>
                <ul>
                  {tools.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedTitle>FURNITURE & DECOR</ExtendedTitle>
                <ul>
                  {hFurniture.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <ExtendedTitle>ktichen & bath</ExtendedTitle>
                <ul>
                  {kitchen.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedTitle>household items</ExtendedTitle>
                <ExtendedNavItem item="Robot Vacuums" />
                <Divider />
                <ExtendedTitle>food & drink</ExtendedTitle>
                <ul>
                  {food.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedNavItem item="All Home & Garden" />
                <ExtendedTitle>store coupons</ExtendedTitle>
                <ul>
                  {stCoupon.map((item, index) => (
                    <ExtendedNavItem key={index} item={item} />
                  ))}
                </ul>
                <Divider />
                <ExtendedNavItem item="all home coupons" />
              </AccordianDetails>
            </Accordian>
            <Divider />
            <ul>
              {categoires.map((item, index) => (
                <ExtendedNavItem key={index} item={item} />
              ))}
            </ul>
          </AccordianDetails>
        </Accordian>
        <Accordian>
          <AccordianSummary expandIcon={<ExpandIcon />}>
            <p>Stores</p>
          </AccordianSummary>
          <AccordianDetails>
            <ul>
              {leftStores.map((item, index) => (
                <ExtendedNavItem key={index} item={item} />
              ))}
            </ul>
            <ul>
              {rightStores.map((item, index) => (
                <ExtendedNavItem key={index} item={item} />
              ))}
            </ul>
            <Divider />
            <ExtendedNavItem item="All Stores" />
          </AccordianDetails>
        </Accordian>
        <Accordian>
          <AccordianSummary expandIcon={<ExpandIcon />}>
            <p>Blog</p>
          </AccordianSummary>
          <AccordianDetails>
            <ul>
              {blogs.map((item, index) => (
                <ExtendedNavItem key={index} item={item} />
              ))}
            </ul>
            <Divider />
            <ExtendedNavItem item="All Blog Articles" />
          </AccordianDetails>
        </Accordian>
        <Accordian>
          <AccordianSummary expandIcon={<ExpandIcon />}>
            <p>Reviews</p>
          </AccordianSummary>
          <AccordianDetails>
            <ul>
              {reviews.map((item, index) => (
                <ExtendedNavItem key={index} item={item} />
              ))}
            </ul>
          </AccordianDetails>
        </Accordian>
      </Container>
    </Drawer>
  );
};

export default DrawerNav;
