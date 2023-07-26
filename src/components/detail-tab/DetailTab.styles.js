import styled from "styled-components";

import { alignCenter, flexColumn } from "../../styles/common";
import { colors } from "../../styles/colors";

import { AiOutlineClockCircle } from "react-icons/ai";
import { FaFire } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 1rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const DetailList = styled.div`
  min-width: 23.2rem;
  ${flexColumn};
  padding: 2rem;
  border-right: 1px solid ${colors.borderGray};

  @media (max-width: 700px) {
    border-right: 1px solid transparent;
  }
`;

export const DetailContent = styled.div`
  padding: 1rem;
  flex: 2;
  ${flexColumn};
  min-width: 0;
`;

export const BreadCrumsContainer = styled.div`
  ${flexColumn};
  padding: 5px;
`;

export const BreadCrumbItem = styled.p`
  font-size: 1.4rem;
  color: ${colors.bluePrimary};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  overflow-x: auto;
  padding-bottom: 5px;

  &::-webkit-scrollbar {
    height: 5px;
    background-color: darkgrey;
  }

  &::-webkit-scrollbar-thumb {
    cursor: pointer;
  }

  div {
    margin-right: 1rem;
  }
`;

export const Tag = styled.div`
  width: fit-content;
  block-size: fit-content;
  min-width: max-content;
  padding: 5px 8px;
  border-radius: 15px;
  border: 1px solid ${colors.veryLighGrayII};
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 400;

  &:hover {
    background-color: ${colors.veryLightblue};
    color: ${colors.bluePrimary};
    border-color: ${colors.bluePrimary};
    text-decoration: underline;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  ${flexColumn};
  text-align: left;
  font-size: 1.4rem;
  color: ${colors.timeGray};
  font-weight: 300;
  overflow: hidden;
`;

export const ListItem = styled.div`
  padding: 1rem;
  font-weight: 300;
  font-size: 1.4rem;
  ${alignCenter};
  column-gap: 1rem;
  color: ${colors.timeGray};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  img {
    width: 26px;
    height: 26px;
  }
`;

export const ClockIcon = styled(AiOutlineClockCircle)`
  font-size: 2rem;
`;

export const FireIcon = styled(FaFire)`
  font-size: 2rem;
`;
