import React from "react";
import "./Myproject.css";
function Myproject({ projet }) {
  console.log(projet);
  return (
    <div className="chart">
      <div>Nom de projet :{projet[0]}</div>
      <div>Nom de l'organisme : {projet[1]}</div>
    </div>
  );
}

export default Myproject;
