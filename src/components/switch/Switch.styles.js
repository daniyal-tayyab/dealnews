import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Conatainer = styled.div`
  width: 35px;
  height: 18px;
  background-color: ${colors.lightGray};
  margin-left: auto;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
`;

export const Toggle = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  left: ${(props) => (props.switch ? "18px" : "2px")};
  top: 50%;
  transition: all 0.1s;
  transform: translate(0, -50%);
  border-radius: 10px;
  background-color: ${colors.white};
`;
