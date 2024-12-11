import axios from "axios";
import Swal from "sweetalert2";

export const getRecipe = async (url) => {
  try {
    const res = await axios(url);
    console.log(res);
    if (res.status !== 200) {
      Swal.fire({
        title: "Oops...",
        text: "Error al obtener detalle de la receta",
        icon: "error",
      });
      return;
    }
    return res.data;
  } catch (err) {
    Swal.fire({
      title: "Oops...",
      text: "Error al obtener detalle de la receta",
      icon: "error",
    });
  }
};
