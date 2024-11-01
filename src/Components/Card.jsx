import CardStyles from "../styles/Card.module.css";
import Counter from "./Counter";

const Card = ({ receta, setCart }) => {
  const { tipo, img, precio } = receta;
  return (
    <div className={CardStyles.cardContainer}>
      <img src={img} alt={tipo} />
      <h3>{tipo}</h3>
      <h4>{precio}</h4>
      <Counter />
      <button onClick={() => setCart((prevState) => [...prevState, receta])}>
        Agregar
      </button>
    </div>
  );
};

export default Card;
