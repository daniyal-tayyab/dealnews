import React, { useContext } from "react";
import { ProductsContext } from "../../context/products.context";

import Filter from "../../components/filter/Filter";
import ProductSlider from "../../components/productSlider/ProductSlider";
import Ad from "../../components/ad/Ad";
import Blogs from "../../components/blogs/Blogs";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
import Deals from "../../components/deals/Deals";

import {
  Container,
  Banner,
  TwoColumnLayout,
  MainContent,
  Sidebar,
} from "./Home.styles";

import ad1 from "../../images/ad.png";
import ad2 from "../../images/ad2.png";

const Home = () => {
  const { tempProducts } = useContext(ProductsContext);
  return (
    <Container>
      <Banner />
      <TwoColumnLayout>
        <MainContent>
          <Filter />
          <ProductSlider />
          <Deals />
          {tempProducts && <Footer />}
        </MainContent>
        <Sidebar>
          <Ad source={ad2} />
          <Blogs />
          <NewsLetter />
          <Ad source={ad1} />
        </Sidebar>
      </TwoColumnLayout>
    </Container>
  );
};

export default Home;
