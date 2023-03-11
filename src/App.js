import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// 1. [X ] App
// 2. [ X] Header
// 4. [ X] Home
// 5. [ X ] Project Gallery
// 6. [X ] Project
// 7. [ X] Contact
import Home from './pages/Home'
import Contact from './pages/Contact';

import Project from './pages/Project';
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div>
          <Header/>
          <Routes>
             <Route path="/" element={<Home name={"Drew"} title={"web developer"}/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/project" element={<Project/>} />
          </Routes>

      </div>
    </Router>
  );
}





export default App;
