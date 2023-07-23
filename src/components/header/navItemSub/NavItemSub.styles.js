import styled from "styled-components";

import { colors } from "../../../styles/colors";
import { spaceBtween } from "../../../styles/common";

import { IoIosArrowForward } from "react-icons/io";

export const Container = styled.div`
  color: ${colors.bluePrimary};
  ${spaceBtween};
  padding: 1rem;
  transition: all 0.15s;

  &:hover {
    background-color: ${colors.veryLighGray};
  }

  &:hover .expand-icon {
    transform: rotate(0);
  }
  position: relative;
`;

export const ExpandIcon = styled(IoIosArrowForward)`
  transform: rotate(90deg);
  transition: all 0.15s;
`;
