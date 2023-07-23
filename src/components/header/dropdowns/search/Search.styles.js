import styled from "styled-components";

import { alignCenter } from "../../../../styles/common";
import { colors } from "../../../../styles/colors";

import { MdOutlineClose } from "react-icons/md";

export const Container = styled.div`
  position: fixed !important;
  right: 0;
  top: 6rem;
  height: 6rem;
  width: 50vw;
  display: ${(props) => (props.toggle ? "block" : "none")};
  padding: 1rem;
  background-color: ${colors.white};
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 770px) {
    width: 100vw;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  ${alignCenter};
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  outline: none;
  border: 1px solid ${colors.veryLighGray};
  padding-left: 1rem;
`;

export const SearchBtn = styled.button`
  height: 100%;
  margin-left: 5px;
  border-radius: 3px;
  border: none;
  padding: 1rem;
  font-size: 1.3rem;
  cursor: pointer;
  background-color: ${colors.blueDark};
  color: ${colors.white};
`;

export const CloseIcon = styled(MdOutlineClose)``;
