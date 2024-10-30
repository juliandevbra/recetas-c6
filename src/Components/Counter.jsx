import { useState } from "react";

const Counter = () => {
  //   let contador = 0;
  //   console.log(useState("algun valor"));
  const [counter, setCounter] = useState(0);
  const sumar = () => {
    setCounter(counter + 1);
    // contador++;
    // console.log(contador);
  };
  const restar = () => {
    setCounter(counter - 1);
    // contador--;
    // console.log(contador);
  };
  //   console.log(contador);
  console.log(counter);
  return (
    <div>
      <button onClick={restar}>-</button>
      <h4>{counter}</h4>
      <button onClick={sumar}>+</button>
    </div>
  );
};

export default Counter;

// btn.addEventListener('click', () => {
//     contador--
// })

// btn.onclick = () => {
//     contador++
// }
