import React, { useEffect, useState } from "react";

const FetchExample = () => {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  const url = "https://dog.ceo/api/breeds/image/random";
  console.log(dog);

  useEffect(() => {
    fetch(url)
      .then((respuesta) => {
        console.log(respuesta);
        if (!respuesta.ok) {
          throw new Error("Error al obtener respuesta");
        }
        return respuesta.json();
      })
      .then((data) => {
        console.log(data);
        if (data) {
          setDog(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const func = () => {};

  return (
    <div>
      {loading ? "Cargando..." : <img src={dog.message} alt="" width={400} />}
    </div>
  );
};

export default FetchExample;

//Montaje
//Parte funcional
//Parte Render
//useEffect -> cambio de estado

//Actualización
//Parte funcional
//Parte Render
