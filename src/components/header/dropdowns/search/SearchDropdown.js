import React from "react";

import {
  Container,
  InnerContainer,
  SearchInput,
  SearchBtn,
  // CloseIcon,
} from "./Search.styles";

const SearchDropdown = ({ toggle }) => {
  return (
    <Container toggle={toggle}>
      <InnerContainer>
        <SearchInput placeholder="Search" />
        <SearchBtn>SEARCH</SearchBtn>
      </InnerContainer>
    </Container>
  );
};

export default SearchDropdown;
