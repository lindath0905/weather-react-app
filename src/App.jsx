import "./styles.css";
import WeatherSearch from "./WeatherSearch";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <h1>Weather search app</h1>
      <WeatherSearch />
      <footer>
        <a href="https://github.com/lindath0905/weather-react">
          Open-source code
        </a>
        , by <a href="https://github.com/lindath0905">Linda Thurner</a>
      </footer>
    </div>
  );
}
