import { useState } from 'react';

function App() {
  const [data, setData] = useState({});
  const [town, setTown] = useState('');

  const key = "db15b3b7e2554d459952a78dcdff61a4";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${key}`;

  const searchWeather = (event) => {
    if (event.key === "Enter") {

    }
  }

  return (
    <div className="app">
      <div className="inp-field">
        <input type="text"
          value={town}
          onChange={(event) => setTown(event.target.value)}
          placeholder="Enter location"
          onKeyDown={searchWeather}
        />

      </div>


      
    </div>
  );
}

export default App;
