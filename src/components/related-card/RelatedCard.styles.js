import styled from "styled-components";
import { alignCenter, flexColumn } from "../../styles/common";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 16.8rem;
  ${flexColumn};
`;

export const Image = styled.img`
  height: 15.2rem;
  width: 100%;
`;

export const Content = styled.div`
  ${flexColumn};
  padding: 1rem;
  font-size: 1.2rem;
  row-gap: 0.8rem;
`;

export const TimeRatingContainer = styled.div`
  ${alignCenter};
  justify-content: space-between;
`;

export const Time = styled.div`
  color: ${colors.timeGray};
`;

export const Title = styled.p`
  color: ${colors.black};
  font-weight: 500;
  font-size: 1.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled.p`
  color: ${colors.green};
  font-weight: 500;
  font-size: 1.6rem;
`;
