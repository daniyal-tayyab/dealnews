import React from "react";

import {
  Container,
  Image,
  Content,
  TimeRatingContainer,
  Time,
  Title,
  Price,
} from "./RelatedCard.styles";
import Rating from "../rating/Rating";
import { calculateHoursPassed } from "../../utils/calculatehour";

const RelatedCard = ({ item }) => {
  return (
    <Container>
      <Image src={item.image} alt="product" />
      <Content>
        <TimeRatingContainer>
          <Time>Amazon · {calculateHoursPassed(item.created_at)} hrs ago </Time>
        </TimeRatingContainer>
        <Title>{item.product_name}</Title>
        <Price>Up to {item.off_percent > 0 ? item.off_percent : 6}% off</Price>
      </Content>
    </Container>
  );
};

export default RelatedCard;
