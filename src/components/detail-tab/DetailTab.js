import React from "react";

import { Breadcrumbs } from "@mui/material";

import {
  BreadCrumsContainer,
  BreadCrumbItem,
  Container,
  DetailContent,
  DetailList,
  SliderContainer,
  TagsContainer,
  Tag,
  ListItem,
  ClockIcon,
  FireIcon,
} from "./DetailTab.styles";

import { IoIosArrowForward } from "react-icons/io";
import { Divider } from "../../styles/common";
import RelatedSlider from "../slider/RelatedSlider";
import {
  calculateHoursPassed,
  splitStringByComma,
} from "../../utils/calculatehour";

import staffIconGray from "../../images/staff_pick_gray.png";

const DetailTab = ({ item }) => {
  const { rating, breadcrumbs, key_words, created_at, staff_pick } = item;

  const breadcrumbsArray = splitStringByComma(breadcrumbs);
  const keyWords = splitStringByComma(key_words);

  const breadcrumbsData = breadcrumbsArray.map((item) => (
    <BreadCrumbItem>{item}</BreadCrumbItem>
  ));

  return (
    <Container>
      <DetailList>
        <ListItem>
          <ClockIcon />
          <div>
            <span>Expires 7/31/2023</span>
            <span style={{ display: "block" }}>
              Published {calculateHoursPassed(created_at)} ago
            </span>
          </div>
        </ListItem>
        <ListItem>
          <FireIcon /> <span>Popularity {rating}/5</span>
        </ListItem>
        {staff_pick && (
          <ListItem>
            <img src={staffIconGray} alt="staff" />
            <span>Staff Pick</span>
          </ListItem>
        )}
      </DetailList>
      <DetailContent>
        <BreadCrumsContainer>
          <Breadcrumbs
            separator={
              <IoIosArrowForward
                fontSize="1.2rem"
                style={{ color: "#7f8387" }}
              />
            }
            aria-label="breadcrumb"
          >
            {breadcrumbsData}
          </Breadcrumbs>
          <TagsContainer>
            {keyWords.map((item, index) => (
              <Tag key={index}>{item}</Tag>
            ))}
          </TagsContainer>
          <Divider />
        </BreadCrumsContainer>
        <SliderContainer>
          Related Offers
          <RelatedSlider />
        </SliderContainer>
      </DetailContent>
    </Container>
  );
};

export default DetailTab;
