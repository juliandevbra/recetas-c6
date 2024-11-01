import { useState } from "react";
import Message from "./Message";

const Form = () => {
  //   const [nombre, setNombre] = useState("");
  //   const [direccion, setDireccion] = useState("");

  const [user, setUser] = useState({
    nombre: "",
    direccion: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexNum = /\d/; // [0-9]
    console.log(regexNum.test(user.direccion));
    if (
      user.nombre.trim().length >= 3 &&
      regexNum.test(user.direccion) &&
      user.direccion.includes(" ")
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  console.log(user);
  return (
    <div>
      {/* {condicion ? true : false} */}
      {show ? (
        <Message nombre={user.nombre} direccion={user.direccion} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            value={user.nombre}
            onChange={(event) =>
              setUser({ ...user, nombre: event.target.value })
            }
          />
          <label>Dirección:</label>
          <input
            type="text"
            value={user.direccion}
            onChange={(event) =>
              setUser({ ...user, direccion: event.target.value })
            }
          />
          <button>Enviar</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              Por favor, escriba la información correctamente
            </h4>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Form;

// document.addEventListener('keypress', (e) => {
//     console.log(event)
//     if(e.key === 'F'){

//     }
// })

// if(condicion){
//     //que pasa si condicion es true
// } else {
//     //que pasa si condicion es false
// }
