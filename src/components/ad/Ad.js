import React from "react";

import styled from "styled-components";

import { colors } from "../../styles/colors";
// 314 295

const Container = styled.div`
  width: 314px;
  min-height: 295px;
  border: 1px solid ${colors.borderGray};
  padding: 6px;
  padding-bottom: 22px;
  border-radius: 5px;
  margin-bottom: 2rem;

  span {
    font-weight: 300;
    font-size: 1rem;
    text-transform: uppercase;
  }

  img {
    width: 300px;
    height: 250px;
    margin-top: 5px;
  }
`;

const Ad = ({ source }) => {
  return (
    <Container>
      <span>advertisment</span>
      {source && <img src={source} alt="ad" loading="lazy" />}
    </Container>
  );
};

export default Ad;
