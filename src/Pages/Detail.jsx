import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getRecipe } from "../Services/apiCalls";
import withErrorBoundary from "../helpers/withErrorBoundary";

const Detail = () => {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();
  // console.log(id);

  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
    import.meta.env.VITE_API_KEY
  }`;

  useEffect(() => {
    // axios(url).then((res) => {
    //   console.log(res.data);
    //   setRecipe(res.data);
    // }).catch(err => {console.log(err)});
    const fetchRecipe = async () => {
      const data = await getRecipe(url);
      console.log(data);
      setRecipe(data);
    };
    fetchRecipe();
  }, []);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt="" />
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
      <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
    </div>
  );
};

export default withErrorBoundary(Detail);
