
import './App.css';
import Slider from './components/Slider.js';
import data from './data.js';

function App() {
  return (
    <div className="App">

      <div className="my-[2rem]  ">
        <span className="text-blue-900 text-2xl font-bold">Card Slider</span>
      </div>
      <div className="slider">
        <Slider data = {data}/>
      </div>
    </div>
  );
}

export default App;
