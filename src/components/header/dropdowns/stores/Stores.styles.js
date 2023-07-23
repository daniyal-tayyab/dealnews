import styled from "styled-components";

import { flexColumn, navLinkStyles } from "../../../../styles/common";

export const Container = styled.div`
  ${navLinkStyles};
  width: 26rem;
  display: ${(props) => (props.hover === "stores" ? "block" : "none")};
  z-index: 10;
`;

export const InnerContainer = styled.div`
  display: flex;
`;

export const List = styled.div`
  ${flexColumn};
  flex: 1;
`;
