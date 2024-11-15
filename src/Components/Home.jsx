import { useEffect, useState } from "react";
import { pizzas } from "../utils/pizzas";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const url = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data.recipes);
      setRecipes(res.data.recipes);
    });
  }, []);

  return (
    <div className="list-container">
      {recipes.map((receta) => {
        return (
          <Card key={receta.id} receta={receta} setCart={setCart} cart={cart} />
        );
      })}
    </div>
  );
};

export default Home;
