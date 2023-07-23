import React from "react";

import { Container } from "./Blog.styles";
import { blogs } from "../../../../utils/nav";
import NavItem from "../../navItem/NavItem";
import { Divider } from "../../../../styles/common";

const Blog = ({ hover }) => {
  return (
    <Container hover={hover}>
      {blogs.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
      <Divider />
      <NavItem item="all blog articles" />
    </Container>
  );
};

export default Blog;
