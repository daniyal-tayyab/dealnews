import React from "react";

import {
  Container,
  Lower,
  Copyright,
  Policy,
  Upper,
  Column,
  NewsWrapper,
  NewsLetter,
  Title,
  Description,
  Input,
  Button,
  Tri,
  Columns,
  SocialCol,
} from "./Footer.styles";

import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twitter.png";
import discord from "../../images/discord.png";

const Footer = () => {
  return (
    <Container>
      <Upper>
        <NewsWrapper>
          <NewsLetter>
            <Title>Never Miss a Deal</Title>
            <Description>
              Sign up now for up to the minute offers, sales and news.
            </Description>
            <Input placeholder="jdoe@example.com" />
            <Button>SIGN UP</Button>
          </NewsLetter>
          <Tri />
        </NewsWrapper>
        <Columns>
          <Column>
            <p>Deals</p>
            <span>popular brnads</span>
            <span>online coupons</span>
          </Column>
          <Column>
            <p>helpful links</p>
            <span>about us</span>
            <span>contact us</span>
            <span>store complaints</span>
            <span>press room</span>
            <span>advertise on dealnews</span>
            <span>marketplace expertise</span>
            <span>careeres</span>
            <span>sweepstakes winners</span>
            <span>faq</span>
          </Column>
          <Column>
            <p>connect</p>
            <SocialCol>
              <img src={facebook} alt="facebook" />
              <img src={linkedin} alt="linkedin" />
              <img src={twitter} alt="twitter" />
              <img src={discord} alt="discord" />
            </SocialCol>
          </Column>
        </Columns>
      </Upper>
      <Lower>
        <Copyright>© Copyright 2023 DealNews. All rights reserved.</Copyright>
        <Policy>Privacy Policy | Disclaimer</Policy>
      </Lower>
    </Container>
  );
};

export default Footer;
