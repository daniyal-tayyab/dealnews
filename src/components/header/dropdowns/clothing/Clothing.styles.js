import styled from "styled-components";

import { flexColumn, subNavLinkStyles } from "../../../../styles/common";
import { colors } from "../../../../styles/colors";

export const Container = styled.div`
  ${subNavLinkStyles};
  display: flex;
  width: 45rem;
`;

export const List = styled.div`
  flex: 1;
  ${flexColumn};
`;

export const Title = styled.p`
  color: ${colors.black};
  text-transform: uppercase;
  margin-left: 1rem;
  margin-bottom: 5px;
  margin-top: 5px;
`;
