import './App.css';
import Home from './Home';
import Highlight from './Highlight';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/highlight' element={<Highlight></Highlight>}></Route>
          <Route path='/projects' element={<Projects></Projects>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
