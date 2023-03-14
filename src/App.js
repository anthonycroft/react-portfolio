import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
// 1. [X ] App
// 2. [ X] Header
// 4. [ X] Home
// 5. [ X ] Project Gallery
// 6. [X ] Project
// 7. [ X] Contact
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import projectsData from './data/projectsData';

// import ProjectCard from './components/ProjectCard';
import Header from "./components/Header";
import NotFound from './pages/NotFound';

function App() {

  const [projects, setProjects] = useState([]);
  const siteTitle = "Anthony Croft";
  const title = "Anthony Croft: Conjuring Digital Magic with Bold Design and Code Wizardry.";
  const contactTitle1 = "Want to work together or chat? Come say hey at ";
  const contactTitle2 = "(or use the form below to send me a message.)";
  const email = "tony@vbasolutions.co.uk"

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
            <Header title={siteTitle}/>
            <Routes>
              <Route path="/" element={<Home title={title}/>} />
              {/* <Route path="/about" element={<About contactTitle={contactTitle}/>} /> */}
              <Route path="/contact" element={<Contact contactTitle1={contactTitle1} contactTitle2={contactTitle2} email={email}/>} />
              <Route path="/work" element={<Work/>} />
              {/* <Route path="/projectCard" element={<ProjectCard/>} /> */}
              <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
      </Router>

      {/* display projects */}
      <div className="container">
        {/* {projects.map((project) => (
          <ProjectCard key={project.name} project={project.name} />
        ))} */}
      </div>
      {}
    </div>
  );
}

export default App;
