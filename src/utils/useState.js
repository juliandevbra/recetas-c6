//Esto no es el real useState sino una representación
const useState = (valorInicial) => {
  let estado = valorInicial;

  const actualizadorEstado = (valorNuevo) => {
    estado = valorNuevo;
  };

  return [estado, actualizadorEstado];
};
