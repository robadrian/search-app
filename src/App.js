import './App.css';
import { useState } from 'react';
import { SearchImages } from './components/api';
import RenderImg from './components/images';

function App() {
  const [input, setInput] = useState();
  const [state, setState] = useState();
  
  const search = () => {
    setState(input);
  }
  const searchData = SearchImages(state);

  return (
    <div className="App">

      <div className="search">
            <input placeholder='Search' onChange={(event) => setInput(event.target.value)}></input>
            <button onClick={search}>Search</button>
        </div>

      <div className='imgs'>
      {
        searchData.slice(0, -1).map((img, key) => {

          return <RenderImg src={img.urls.thumb} key={key}/>
        })
      }
      </div>
    </div>
  );
}

export default App;
