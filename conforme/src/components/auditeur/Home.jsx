import ListeProjets from "../ListeProjets/Index";
import Chart from "./Chart";
import "./home.css";
import Info from "./Info";

export default function Home() {
  return (
    <div className="home">
      <Info />
      <Chart />
      <ListeProjets />
    </div>
  );
}
