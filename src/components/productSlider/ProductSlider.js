import React, { useContext } from "react";
import { ProductsContext } from "../../context/products.context";

import styled from "styled-components";
import { colors } from "../../styles/colors";
import Slider from "../slider/Slider";
import Loader from "../loader/Loader";
import { useSnackbar } from "notistack";

const Container = styled.div`
  background-color: ${colors.sliderGray};
  padding: 1rem;
  border-radius: 20px;
  margin-top: 2rem;
  overflow: hidden;
  margin-right: 370px;
  margin-left: 1rem;

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
  }
`;

const ProductSlider = () => {
  const { tempProducts, error } = useContext(ProductsContext);
  const { enqueueSnackbar } = useSnackbar();

  return (
    <>
      <div style={{ color: "transparent", fontSize: "1px" }}>
        {error &&
          enqueueSnackbar(error, {
            variant: "error",
          })}
      </div>
      {tempProducts ? (
        <Container>
          <Slider />
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ProductSlider;
