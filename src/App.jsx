import { useState } from "react";
import InputForm from "./components/InputForm";
import Card from "./components/Card/Card";
import CardList from "./components/CardList";
import "./App.css";

function App() {
  const [cardList, setCardList] = useState([]);

  const addCard = (title) => {
    setCardList((prev) => [...prev, { title }]);
  };

  const deleteCard = (index) => {
    setCardList(cardList.filter((_, i) => i !== index))};

  return (
    <div>
      <InputForm addCard={addCard} />
      <CardList cardList={cardList} deleteCard={deleteCard} />
    </div>
  );
}

export default App;
