import React from 'react';
import './App.css';
import Button from "./components/button";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button
            className="my-button"
            fluid
        >Hello there!</Button>
      </header>
    </div>
  );
}

export default App;
