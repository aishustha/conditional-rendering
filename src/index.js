import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import jokesData from './jokesData';
import Joke from './Joke';

function App() {
  const [data, isData] = useState(jokesData);

  const jokeElements = data.map(datas => {
      return <Joke setup={datas.setup} punchline={datas.punchline} />
  })

  return (
    <div>
      {jokeElements}
    </div>
  )
}
ReactDOM.render(<App/>,document.getElementById('root'));


