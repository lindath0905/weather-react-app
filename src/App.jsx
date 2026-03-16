import "./styles.css";
import WeatherSearch from "./WeatherSearch";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <h1>Weather search app</h1>
      <WeatherSearch />
    </div>
  );
}
