import "../../style/Header.css"
import {Link} from "react-router-dom";
import About_Jp from "./About";
function Header_En(props) {

    return (
        <header className="header" id="header">
            <div className="header_logo">
                <Link to="/">TAKAHIRO <br/> YAMADA <br/> WEB CREATION</Link>
            </div>
            <nav className="header_navi">
                <ul className="">
                    <li><Link to="/en">Home</Link></li>
                    <li><Link to="/en/services">Services</Link></li>
                    <li><Link to="/en/works">Work</Link></li>
                    <li><Link to="/en/about">About</Link></li>
                    {/*<li><Link to="/en/blog">Blog</Link></li>*/}
                    <li><Link to="/en/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="header_lang">
                <Link rel={"alternate"} to="/" >fr</Link> /
                <Link rel={"alternate"} to="/en" className={"header_active_L"}>en</Link> /
                <Link rel={"alternate"} to="/jp">jp</Link>
            </div>
            <div className="header_dark">
                <label htmlFor="theme" className="theme">
                    <input id="theme" className="theme__toggle" type="checkbox" role="switch" name="theme"
                           value="dark"/>
                </label>
            </div>
        </header>
    )
}

export default Header_En;
