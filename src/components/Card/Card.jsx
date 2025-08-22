import React from "react";
import "./Card.css";

const Card = ({ title }) => (
  <div className="card">
    <h4>{title}</h4>
    <button className="card button">Delete</button>
  </div>
);

export default Card;
