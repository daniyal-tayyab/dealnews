import { createContext, useState, useEffect } from "react";
import axios from "axios";

import dummyProducts from "../utils/products";
import dummyBlogs from "../utils/blogs";

export const ProductsContext = createContext({
  products: null,
  setProducts: () => null,
  blogs: null,
  setBlogs: () => null,
  tempProducts: null,
  setTempProducts: () => null,
  error: null,
  setError: () => null,
  category: null,
  setCategory: () => null,
  offset: null,
  setOffset: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [tempProducts, setTempProducts] = useState(null);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProductsFromServer = async () => {
      setLoading(true);
      try {
        const response = await axios(
          `https://dealnews-004572de8762.herokuapp.com/api/products/limit/${offset}`
        );
        const newProducts = response.data.data;
        setProducts((prevProducts) =>
          offset === 0 ? newProducts : [...prevProducts, ...newProducts]
        );
        setTempProducts((prevProducts) =>
          offset === 0 ? newProducts : [...prevProducts, ...newProducts]
        );
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products from server");
        setProducts(dummyProducts);
        setTempProducts(dummyProducts);
        setLoading(false);
      }
    };

    const getBlogsFromServer = async () => {
      try {
        const blogs = await axios(
          "https://dealnews-004572de8762.herokuapp.com/api/blogs"
        );
        setBlogs(blogs.data.data);
      } catch (err) {
        setError("Failed to fetch blogs from server");
        setBlogs(dummyBlogs);
      }
    };

    getProductsFromServer();
    getBlogsFromServer();
  }, [offset]);

  useEffect(() => {
    const getProductsFromServer = async (category) => {
      setTempProducts(null);
      try {
        const response = await axios(
          `https://dealnews-004572de8762.herokuapp.com/api/products/${category}`
        );
        if (response.data.data.length === 0) {
          setTempProducts(products);
          setError(`No products found in ${category} category`);
          return;
        }
        setTempProducts(response.data.data);
        setError(null);
      } catch (err) {
        setError(`No products found in ${category} category`);
        setTempProducts(products);
      }
    };

    if (category) {
      getProductsFromServer(category);
    }
  }, [category]);

  useEffect(() => {
    const getSortedProducts = async (feat) => {
      setTempProducts(null);
      try {
        const response = await axios(
          `https://dealnews-004572de8762.herokuapp.com/api/products/sortby/${feat}`
        );
        setTempProducts(response.data.data);
      } catch (error) {
        setError(`Failed to sort products`);
        setTempProducts(products);
      }
    };
    if (sortBy) {
      getSortedProducts(sortBy);
    }
  }, [sortBy]);

  const handleOffset = (offset) => setOffset(offset);

  const handleSelectedCategory = (category) => {
    setCategory(category);
  };

  const handleFilter = (feat) => {
    setSortBy(feat);
  };

  const value = {
    products,
    tempProducts,
    blogs,
    handleSelectedCategory,
    handleFilter,
    error,
    handleOffset,
    offset,
    loading,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
