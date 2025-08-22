import React from "react";
import "./Card.css";

const Card = ({ title, onDelete }) => (
  <div className="card">
    <h4>{title}</h4>
    <button className="card button" onClick={onDelete}>Delete</button>
  </div>
);

export default Card;
