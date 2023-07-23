import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/products.context";

import {
  Container,
  Title,
  AwardIcon,
  DropIcon,
  DropDown,
  Tri,
} from "./Tag.styles";

import Item from "./Item";

const Tag = ({ title, icon, expire, data, category }) => {
  const { handleSelectedCategory } = useContext(ProductsContext);
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    if (title === "staff pick" || title === "include expire") {
      handleSelectedCategory(title);
    }
    if (!icon && !expire) setShowDropDown((prevState) => !prevState);
  };

  return (
    <Container onClick={toggleDropDown} title={title}>
      <Title icon={icon} expire={expire}>
        {icon && !expire && <AwardIcon className="awad-icon" />}
        {title}
        {icon || expire || <DropIcon className="drop-icon" />}
      </Title>
      <DropDown show={showDropDown} title={title}>
        {data &&
          data.map((item, index) => (
            <Item key={index} item={item} title={title} category={category} />
          ))}
      </DropDown>
      <Tri show={showDropDown} />
    </Container>
  );
};

export default Tag;
