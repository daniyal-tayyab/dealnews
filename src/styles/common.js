import styled, { css } from "styled-components";
import { colors } from "../styles/colors";

export const alignCenter = css`
  display: flex;
  align-items: center;
`;

export const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const spaceBtween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const colSpaceBetween = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const navLinkStyles = css`
  position: absolute;
  top: 6rem;
  left: 0;
  padding: 1rem 0;
  background-color: ${colors.white};
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);
`;

export const subNavLinkStyles = css`
  position: absolute;
  top: 0;
  left: 18rem;
  padding: 1rem 0;
  background-color: ${colors.white};
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);
`;

export const Divider = styled.div`
  height: 1px;
  background-color: ${colors.veryLighGray};
  margin: 7px 5px;
`;

export const BlogDivider = styled.div`
  height: 1px;
  background-color: ${colors.borderGray};
`;
