import "../style/Header.css"
import {Link} from "react-router-dom";

function Header(props) {

    return (<header className="header" id="header">
        <div className="header_logo">
            <Link to="/">TAKAHIRO <br/> YAMADA <br/> WEB CREATION</Link>
        </div>
        <nav className="header_navi">
            <ul className="">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/works">Projets</Link></li>
                <li><Link to="/about">A propos</Link></li>
                {/*<li><Link to="/blog">Blog</Link></li>*/}
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <div className="header_lang">
            <Link rel={"alternate"} to="/" className={"header_active_L"}>fr</Link> /
            <Link rel={"alternate"} to="/en">en</Link> /
            <Link rel={"alternate"} to="/jp">jp</Link>
        </div>
        <div className="header_dark">
            <label htmlFor="theme" className="theme">
                <input id="theme" className="theme__toggle" type="checkbox" role="switch" name="theme"
                       value="dark"/>
            </label>
        </div>
    </header>)
}

export default Header;
