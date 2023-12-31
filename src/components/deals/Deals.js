import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../context/products.context";
import { Container } from "./Deals.styles";
import Loader from "../loader/Loader";
import { useSnackbar } from "notistack";
import DealCard from "../dealCard/DealCard";
import InfiniteScroll from "react-infinite-scroll-component";

function Deals() {
  const { tempProducts, error, handleOffset, offset, loading } =
    useContext(ProductsContext);
  const { enqueueSnackbar } = useSnackbar();
  const [initialProductCount, setInitialProductCount] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (offset > tempProducts?.length) {
      setHasMore(false);
    }
  }, [offset, tempProducts]);

  const handleLoadMore = () => {
    handleOffset(offset + 10);
    setInitialProductCount((prevCount) => prevCount + 10);
  };

  return (
    <>
      {/* Error snackbar */}
      <div style={{ color: "transparent", fontSize: "1px" }}>
        {error && enqueueSnackbar(error, { variant: "error" })}
      </div>

      {/* Product list */}
      {tempProducts ? (
        <Container>
          <InfiniteScroll
            dataLength={initialProductCount}
            next={handleLoadMore}
            hasMore={hasMore}
            loader={<Loader />}
          >
            {tempProducts.slice(0, initialProductCount).map((item, index) => (
              <DealCard key={index} item={item} />
            ))}
          </InfiniteScroll>
          {loading && <Loader />}
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Deals;
