import styled, { css } from "styled-components";

import { colors } from "../../styles/colors";
import { alignCenter, center } from "../../styles/common";

import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

const navItemStyles = css`
  ${alignCenter};
  height: 100%;
  cursor: pointer;
  transition: all 0.15s;
  padding: 0 2rem;
  position: relative;
  text-transform: capitalize;

  &:hover {
    background-color: ${colors.blueDark};
  }
`;

export const HeaderContainer = styled.header`
  height: 6rem;
  background-color: ${colors.bluePrimary};
  ${alignCenter};
`;

export const Logo = styled.img`
  width: 100px;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 5rem;
`;

export const Navigation = styled.nav`
  display: flex;
  height: 100%;
  font-size: 1.4rem;
  color: ${colors.white};

  @media (max-width: 770px) {
    display: none;
  }
`;

export const NavExtended = styled.div`
  display: flex;
  height: 100%;
  font-size: 1.4rem;
  color: ${colors.white};
  margin-left: auto;
`;

export const NavigationItem = styled.div`
  ${navItemStyles};
`;

export const IndivdualNavItem = styled.div`
  ${navItemStyles};

  @media (max-width: 770px) {
    display: none;
  }
`;

export const MenuIcon = styled(FiMenu)`
  color: #fff;
  font-size: 22px;
  margin-left: 1rem;

  @media (min-width: 770px) {
    display: none;
  }
`;

export const About = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.white};
  border-radius: 50%;
  ${center};
`;

export const Search = styled(AiOutlineSearch)`
  width: 24px;
  height: 24px;
  margin-top: 3px;
`;

export const HeaderDown = styled.div`
  height: 4rem;
  background-color: ${colors.blueDark};
  ${center};
  color: ${colors.white};
  font-weight: 300;
  font-size: 1.4rem;
  cursor: pointer;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);

  span {
    font-weight: 500;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    height: 5rem;

    div {
      margin-top: -1.6rem;
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 290px) {
    font-size: 1rem;

    div {
      margin-top: -1rem;
    }
  }
`;

export const Greaterthan = styled(IoIosArrowForward)`
  font-weight: 700;
`;
