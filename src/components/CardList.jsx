import React from "react";
import Card from "./Card/Card";

const CardList = ({ cardList }) => (
  <div>
    {cardList.map((card, index) => (
      <Card key={index} title={card.title} />
    ))}
  </div>
);

export default CardList;
