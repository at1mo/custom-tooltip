import React from 'react';
import './app.css';
import Tooltip from '../tooltip/tooltip';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Tooltip content="Test tooltip">
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </Tooltip>
      </header>
    </div>
  );
}

export default App;
