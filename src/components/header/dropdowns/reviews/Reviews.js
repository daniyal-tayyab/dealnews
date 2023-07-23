import React from "react";

import { Container } from "./Reviews.styels";
import { reviews } from "../../../../utils/nav";
import NavItem from "../../navItem/NavItem";

const Reviews = ({ hover }) => {
  return (
    <Container hover={hover}>
      {reviews.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </Container>
  );
};

export default Reviews;
