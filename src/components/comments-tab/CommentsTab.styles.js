import styled from "styled-components";
import { alignCenter, flexColumn } from "../../styles/common";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  ${alignCenter};
  justify-content: center;
  padding: 2rem;
`;

export const Content = styled.div`
  ${flexColumn};
  row-gap: 2rem;
  font-size: 1.6rem;
  text-align: center;
  color: ${colors.timeGray};
  font-weight: 400;
`;

export const ButtonContainer = styled.div`
  ${alignCenter};
  column-gap: 5px;
`;

export const Button = styled.div`
  padding: 1.3rem 1.8rem;
  color: #fff;
  font-size: 1.5rem;
  background-color: ${colors.bluePrimary};
  border-radius: 3px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
