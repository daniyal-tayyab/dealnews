import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/products.context";

import {
  Container,
  FilterBox,
  InterestBox,
  FilterContainer,
  LeftFilter,
  RightFilter,
  TagsContainer,
  FilterIcon,
  SortbyIcon,
  MoreFilters,
} from "./Filter.styles";
import Switch from "../switch/Switch";
import Tag from "../tag/Tag";
import { filters } from "../../utils/filter";
import { Divider } from "../../styles/common";

const Filter = () => {
  const { handleFilter } = useContext(ProductsContext);
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [showFilter, setShowFilter] = useState(true);
  const [showMoreFilter, setShowMoreFilter] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [sortBy, setSortBy] = useState("feature");
  const [orderBy, setOrderBy] = useState("none");

  const handleToggleSwitch = () => setToggleSwitch((prevState) => !prevState);
  const toggleMoreFilter = () => setShowMoreFilter((prevState) => !prevState);
  const toggleFilter = () => setShowFilter((prevState) => !prevState);
  const toggleFeatures = () => setShowFeatures((prevState) => !prevState);
  const handleSortBy = (feat) => {
    setSortBy(feat);
    handleFilter(feat);
  };

  const handleOrderBy = (feat) => setOrderBy(feat);

  return (
    <Container>
      <FilterContainer>
        <LeftFilter>
          <FilterBox onClick={toggleFilter}>
            <FilterIcon />
            FILTER
          </FilterBox>
          <InterestBox>
            <span>Interests: </span>
            <Switch isSwitch={toggleSwitch} toggleSwitch={handleToggleSwitch} />
          </InterestBox>
        </LeftFilter>
        <RightFilter>
          <div className="offers">1000+ offers</div>
          <div className="sort-by">Sorted by </div>
          <div className="features" onClick={toggleFeatures}>
            Features <SortbyIcon />
            {showFeatures && (
              <div className="features-dropdown">
                <div className="title">Sort by</div>
                <div
                  className={`item ${sortBy === "recent" && "active"}`}
                  onClick={() => handleSortBy("recent")}
                >
                  Most Recent
                </div>
                <div
                  className={`item ${sortBy === "popularity" && "active"}`}
                  onClick={() => handleSortBy("popularity")}
                >
                  Popularity
                </div>
                <div
                  className={`item ${sortBy === "price" && "active"}`}
                  onClick={() => handleSortBy("price")}
                >
                  Price Low to High
                </div>
                <div
                  className={`item ${sortBy === "feature" && "active"}`}
                  onClick={() => handleSortBy("feature")}
                >
                  Featured
                </div>
                <Divider />
                <div className="title">Group by</div>
                <div
                  className={`item ${orderBy === "none" && "active"}`}
                  onClick={() => handleOrderBy("none")}
                >
                  None
                </div>
                <div
                  className={`item ${orderBy === "offer" && "active"}`}
                  onClick={() => handleOrderBy("offer")}
                >
                  Offer Type
                </div>
                <div
                  className={`item ${orderBy === "category" && "active"}`}
                  onClick={() => handleOrderBy("category")}
                >
                  Category
                </div>
                <div
                  className={`item ${orderBy === "store" && "active"}`}
                  onClick={() => handleOrderBy("store")}
                >
                  Store
                </div>
                <div
                  className={`item ${orderBy === "brand" && "active"}`}
                  onClick={() => handleOrderBy("brand")}
                >
                  Brand
                </div>
              </div>
            )}
          </div>
        </RightFilter>
      </FilterContainer>
      {showFilter && (
        <TagsContainer>
          {filters.map(
            (item, index) =>
              index < 4 && (
                <Tag
                  key={index}
                  data={item.data}
                  title={item.title}
                  icon={item.icon}
                  expire={item.expire}
                />
              )
          )}

          {showMoreFilter && (
            <>
              {filters.map(
                (item, index) =>
                  index > 3 && (
                    <Tag
                      key={index}
                      data={item.data}
                      title={item.title}
                      icon={item.icon}
                      expire={item.expire}
                    />
                  )
              )}
            </>
          )}

          <MoreFilters
            onClick={toggleMoreFilter}
            style={{
              border: "none",
              fontSize: "1.2rem",
              fontWeight: "400",
            }}
          >
            <FilterIcon />
            {showMoreFilter ? "Less" : "More"} Filter
          </MoreFilters>
        </TagsContainer>
      )}
    </Container>
  );
};

export default Filter;
