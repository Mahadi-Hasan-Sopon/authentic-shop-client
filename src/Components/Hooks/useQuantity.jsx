import { useState } from "react";

function useQuantity(initialQuantity = 1) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return { quantity, increment, decrement, handleChange };
}

export default useQuantity;
