"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductView from "./ProductView";
export default () => {
  const [product, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="py-6">
      <ProductView productItems={product} />
    </div>
  );
};
