import React from "react";

import {
  Container,
  Content,
  DetailButton,
  NameTime,
  Discount,
} from "./ProductCard.styles";

import { IoIosArrowForward } from "react-icons/io";
import { calculateHoursPassed } from "../../utils/calculatehour";

const ProductCard = ({ item }) => {
  const { product_name, off_percent, supplier, image, created_at } = item;

  return (
    <Container>
      <Content>
        <img src={image} alt="shorts" loading="lazy" />
        <NameTime>
          <div className="time">
            {supplier} - {calculateHoursPassed(created_at)} ago
          </div>
          <div className="title">{product_name}</div>
        </NameTime>
        <Discount>Up to {off_percent} off</Discount>
      </Content>
      <DetailButton>
        Detail <IoIosArrowForward className="icon" />
      </DetailButton>
    </Container>
  );
};

export default ProductCard;
