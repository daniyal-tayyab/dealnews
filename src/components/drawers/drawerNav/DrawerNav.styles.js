import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { flexColumn } from "../../../styles/common";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

export const Container = styled.div`
  width: 45vw;
  color: #fff;
  background-color: ${colors.white};
  ${flexColumn};

  @media (max-width: 600px) {
    width: 70vw;
  }

  @media (max-width: 400px) {
    width: 90vw;
  }
`;

export const Header = styled.div`
  height: 6rem;
  background-color: ${colors.bluePrimary};
`;

export const SignInButton = styled.button`
  width: 75%;
  height: 100%;
  background-color: ${colors.bluePrimary};
  color: ${colors.white};
  border: none;
  text-align: left;
  padding-left: 1.5rem;

  &:hover {
    background-color: ${colors.blueDark};
  }
`;

export const ExpandIcon = styled(ExpandMoreIcon)`
  font-size: 2rem !important;
  color: ${colors.bluePrimary};
`;

export const Accordian = styled(Accordion)`
  box-shadow: none !important;
  border-radius: 0 !important;
`;

export const AccordianSummary = styled(AccordionSummary)`
  p {
    font-size: 1.4rem;
    color: ${colors.bluePrimary};
  }

  &:hover {
    background-color: ${colors.veryLighGray};
  }
`;

export const AccordianDetails = styled(AccordionDetails)`
  padding-left: 3rem !important;
`;
