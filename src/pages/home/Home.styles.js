import styled from "styled-components";

import banner from "../../images/banner.webp";
import { flexColumn } from "../../styles/common";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Banner = styled.div`
  width: 87vw;
  height: 20rem;
  margin-top: 1.6rem;
  margin-bottom: 2rem;
  background-image: url(${banner});
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;

  @media (max-width: 730px) {
    display: none;
  }
`;

export const TwoColumnLayout = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  margin-top: 2rem;
`;

export const MainContent = styled.main`
  width: 100%;
  height: 700px;

  margin-right: 380px !important;
  padding: 0;

  @media (max-width: 900px) {
    margin-right: 0px;
  }
`;

export const Sidebar = styled.aside`
  position: absolute;
  right: 10px;
  top: 0;
  width: 350px;
  height: 500px;
  ${flexColumn}
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;
