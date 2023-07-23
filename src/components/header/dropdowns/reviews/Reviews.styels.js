import styled from "styled-components";

import { navLinkStyles } from "../../../../styles/common";

export const Container = styled.div`
  ${navLinkStyles};
  width: 16rem;
  z-index: 10;
  display: ${(props) => (props.hover === "reviews" ? "block" : "none")};
`;
