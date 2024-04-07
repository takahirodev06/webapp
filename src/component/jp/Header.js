import "../../style/Header.css"
import {Link} from "react-router-dom";

function Header_Jp(props) {

    return (
        <header className="header jp" id="header">
            <div className="header_logo">
                <Link to="/">TAKAHIRO <br/> YAMADA <br/> WEB CREATION</Link>
            </div>
            <nav className="header_navi">
                <ul className="">
                    <li><Link to="/jp">Home</Link></li>
                    <li><Link to="/jp/services">Services</Link></li>
                    <li><Link to="/jp/works">Work</Link></li>
                    <li><Link to="/jp/about">About</Link></li>
                    {/*<li><Link to="/jp/blog">Blog</Link></li>*/}
                    <li><Link to="/jp/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="header_lang">
                <Link rel={"alternate"} to="/">fr</Link> /
                <Link rel={"alternate"} to="/en">en</Link> /
                <Link rel={"alternate"} to="/jp" className={"header_active_L"}>jp</Link>
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

export default Header_Jp;
