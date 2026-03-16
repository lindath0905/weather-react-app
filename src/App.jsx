import "./styles.css";
import WeatherSearch from "./WeatherSearch";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <h1>My weather search engine</h1>
      <WeatherSearch />
    </div>
  );
}
