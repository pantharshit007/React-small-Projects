import './App.css'
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import NotFound from './components/NotFound';
import MainHeader from './components/MainHeader';

function App() {

  return (
    <div>

    <div className="container">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ul>
    </div>

      <Routes>
        <Route path="/" element={<MainHeader/>}>  
          {/* Default Route */}
          <Route index element={<Home/>} />
          {/* child Routes */}
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
