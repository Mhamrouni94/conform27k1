import "./sideBar.css";
import { MdLineStyle } from "react-icons/md";
import { GoChecklist } from "react-icons/go";
import { BiTrendingUp } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="SideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">
            {" "}
            Evaluez la conformité avec la norme ISO 27001
          </h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <MdLineStyle className="sideBarIcon" />
              Home
            </li>
            <li Component={Link} to="/Project" className="sideBarListItem">
              <GoChecklist className="sideBarIcon" />
              Projets
            </li>
            <li className="sideBarListItem">
              <BiTrendingUp className="sideBarIcon" />
              Statistiques
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
