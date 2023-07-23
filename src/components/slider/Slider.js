import React, { useContext, useRef } from "react";
import { ProductsContext } from "../../context/products.context";

import {
  Container,
  SliderWrapper,
  PrevButton,
  NextButton,
  NextWrapper,
  NextIcon,
} from "./Slider.styles";

import ProductCard from "../productCard/ProductCard";

const Slider = () => {
  const { tempProducts } = useContext(ProductsContext);
  const sliderRef = useRef(null);

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
      <SliderWrapper className="slider-container" ref={sliderRef}>
        {tempProducts &&
          tempProducts.map((item, index) => (
            <ProductCard key={index} item={item} />
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

export default Slider;
