import { useState } from 'react';

function App() {

  const [data, setData] = useState({});
  const [town, setTown] = useState('');

  return (
    <div className="app">
      <div className="inp-field">
        <input type="text"
          value={town}
          onChange={(event) => setTown(event.target.value)}
        />

      </div>


      
    </div>
  );
}

export default App;
