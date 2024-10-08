import { useState } from "react";

type QuantityProps = {
  quantity: number;
};

const Button = ({ quantity }: QuantityProps) => {
  const [count, setCount] = useState(quantity);
  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <button onClick={handleDecrease} disabled={count === 0}>
        -1
      </button>
      <p>{quantity}</p>
      <button onClick={handleIncrease}>+1</button>
    </>
  );
};
export default Button;
