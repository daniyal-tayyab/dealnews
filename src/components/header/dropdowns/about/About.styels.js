import styled from "styled-components";

import { navLinkStyles } from "../../../../styles/common";

export const Container = styled.div`
  ${navLinkStyles};
  width: 20rem;
  display: ${(props) => (props.hover === "about" ? "block" : "none")};
`;
