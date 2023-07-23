import styled from "styled-components";
import { colors } from "../../styles/colors";
import { alignCenter, flexColumn, spaceBtween } from "../../styles/common";

import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { LuArrowUpDown } from "react-icons/lu";

export const Container = styled.div`
  ${flexColumn};

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
  margin-left: 1rem;
  margin-right: 370px;

  @media (min-width: 1450px) {
    margin-right: 350px;
  }

  @media (min-width: 1500px) {
    margin-right: 300px;
  }

  @media (min-width: 1600px) {
    margin-right: 200px;
  }

  @media (min-width: 1700px) {
    margin-right: 100px;
  }

  @media (min-width: 1800px) {
    margin-right: 8px;
  }

  @media (max-width: 900px) {
    margin-right: 0px;
    width: 94vw;
  }
`;

export const FilterContainer = styled.div`
  ${spaceBtween};
`;

export const LeftFilter = styled.div`
  ${alignCenter};
  width: fit-content;

  span {
    color: ${colors.bluePrimary};
    font-size: 1.4rem;
    margin-right: 1rem;
  }
`;

export const FilterBox = styled.div`
  ${alignCenter};
  color: ${colors.bluePrimary};
  font-size: 1.5rem;
  font-weight: 400;
  padding: 1rem;
  border-radius: 2px;
  border-bottom-right-radius: 0;
  cursor: pointer;

  border-right: 1px solid ${colors.veryLighGrayII};
  border-top: 1px solid ${colors.veryLighGrayII};

  @media (max-width: 600px) {
    display: none;
  }
`;

export const InterestBox = styled.div`
  ${alignCenter};
  border-bottom: 1px solid ${colors.veryLighGrayII};
  padding: 1rem;

  span {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const FilterIcon = styled(TbAdjustmentsHorizontal)`
  color: ${colors.bluePrimary};
  font-size: 1.6rem;
  margin-right: 5px;
`;

export const SortbyIcon = styled(LuArrowUpDown)`
  color: ${colors.bluePrimary};
  font-size: 1.6rem;
  margin-left: 5px;
`;

export const RightFilter = styled.div`
  position: relative;
  border-bottom: 1px solid ${colors.veryLighGrayII};
  padding: 1.1rem;
  width: 100%;
  ${alignCenter};
  justify-content: flex-end;
  font-size: 1.3rem;
  font-weight: 300;
  position: relative;

  .offers {
    padding-right: 5px;
    border-right: 1px solid ${colors.veryLighGrayII};

    @media (max-width: 600px) {
      display: none;
    }
  }

  .sort-by {
    padding-left: 5px;
    ${alignCenter};
    cursor: pointer;

    @media (max-width: 600px) {
      display: none;
    }
  }

  .features {
    font-weight: 500;
    ${alignCenter};
    margin-left: 3px;
    cursor: pointer;
    position: relative;

    .features-dropdown {
      position: absolute;
      top: 20px;
      right: -5px;
      width: 130px;
      background-color: ${colors.white};
      padding: 3px;
      font-size: 1.2rem;
      z-index: 10000;
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);

      .title {
        padding: 1rem 5px;
        color: ${colors.black};
        font-weight: 400;
      }

      .item {
        padding: 1rem;
        font-weight: 400;
        padding-left: 1.2rem;

        &:hover {
          background-color: ${colors.veryLighGray};
        }
      }

      .active {
        background-color: ${colors.veryLightblue};
        border-radius: 2px;
      }
    }
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: -5px;
    width: 10px;
    height: 100%;
    background-color: #fff;
  }
`;

export const MoreFilters = styled.div`
  ${alignCenter};
  color: ${colors.bluePrimary};
  font-size: 1.5rem;
  font-weight: 400;
  padding: 1rem;
  border-radius: 2px;
  border-bottom-right-radius: 0;
  cursor: pointer;

  border-right: 1px solid ${colors.veryLighGrayII};
  border-top: 1px solid ${colors.veryLighGrayII};

  @media (max-width: 600px) {
    min-width: 100px;
  }
`;

export const TagsContainer = styled.div`
  padding: 1rem;
  ${alignCenter}
  flex-wrap: wrap;
  row-gap: 1rem;

  div:not(:last-child) {
    margin-right: 1rem;
  }
`;
