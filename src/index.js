import React from "react";
import ReactDOM from "react-dom";

const fName = "Edgar";
const lName = "Gómez";

const fechaActual = new Date();
const año = fechaActual.getFullYear();

const lucky = 7;

ReactDOM.render(
  <div>
    <h1 className="estilo1" contentEditable="true" spellCheck="false">
      Hola {fName + " " + lName}
    </h1>
    <div>
      <img
        class="imagenes"
        alt="miau1"
        src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc"
      />
      <img
        className="imagenes"
        alt="miau2"
        src="https://ichef.bbci.co.uk/news/640/cpsprodpb/10E9B/production/_109757296_gettyimages-1128004359.jpg"
      />
      <img
        className="imagenes"
        alt="miau3"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2RTgkk6XmX3fYdtHjXxCJXocOPrhifIKiGQ&usqp=CAU"
      />
    </div>
  </div>,
  document.getElementById("root")
);
