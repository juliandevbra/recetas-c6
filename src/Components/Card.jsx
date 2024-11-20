import { Link } from "react-router-dom";
import CardStyles from "../styles/Card.module.css";
import Counter from "./Counter";

const Card = ({ receta, setCart }) => {
  const { title, image, pricePerServing, id } = receta;
  return (
    <div className={CardStyles.cardContainer}>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
      <h4>${pricePerServing}</h4>
      <Counter />
      <button onClick={() => setCart((prevState) => [...prevState, receta])}>
        Agregar
      </button>
    </div>
  );
};

export default Card;
