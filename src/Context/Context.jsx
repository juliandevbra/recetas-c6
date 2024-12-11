import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";
import Swal from "sweetalert2";

const RecipeStates = createContext();

const initialState = {
  cart: [],
  recipes: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data.recipes);
        dispatch({ type: "GET_RECIPES", payload: res.data.recipes });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al traer la lista de recetas",
          footer: err,
        });
      });
  }, []);

  return (
    <RecipeStates.Provider value={{ state, dispatch }}>
      {children}
    </RecipeStates.Provider>
  );
};
export default Context;

export const useRecipeStates = () => useContext(RecipeStates);
