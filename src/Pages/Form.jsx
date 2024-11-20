import { useState } from "react";
import Message from "../Components/Message";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    direccion: "",
  });
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexNum = /\d/;

    if (
      user.nombre.trim().length >= 3 &&
      regexNum.test(user.direccion) &&
      user.direccion.includes(" ")
    ) {
      setShow(true);
      setError(false);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      setError(true);
    }
  };
  console.log(user);
  return (
    <div>
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
