import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch all products
  async function getProducts() {
    try {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    } catch (error) {
      console.error(error);
      alert("Error fetching products");
    }
  }

  // Fetch product categories
  async function getCategories() {
    try {
      let { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(data);
    } catch (error) {
      console.error(error);
      alert("Error fetching categories");
    }
  }

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <div className="mb-3">
        <select
          className="form-select"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="row my-2 gy-3">
        {filteredProducts.length === 0 ? (
          <h3>No products found</h3>
        ) : (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
      </div>
    </>
  );
}

