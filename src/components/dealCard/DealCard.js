import React, { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";

import DetailTab from "../detail-tab/DetailTab";
import CommentsTab from "../comments-tab/CommentsTab";
import CommentComponent from "../comment-component/CommentComponent";

import {
  Container,
  Upper,
  UpperLeft,
  Image,
  Content,
  UpperRight,
  Heart,
  ShopNow,
  Lower,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TopMenuContainer,
  VerticalMenuIcon,
} from "./DealCard.styles";

import { BsArrowUp } from "react-icons/bs";
import {
  calculateDiscount,
  calculateHoursPassed,
  splitStringByComma,
} from "../../utils/calculatehour";

const DealCard = ({ item }) => {
  const { user } = useContext(UserContext);
  const [showMore, setShowMore] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [showMenu, setShowMenu] = useState(false);

  const {
    product_name,
    supplier,
    created_at,
    price,
    off_percent,
    product_details,
    features,
    image,
  } = item;

  const productDetailArray = splitStringByComma(product_details);
  const productFeatures = splitStringByComma(features);

  const toggleShowMore = () => setShowMore((prevState) => !prevState);
  const handleActiveTab = (tab) => setActiveTab(tab);
  const toggleShowMenu = () => setShowMenu((prevState) => !prevState);

  return (
    <Container>
      <TopMenuContainer>
        <VerticalMenuIcon />
      </TopMenuContainer>
      <Upper more={showMore}>
        <UpperLeft>
          <Image more={showMore}>
            <img src={image} alt="product" loading="lazy" />
          </Image>
          <Content>
            <p className="time">
              {supplier} · {calculateHoursPassed(created_at)} ago
            </p>
            <p className="title">{product_name}</p>
            <p className="price-container">
              <span className="price-after">
                $
                {calculateDiscount(price, off_percent) !== 0
                  ? calculateDiscount(price, off_percent).toFixed(0)
                  : "5"}
              </span>
              <span className="price-before"> ${price}</span>
              <span className="price-other">+ free shipping</span>
            </p>
            <div>
              <span className="description">{productDetailArray[0]}</span>
              {showMore && (
                <span className="desc-link">{productDetailArray[1]}</span>
              )}
              {showMore && <br />}
              <span className="more-less" more={showMore}>
                {!showMore && <span onClick={toggleShowMore}>more</span>}
              </span>
            </div>
            {showMore && features && (
              <div className="features-container">
                <div className="feature-title">Features</div>
                <ul className="feature-list">
                  {productFeatures.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {showMore && (
              <span onClick={toggleShowMore} className="less">
                <BsArrowUp style={{ marginTop: "10px", marginLeft: "-5px" }} />
                less
              </span>
            )}
          </Content>
        </UpperLeft>
        <UpperRight more={showMore}>
          {showMore && <Heart></Heart>}
          <ShopNow>SHOP NOW</ShopNow>
        </UpperRight>
      </Upper>
      {showMore && (
        <Lower>
          <Tabs>
            <TabList>
              <Tab
                className={`${activeTab === "tab1" && "active"}`}
                onClick={() => handleActiveTab("tab1")}
                tab={activeTab}
              >
                Details
              </Tab>
              <Tab
                className={`${activeTab === "tab2" && "active"}`}
                onClick={() => handleActiveTab("tab2")}
                tab={activeTab}
              >
                Comments
              </Tab>
            </TabList>
            {activeTab === "tab1" && (
              <TabPanel>
                <DetailTab item={item} />
              </TabPanel>
            )}

            {activeTab === "tab2" && (
              <TabPanel>
                {user ? <CommentComponent /> : <CommentsTab />}
              </TabPanel>
            )}
          </Tabs>
        </Lower>
      )}
    </Container>
  );
};

export default DealCard;
