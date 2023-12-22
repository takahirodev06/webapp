import {Link} from "react-router-dom";
import "../style/Navi.css"

function Navi(props) {
    return (
        <nav className="navi">
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/services">
                    <li>Services</li>
                </Link>
                <Link to="/works">
                    <li>Works</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/blog">
                    <li>Blog</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navi;