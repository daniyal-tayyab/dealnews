import styled from "styled-components";

import { colors } from "../../../styles/colors";
import { spaceBtween } from "../../../styles/common";

export const Container = styled.div`
  color: ${colors.bluePrimary};
  ${spaceBtween};
  padding: 1rem;
  transition: all 0.15s;
  font-size: 1.4rem;
  text-transform: capitalize;

  &:hover {
    background-color: ${colors.veryLighGray};
  }

  &:hover .expand-icon {
    transform: rotate(0);
  }
  position: relative;
`;

export const ExtendedTitle = styled.p`
  font-size: 1.4rem;
  color: ${colors.black};
  text-transform: uppercase;
  margin-left: 1rem;
  margin-bottom: 5px;
  margin-top: 5px;
`;
