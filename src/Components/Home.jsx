import { pizzas } from "../utils/pizzas";
import Card from "./Card";

const Home = () => {
  // const nombres = ['Ignacio', 'Andres', 'Marco']
  // nombres.map((nombre, index) => <h1 key={index}>{nombre}</h1>)
  //   const mapList = pizzas.map((pizza) => {
  //     return (
  //       <div>
  //         <h3>{pizza.tipo}</h3>
  //         <h4>{pizza.precio}</h4>
  //       </div>
  //     );
  //   });
  //   console.log(mapList);

  return (
    <div className="list-container">
      {pizzas.map((pizza) => {
        return <Card key={pizza.id} receta={pizza} />;
      })}
    </div>
  );
};

export default Home;
