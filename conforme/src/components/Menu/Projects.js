import React, { useEffect } from "react";
import ProjectsDataGrid from "./ProjectsData";
import { useDispatch, useSelector } from "react-redux";
import { getProjet } from "../../redux/Action/ProjetAction";
import Myproject from "./Myproject";

function Projects() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { projet ,loading, error ,project } = useSelector(
    (state) => state.ProjReducer
  );

  useEffect(() => {
    if (token) {
      dispatch(getProjet(token));
    }
  }, [token]);
   if (!project) {
     return <h1>loading..</h1>;
   }
  return (
    <div className="projects">
       {project.map((el, index) => ( <Myproject projet={el} key={index} />   ))}
    </div>
  );
}

export default Projects;
