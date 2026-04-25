import { useContext } from "react";
import { CardContext } from "../context/data.context.jsx";

const useCard = () => {
  return useContext(CardContext);
};

export default useCard;

