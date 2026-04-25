 import { createContext, useState } from "react";
import { allcards} from "../api/data.api.jsx";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

    const fetchCards = async () => {
    setLoading(true);
    try {
      const res = await allcards();
      setCards(res.data.cards);
      console.log(res.data.cards);
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardContext.Provider
      value={{ cards, fetchCards, loading }}
    >
      {children}
    </CardContext.Provider>
  );
};