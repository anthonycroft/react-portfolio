// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <h3>{props.title}</h3>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/work">Work</NavLink>
      </nav>
    </header>
  );
};


export default Header;