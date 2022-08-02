import React from "react";
import Sidebar from "../topBar/SideBar";
import TopBar from "../topBar/TopBar";
import "./auditeur.css";
import Home from "./Home";
import { Navigate } from "react-router-dom";
import ListeProjets from "../ListeProjets/Index";

function Auditeur() {
  const token = localStorage.getItem("token");
  return (
    <div>
      {!token ? (
        <Navigate to="/" />
      ) : (
        <div className="Auditeur">
          <TopBar />
          <div className="container">
            <Sidebar />
            <Home />
          </div>
        </div>
      )}
    </div>
  );
}

export default Auditeur;
