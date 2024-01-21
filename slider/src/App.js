
import './App.css';
import Slider from './components/Slider.js';
import data from './data.js';

function App() {
  return (
    <div className="App">

      <div className="mb-[5rem]">
        Card Slider
      </div>
      <div className="slider">
        <Slider data = {data}/>
      </div>
    </div>
  );
}

export default App;
