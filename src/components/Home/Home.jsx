/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";


// import { data } from "react-router-dom";

export default function Home() {
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
      <div className="nav justify-content-center m-3 bg-secondary ">
        <button
          className={`btn me-2 text-white ${
            selectedCategory === "all" ? "btn-primary" : ""
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          All Categories
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`btn me-2 text-white ${
              selectedCategory === category ? "btn-primary" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
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

/* 
        {products.length === 0 ? (
          <Loader />
        ) : (
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        )}

*/


/* 
    <>
      <div className="row my-2 gy-3">
        <div className="bg-white ">
          <ul className="nav justify-content-center">
            <li className="nav-item ">
              <NavLink
                to={"/home"}
                className="nav-link active text-secondary "
                aria-current="page"
              >
                All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"men"} className="nav-link text-secondary" href="#">
                men
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to={"jewelery"}
                className="nav-link text-secondary"
                href="#"
              >
                jewelery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"electronics"}
                className="nav-link text-secondary"
                href="#"
              >
                electronics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"women"}
                className="nav-link text-secondary"
                href="#"
              >
                women
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <Outlet></Outlet>
      </div>
    </>

*/