import styled, { css } from "styled-components";

import { IoIosArrowForward } from "react-icons/io";
import { colors } from "../../styles/colors";

const commonStyles = css`
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 30px;
  cursor: pointer;
  z-index: 10;

  span {
    width: 100%;
    background-color: #2b2f34;
    border-radius: 1rem;
  }
`;

export const Container = styled.div`
  min-width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  column-gap: 1rem;
  scroll-behavior: smooth;
  overflow: hidden;
`;

export const PrevButton = styled.div`
  ${commonStyles};
  transform: rotate(180deg);
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
`;

export const NextButton = styled.div`
  ${commonStyles};
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
`;

export const NextWrapper = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${colors.white};
  border-radius: 50%;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

export const NextIcon = styled(IoIosArrowForward)`
  width: 100%;
  height: 100%;
  font-weight: 700;
  padding: 2px;
`;
