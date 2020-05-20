import React from "react";
import imagen from "../img/diseno-error-404-.jpg";

const NotFoundPAge = () => {
  const refUrl = (
    <a
      href="https://www.freepik.es/fotos-vectores-gratis/fondo"
      target="_blank"
      rel="noopener noreferrer"
    >
      Vector de Fondo creado por freepik - www.freepik.es
    </a>
  );
  return (
    <>
      <div>
        <img
          src={imagen}
          alt="notFound"
          className="img-fluid mx-auto d-block rounded mt-4"
        ></img>
        <p className="text-center">{refUrl}</p>
      </div>
    </>
  );
};

export default NotFoundPAge;
