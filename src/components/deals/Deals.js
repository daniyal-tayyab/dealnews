import React, { useContext, Suspense } from "react";

import { ProductsContext } from "../../context/products.context";

import { Container } from "./Deals.styles";
import Loader from "../loader/Loader";
import { enqueueSnackbar, useSnackbar } from "notistack";

const DealCard = React.lazy(() => import("../dealCard/DealCard"));

function Deals() {
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
          {tempProducts &&
            tempProducts.map((item, index) => (
              <Suspense fallback={<Loader />}>
                <DealCard key={index} item={item} />
              </Suspense>
            ))}
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Deals;
