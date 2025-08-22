import React from "react";
import Card from "./Card/Card";
import "./CardList.css";

const CardList = ({ cardList , deleteCard}) => (
  <div className="card-list">
    {cardList.map((card, index) => (
      <Card 
      key={index} 
      title={card.title} 
      onDelete={() => deleteCard(index)} />
    ))}
  </div>
);

export default CardList;
