import React, { useContext } from "react";

import { ProductsContext } from "../../context/products.context";

import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${colors.bluePrimary};
  text-transform: capitalize;

  display: flex;

  span {
    color: ${colors.black};
    margin-left: 1rem;
  }
  input {
    margin-right: 1rem;
  }

  &:hover {
    background-color: ${colors.lightGray};
  }
`;

const Item = ({ item, title, category }) => {
  const { handleSelectedCategory } = useContext(ProductsContext);
  const { name, qty } = item;
  return (
    <Container onClick={() => handleSelectedCategory(name)}>
      {title !== "category" && <input type="checkbox" />}
      {name} <span>({qty})</span>
    </Container>
  );
};

export default Item;
