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

  return (
    <div>
      <InputForm addCard={addCard} />
      <CardList cardList={cardList} />
    </div>
  );
}

export default App;
