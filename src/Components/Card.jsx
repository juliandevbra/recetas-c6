import { Link, useLocation } from "react-router-dom";
import CardStyles from "../styles/Card.module.css";
import Counter from "./Counter";
import { useRecipeStates } from "../Context/Context";
import { useState } from "react";

const Card = ({ receta }) => {
  const { title, image, pricePerServing, id } = receta;
  const { setCart } = useRecipeStates();
  const [counter, setCounter] = useState(0);

  const location = useLocation();
  // console.log(location);

  return (
    <div className={CardStyles.cardContainer}>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
      <h4>${pricePerServing}</h4>
      {location.pathname == "/cart" ? (
        <h3>Platos agregados: {receta.counter}</h3>
      ) : (
        <>
          <Counter counter={counter} setCounter={setCounter} />
          <button
            disabled={counter == 0}
            onClick={() =>
              setCart((prevState) => [
                ...prevState,
                { ...receta, counter: counter },
              ])
            }
          >
            Agregar
          </button>
        </>
      )}
    </div>
  );
};

export default Card;
