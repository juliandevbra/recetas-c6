import { useEffect, useState } from "react";

const FuncComponent = () => {
  console.log("Cuerpo de la función");
  const [nombre, setNombre] = useState("");
  const [contador, setContador] = useState(0);
  const [loading, setLoading] = useState(true);

  //componentDidMount()
  useEffect(() => {
    console.log("Montaje (Esto ocurre una sola vez)");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  //componentDidUpdate(){}
  useEffect(() => {
    console.log(
      "Esto se ejecuta en el montaje y cuando se actualizan las dependencias (nombre o contador)"
    );
  }, [nombre, contador]);

  //componentWillUnmount(){}
  useEffect(() => {
    return () => {
      console.log("Se desmontó el componente");
    };
  }, []);

  return (
    <div>
      {console.log("Render")}
      {loading ? (
        "Cargando..."
      ) : (
        <>
          <h1>{contador}</h1>
          <button onClick={() => setContador(contador + 1)}>+</button>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
          <input type="text" />
        </>
      )}
    </div>
  );
};

export default FuncComponent;
