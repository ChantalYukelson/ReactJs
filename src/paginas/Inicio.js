import React from "react";
import estuardoImage from "../components/img/estuardo.png";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Inicio = () => {
  const greeting = '¡Bienvenidos a Estuardo!';

  return (
    <div>
    <img src={estuardoImage} alt="Estuardo" style={{ maxWidth: "100%", height: "auto" }} />
      <h1>{greeting}</h1>
      <ItemListContainer/>
      </div>
  );
};

export default Inicio;
