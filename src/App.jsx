import "./styles/App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Form from "./Pages/Form";
import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Detail from "./Pages/Detail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/envio" element={<Form />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
