import './Navbar.css';
import Resume from '../../res/documents/Joseph_Pacitto_Resume.pdf';
import { Link } from 'react-router-dom';

function Navbar()
{
    return (
        <div className="navbar">
            <div className="name">
                Joseph Pacitto
            </div>
            <nav className="navlinks">
                <Link to="/about" className="link">about</Link>
                <Link to="/projects" className="link">projects</Link>
                <Link to="/blog" className="link">blog</Link>
                <a className="link" href={Resume} target="_blank" rel="noreferrer">resume</a>
            </nav>
        </div>
    )
}

export default Navbar;