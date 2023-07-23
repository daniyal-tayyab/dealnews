import styled from "styled-components";
import { colSpaceBetween, flexColumn } from "../../styles/common";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  ${colSpaceBetween};
  min-width: 16rem;
  max-width: 16rem;
  height: 27rem;
  border-radius: 1rem;
  background-color: #fff;
  margin: 2px;
  cursor: pointer;

  box-shadow: 0px 4px 7px -3px rgba(0, 0, 0, 0.75);
`;

export const Content = styled.div`
  padding: 5px;
  width: 100%;
  height: 23rem;
  ${flexColumn};

  img {
    height: 12rem;
    margin-bottom: 8px;
  }
`;

export const NameTime = styled.div`
  ${flexColumn};
  margin-bottom: 1rem;

  .time {
    margin: 5px 0;
    color: ${colors.timeGray};
    font-size: 1.4rem;
    font-weight: 400;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .title {
    margin-bottom: 6px;
    font-size: 1.4rem;
    font-weight: 500;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Discount = styled.div`
  color: ${colors.green};
  font-size: 1.8rem;
  font-weight: 500;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DetailButton = styled.div`
  height: 3.6rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  color: ${colors.bluePrimary};
  font-size: 1.26rem;
  cursor: pointer;
  transition: all 0.8s;
  font-weight: 500;

  &:hover {
    background-color: ${colors.sliderGray};
  }

  .icon {
    margin-left: 5px;
  }
`;
