import React, { useContext, useRef } from "react";

import { ProductsContext } from "../../context/products.context";

import {
  Container,
  SliderWrapper,
  NextButton,
  PrevButton,
  NextIcon,
  NextWrapper,
} from "./RelatedSlider.styles";
import RelatedCard from "../related-card/RelatedCard";

const RelatedSlider = ({ category, id }) => {
  const { tempProducts, products } = useContext(ProductsContext);
  const sliderRef = useRef(null);
  const relatedProducts = products.filter(
    (product) => product.category === category && product.id !== id
  );

  const handleNextClick = () => {
    let width = sliderRef.current.clientWidth;
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + width;
  };

  const handlePrevClick = () => {
    let width = sliderRef.current.clientWidth;
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - width;
  };

  return (
    <Container>
      <SliderWrapper ref={sliderRef}>
        {tempProducts &&
          relatedProducts.map((item, index) => (
            <RelatedCard key={index} item={item} />
          ))}
      </SliderWrapper>
      <PrevButton onClick={handlePrevClick}>
        <NextWrapper>
          <NextIcon />
        </NextWrapper>
      </PrevButton>
      <NextButton onClick={handleNextClick}>
        <NextWrapper>
          <NextIcon />
        </NextWrapper>
      </NextButton>
    </Container>
  );
};

export default RelatedSlider;
