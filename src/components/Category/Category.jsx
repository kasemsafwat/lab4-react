// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Category() {
  return (
    <div className="bg-white">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            All
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            men
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            jewelery
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            electronics
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            women
          </a>
        </li>
      </ul>
    </div>
  );
}
