import React, { useContext } from "react";

import { ProductsContext } from "../../context/products.context";

import { styled } from "styled-components";
import { colors } from "../../styles/colors";
import BlogCard from "../blogCard/BlogCard";
import Loader from "../loader/Loader";
import { useSnackbar } from "notistack";

export const Container = styled.div`
  width: 314px;

  border: 1px solid ${colors.borderGray};

  border-radius: 5px;
  margin-bottom: 2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 1rem;
  padding: 8px;

  p {
    color: #9fa2a5;
  }

  span {
    color: ${colors.bluePrimary};
    cursor: pointer;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Blogs = () => {
  const { blogs, error } = useContext(ProductsContext);
  const { enqueueSnackbar } = useSnackbar();

  return (
    <>
      {
        <div style={{ color: "transparent", fontSize: "1px" }}>
          {error &&
            enqueueSnackbar(error, {
              variant: "error",
            })}
        </div>
      }
      <Container>
        <Header>
          <p>From the Blog</p>
          <span>VIEW ALL</span>
        </Header>
        {blogs ? (
          blogs.map((item, index) => <BlogCard key={index} item={item} />)
        ) : (
          <Loader />
        )}
      </Container>
    </>
  );
};

export default Blogs;
