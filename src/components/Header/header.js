import './header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
      <header>
        <h1 className='header-name'>Andrew Jones</h1>
        <h2 className='subheader-name'>Software Engineer</h2>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            About
          </NavLink>
          <NavLink exact="true" aactiveclassname="active" className="contact-link" to="/contact">
            Contact
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
            Projects
          </NavLink>
        </nav>
      </header>
    );
  }

export default Header