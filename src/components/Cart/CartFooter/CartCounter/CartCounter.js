import { useState } from "react";
import "./CartCounter.css";
import MinusIcon from "./Minus.svg";
import AddIcon from "./Add.svg";
function CartCounter() {
  const [count, setCount] = useState(0);
  function onIncrease() {
    setCount((count) => count + 1);
  }

  function onDecrease() {
    setCount((count) => {
      return count === 0 ? 0 : count - 1;
    });
  }
  return (
    <div className="CartCounter">
      <button className="CartButton" onClick={onDecrease}>
        <img src={MinusIcon} alt="minus"/>
      </button>
      <div className="CartCount">{count}</div>
      <button className="CartButton" onClick={onIncrease}>
        <img src={AddIcon} alt="add"/>
      </button>
    </div>
  );
}

export default CartCounter;
