import styled from "styled-components";

import { navLinkStyles, flexColumn } from "../../../../styles/common";

export const Container = styled.div`
  ${navLinkStyles};
  z-index: 10;
  width: 18rem;
  display: ${(props) => (props.hover === "categories" ? "block" : "none")};
`;

export const InnerContainer = styled.div`
  ${flexColumn};
`;
