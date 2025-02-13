// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    let {id} =useParams();
    const [details,setDetails] = useState(null);

async function getProduct(){
            let { data } = await axios.get(
              `https://fakestoreapi.com/products/${id}`
            );
            console.log(data);
            setDetails(data);
}



useEffect(()=>{
    getProduct();
},[id])

  return (
    <div className="row">
      <div className="col-md-4">
        <img src={details.image} alt={details.title} />
      </div>
      <div className="col-md-8">
        <h1>{details.title}</h1>
        <p>{details.description}</p>
        <span> {details.category}</span>
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
