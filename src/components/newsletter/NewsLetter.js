import React from "react";

import styled from "styled-components";
import { colors } from "../../styles/colors";
import { flexColumn } from "../../styles/common";

const Container = styled.div`
  width: 312px;
  height: 193px;
  background-color: ${colors.bluePrimary};
  padding: 16px;
  margin-bottom: 2rem;
  color: #fff;
  border-radius: 1px;
  ${flexColumn};
`;

const Title = styled.div`
  font-size: 18px;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-top: 1rem;
`;

const Input = styled.input`
  margin-top: 1rem;
  padding: 1rem 0.8rem;
  border: none;
  outline: none;
`;

const Button = styled.div`
  padding: 1rem;
  background-color: #fff;
  color: ${colors.bluePrimary};
  border-radius: 2px;
  display: inline-block;
  width: fit-content;
  font-size: 14px;
  margin-top: 1rem;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Never Miss Another Deal</Title>
      <Description>
        Get the latest deals delivered straight to your inbox
      </Description>
      <Input placeholder="jdoe@example.com" />
      <Button>SIGN UP</Button>
    </Container>
  );
};
// 312 193
export default NewsLetter;
