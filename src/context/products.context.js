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
});

const filterOnCategory = (products, category) => {
  let tempProducts = [...products];
  if (category === "staff pick") {
    tempProducts = tempProducts.filter((product) => product.staff_pick !== "");
    console.log("STAFF PICK PRODUCTS:", tempProducts);
  } else if (category === "include expire") {
    tempProducts = tempProducts.filter((product) => product.expired === 1);
    console.log("EXPIRED PRODUCTS:", tempProducts);
  } else {
    tempProducts = tempProducts.filter(
      (product) => product.category === category
    );
  }

  if (tempProducts.length === 0) {
    return {
      products: products,
      error: `No products found in ${category} category`,
    };
  }
  return {
    products: tempProducts,
    error: null,
  };
};

const filterHandler = (tempProducts, feat) => {
  const copyProducts = [...tempProducts];
  switch (feat) {
    case "price":
      return copyProducts.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    case "recent":
      return copyProducts.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    case "popularity":
      return copyProducts.sort((a, b) => b.rating - a.rating);
    case "feature":
      return copyProducts.sort((a, b) => a.id - b.id);
    default:
      return [];
  }
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [tempProducts, setTempProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductsFromServer = async () => {
      try {
        const products = await axios("http://localhost:8000/api/products");
        // const products = await axios(
        //   "https://dealnews-server-a6d51b37a008.herokuapp.com/api/products"
        // );
        setProducts(products.data.data);
        setTempProducts(products.data.data);
      } catch (err) {
        setError("Failed to fetch products from server");
        setProducts(dummyProducts);
        setTempProducts(dummyProducts);
      }
    };

    const getBlogsFromServer = async () => {
      try {
        const blogs = await axios("http://localhost:8000/api/blogs");
        // const blogs = await axios(
        //   "https://dealnews-server-a6d51b37a008.herokuapp.com/api/blogs"
        // );
        setBlogs(blogs.data.data);
      } catch (err) {
        setError("Failed to fetch blogs from server");
        setBlogs(dummyBlogs);
      }
    };

    getProductsFromServer();
    getBlogsFromServer();
  }, []);

  const handleSelectedCategory = (category) => {
    const status = filterOnCategory(products, category);
    setTempProducts(status.products);
    setError(status.error);
  };

  const handleFilter = (feat) => {
    setTempProducts(filterHandler(tempProducts, feat));
  };

  const value = {
    products,
    tempProducts,
    blogs,
    handleSelectedCategory,
    handleFilter,
    error,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
