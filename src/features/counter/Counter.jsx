import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0
  return (
  <section>
      <p>{count}</p>

   
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

       <input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
       <button onClick={() => dispatch(reset())}>Reset</button>
       <button onClick={() => dispatch(incrementByAmount(addValue))}>Increment by 10</button>
    </section>
  );
};

export default Counter;
