import "../style/Header.css"
import {Link} from "react-router-dom";

function Header(props) {

    return (
        <header className="header" id="header">
            <div className="header_logo">
                <Link to="/">TAKAHIRO <br/> YAMADA <br/> WEB CREATION</Link>
            </div>
            <nav className="header_navi">
                <ul className="">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/works">Works</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="header_lang"><Link to="/">fr</Link> /<Link to="/"> en</Link> /<Link to="/"> jp</Link></div>
            <input id="checkbox_toggle" type="checkbox" className="check"/>
            <label className="slide" htmlFor="checkbox_toggle">
                <label className="toggle" htmlFor="checkbox_toggle"></label>
                <label className="text" htmlFor="checkbox_toggle">Light</label>
                <label className="text" htmlFor="checkbox_toggle">Dark</label>
            </label>
        </header>
    );
}

export default Header;
