import "./App.css";
// import Navbar, { Logo, OtroElemento } from "./Components/Navbar";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1>Bienvenidos a proyecto Recetas</h1>
      <Card title="Ejemplo receta 1" text="Como hacer un caldo de verduras" />
      <Card
        title="Mi receta n° 2"
        text="Con este truco el risotto te va a salir genial!"
      />
      <Card title="Tercera receta" text="La clave para amasar pizza" />

      <hr />
      <h2>Quienes somos</h2>
      <Card title="Luisa García" text="Diseño UX/UI y SEO">
        <h4>Behance</h4>
        <h4>Twitter</h4>
      </Card>
      <Card title="Adriana Cadavid Tabares" text="Backend y Devops">
        <h4>Linkedin</h4>
      </Card>
    </>
  );
}

export default App;
