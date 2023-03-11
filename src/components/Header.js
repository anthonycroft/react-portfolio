import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="contact">Contact</Link>
      <Link to="project">Project</Link>
    </header>
  );
};


export default Header