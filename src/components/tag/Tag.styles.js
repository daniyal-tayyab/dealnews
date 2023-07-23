import styled from "styled-components";

import { colors } from "../../styles/colors";
import { alignCenter } from "../../styles/common";

import { FaAward } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export const Container = styled.div`
  display: flex;
  padding: 6px 8px;
  border-radius: 20px;
  border: 1px solid ${colors.veryLighGrayII};
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: ${colors.veryLightblue};
    color: ${colors.bluePrimary};
    text-decoration: ${(props) =>
      props.icon || props.expire ? "underline" : "none"};
  }

  &:hover .drop-icon {
    background-color: ${colors.lightblue};
  }

  &:hover .award-icon {
    color: ${colors.lightblue};
  }

  @media (max-width: 600px) {
    min-width: ${(props) =>
      props.title === "other type" ||
      props.title === "popularity rank" ||
      props.title === "offer status" ||
      props.title === "include expire"
        ? "150px"
        : "110px"};
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${colors.black};
  ${alignCenter};
  justify-content: center;
  text-transform: capitalize;

  cursor: pointer;

  &:hover {
    background-color: ${colors.veryLightblue};
    color: ${colors.bluePrimary};
    text-decoration: ${(props) =>
      props.icon || props.expire ? "underline" : "none"};
  }

  &:hover .drop-icon {
    background-color: ${colors.lightblue};
  }

  &:hover .award-icon {
    color: ${colors.lightblue};
  }
`;

export const AwardIcon = styled(FaAward)`
  font-size: 1.1rem;
  margin-right: 8px;
`;

export const DropIcon = styled(IoIosArrowForward)`
  transform: rotate(90deg);
  margin-left: 8px;
  border-radius: 50%;
  padding: 1.5px;
  font-size: 1.5rem;
`;

export const DropDown = styled.div`
  width: 250px;

  height: ${(props) =>
    props.title === "offer status"
      ? "150px"
      : props.title === "condition"
      ? "110px"
      : props.title === "popularity rank"
      ? "190px"
      : props.title === "other type"
      ? "120px"
      : "250px"};

  overflow-y: ${(props) =>
    props.title === "offer status" ||
    props.title === "condition" ||
    props.title === "popularity rank" ||
    props.title === "other type"
      ? "hidden"
      : "scroll"};

  overflow-x: hidden;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #fff;
  z-index: 1000;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.55);
  display: ${(props) => (props.show ? "block" : "none")};

  @media (max-width: 600px) {
    width: 210px;
  }
`;

export const Tri = styled.div`
  position: absolute;
  top: 30px;
  height: 10px;
  width: 25px;
  background-color: #fff;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  z-index: 1000;
  display: ${(props) => (props.show ? "block" : "none")};

  @media (max-width: 600px) {
    /* width: 10px; */
  }
`;
