import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  let { id } = useParams();
  const [details, setDetails] = useState(null);

  async function getProduct() {
    try {
      let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setDetails(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  
  if (!details) {
    return <h2>Loading...</h2>; 
  }

  return (
    <div className="row my-5">
      <div className="col-md-4 ">
        <img
          src={details.image}
          alt={details.title}
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md-8">
        <h1>{details.title}</h1>
        <p>{details.description}</p>
        <span>{details.category}</span>
        <div className="d-flex justify-content-between">
          <p>{details.price} LE</p>
          <p>
            <i className="fa fa-star text-warning"></i> {details.rating?.rate}
          </p>
        </div>
      </div>
    </div>
  );
}
