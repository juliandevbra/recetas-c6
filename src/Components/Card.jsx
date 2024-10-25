// import {cardContainer} from "../styles/Card.module.css";
import CardStyles from "../styles/Card.module.css";
// console.log(cardContainer)
console.log(CardStyles);
const Card = ({ receta }) => {
  // console.log(receta);
  const { tipo, img, precio } = receta;
  return (
    <div className={CardStyles.cardContainer}>
      <img src={img} alt={tipo} />
      <h3>{tipo}</h3>
      <h4>{precio}</h4>
      <button>Agregar</button>
    </div>
  );
};

export default Card;
