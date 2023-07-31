import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/products.context";
import { Container } from "./Deals.styles";
import Loader from "../loader/Loader";
import { enqueueSnackbar, useSnackbar } from "notistack";
import DealCard from "../dealCard/DealCard";
import InfiniteScroll from "react-infinite-scroll-component";

function Deals() {
  const { tempProducts, error } = useContext(ProductsContext);
  const { enqueueSnackbar } = useSnackbar();

  const [initialProductCount, setInitialProductCount] = useState(10);
  const [productCountOnScroll, setProductCountOnScroll] = useState(10);

  const handleLoadMore = () => {
    setTimeout(() => {
      setInitialProductCount((prevCount) => prevCount + productCountOnScroll);
    }, 1000);
  };

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
          <InfiniteScroll
            dataLength={initialProductCount}
            next={handleLoadMore}
            hasMore={initialProductCount < tempProducts.length}
            loader={<Loader />}
          >
            {tempProducts.slice(0, initialProductCount).map((item, index) => (
              <DealCard key={index} item={item} />
            ))}
          </InfiniteScroll>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Deals;
