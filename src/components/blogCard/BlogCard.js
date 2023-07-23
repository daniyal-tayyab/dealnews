import React from "react";

import styled from "styled-components";

import blog from "../../images/blog.webp";
import { flexColumn } from "../../styles/common";
import { colors } from "../../styles/colors";
import { calculateHoursPassed } from "../../utils/calculatehour";

const Container = styled.div`
  padding: 8px;
  width: 312px;
  height: 112px;
  display: flex;

  img {
    width: 95px;
    height: 96px;
    margin-right: 16px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.borderGray};
  }
`;

const Content = styled.div`
  width: 184px;
  height: 96px;
  ${flexColumn};
  justify-content: space-between;
  cursor: pointer;
`;

const Time = styled.div`
  font-size: 12px;
  margin-top: 5px;
  color: rgb(127, 131, 135);
`;

const Title = styled.div`
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.div`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 5px;
  font-weight: 300;
`;

const BlogCard = ({ item }) => {
  return (
    <Container>
      <img src={item.featured_image} alt="blog" loading="lazy" />
      <Content>
        <Time>
          Blog - Roundups - {calculateHoursPassed(item.created_at)} day ago
        </Time>
        <Title>{item.blog_title}</Title>
        <Description>{item.blog_content}</Description>
      </Content>
    </Container>
  );
};

export default BlogCard;
