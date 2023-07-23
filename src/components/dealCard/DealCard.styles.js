import styled from "styled-components";

import { colors } from "../../styles/colors";

import { AiOutlineHeart } from "react-icons/ai";

import { SlOptionsVertical } from "react-icons/sl";
import { alignCenter, flexColumn } from "../../styles/common";

export const Container = styled.div`
  padding: 1rem;
  border: 1px solid ${colors.borderGray};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  position: relative;
`;

export const Upper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.more ? "column" : "row")};
`;

export const UpperLeft = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const Image = styled.div`
  min-width: ${(props) => (props.more ? "29.5rem" : "13.5rem")};
  max-width: ${(props) => (props.more ? "29.5rem" : "13.5rem")};
  height: ${(props) => (props.more ? "29.5rem" : "13.5rem")};
  align-self: center;
  margin-right: 5px;

  img {
    width: 100%;
  }

  @media (max-width: 600px) {
    min-width: ${(props) => (props.more ? "26.5rem" : "10.5rem")};
    max-width: ${(props) => (props.more ? "26.5rem" : "10.5rem")};
    height: ${(props) => (props.more ? "26.5rem" : "10.5rem")};
    margin-right: 5px;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  .time {
    font-size: 1.2rem;
    color: ${colors.lightGray};
    font-weight: 400;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 2.4rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  .price-container {
    color: ${colors.lightGray};
    font-weight: 400;
    margin-bottom: 1rem;

    .price-after {
      color: ${colors.green};
      font-size: 2.4rem;
      font-weight: 500;
    }

    .price-before {
      text-decoration: line-through;
      font-size: 1.3rem;
    }

    .price-other {
      font-size: 1.3rem;
    }
  }

  .description {
    font-size: 1.4rem;
    color: rgb(48, 52, 55);
    font-weight: 300;
    margin-bottom: 1rem;
  }

  .desc-link {
    font-size: 1.4rem;
    color: ${colors.bluePrimary};
    cursor: pointer;
    font-weight: 500;
    margin-left: 5px;

    &:hover {
      text-decoration: underline;
    }
  }

  .more-less {
    font-size: 1.4rem;
    color: ${colors.bluePrimary};
    cursor: pointer;
    font-weight: 500;
    margin-left: ${(props) => (props.more ? "0" : "5px")};
  }

  .less {
    font-size: 1.4rem;
    color: ${colors.bluePrimary};
    cursor: pointer;
    font-weight: 500;
    margin-left: ${(props) => (props.more ? "0" : "5px")};
  }

  .features-container {
    font-size: 1.3rem;

    .feature-title {
      margin-top: 1rem;
    }
    .feature-list {
      list-style: disc;
      font-weight: 300;

      li {
        margin-left: 3rem;

        &:nth-child(1) {
          margin-top: 5px;
        }

        &:not(:last-child) {
          margin-bottom: 5px;
        }
      }
    }
  }
`;

export const UpperRight = styled.div`
  width: ${(props) => (props.more ? "100%" : "118px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => (props.more ? "1rem" : "")};

  @media (max-width: 600px) {
    display: ${(props) => (props.more ? "flex" : "none")};
  }
`;

export const Heart = styled(AiOutlineHeart)`
  width: 24px;
  height: 24px;
  color: ${colors.bluePrimary};
  cursor: pointer;
`;

export const ShopNow = styled.div`
  width: 100px;
  height: fit-content;
  align-self: center;
  background-color: ${colors.green};
  text-align: center;
  color: #fff;
  padding: 1rem;
  font-size: 1.4rem;
  border-radius: 2px;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.4);
  transition: all 0.15s;
  cursor: pointer;

  &:hover {
    background-color: #82ca9c;
    box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.4);
  }
`;

export const Lower = styled.div`
  margin-top: 1rem;
`;

export const Tabs = styled.div`
  ${flexColumn};
`;

export const TabList = styled.div`
  ${alignCenter};
  column-gap: 5px;
  font-size: 1.4rem;
  color: ${colors.bluePrimary};
`;

export const Tab = styled.div`
  width: 120px;
  padding: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: ${colors.veryLightblue};
  }
`;

export const TabPanel = styled.div``;

export const TopMenuContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 100px;
  height: 20px;
  ${alignCenter}
  justify-content: flex-end;
`;

export const VerticalMenuIcon = styled(SlOptionsVertical)`
  font-size: 1.5rem;
  color: ${colors.bluePrimary};
  cursor: pointer;
`;
