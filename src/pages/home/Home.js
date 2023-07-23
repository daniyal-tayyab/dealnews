import React, { useEffect } from "react";

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
  // useEffect(() => {
  //   fetch("http://localhost:8000/api/user/signin", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: "dani@gmail.com",
  //       password: "12345",
  //     }),
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return res.json();
  //     })
  //     .then((res) => console.log("RESPONSE:", res));
  // }, []);
  return (
    <Container>
      <Banner />
      <TwoColumnLayout>
        <MainContent>
          <Filter />
          <ProductSlider />
          <Deals />
          <Footer />
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
