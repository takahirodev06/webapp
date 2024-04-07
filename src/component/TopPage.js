import "../style/TopPage.css"
import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";
import {useEffect, useState} from "react";


function Helmet(props) {
    return null;
}

function TopPage(props) {

    useEffect(() => {
        document.title = 'TAKAHIRO YAMADA WEB CREATION';
        document.querySelector('meta[name="description"]').setAttribute("content", "Porfolio de Takahiro Yamada. Développeur Web Front-end  Spécialiste de React App, React Native, AngularJS, JavaScript, TypeScript. Production de sites web, renouvellement et rebranding disponibles.");
        window.scroll({
            top: 0,
            // behavior: "smooth",
        });
    }, []);


    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset / 1.5);

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    return (
        <div className="top_container">
            <section className="top_code" style={{top: offset + "px"}}>
                <p>&lt;!DOCTYPE html&gt;</p>
                <p>&lt;html&gt;</p>
                <p><span>&lt;head&gt;</span></p>
                <p><span>&nbsp;&lt;title&gt;My web page&lt;/title&gt;</span></p>
                <p><span>&lt;/head&gt;</span></p>
                <p><span>&lt;body&gt;</span></p>
                <p><span>&nbsp;&nbsp;&lt;h1&gt;Hello, world!&lt;/h1&gt;</span></p>
                <p><span>&nbsp;&nbsp;&lt;p&gt;This is my first web page.&lt;/p&gt;</span></p>
                <p><span>&nbsp;&nbsp;&lt;p&gt;It contains a&lt;strong&gt;main heading&lt;/strong&gt;</span></p>
                <p><span>&lt;em&gt; paragraph &lt;/em&gt;.</span></p>
                <p><span>&lt;form&gt;</span></p>
                <p><span>&nbsp;&nbsp;&lt;label for="firstname"&gt;First name: &lt;/label&gt;</span></p>
                <p><span>&nbsp;&nbsp;&lt;input type="text" name="firstname" required&gt;</span></p>
                <p><span>&nbsp;&nbsp;&lt;br&gt;</span></p>
                <p><span>&nbsp;&nbsp;&lt;label for="lastname" &gt;Last name: &lt;/label&gt;</span></p>
                <p><span>&nbsp;&nbsp;&lt;input type="text" name="lastname" required&gt;</span></p>
                <p><span>&nbsp;&nbsp;&lt;br&gt;</span></p>
                <p><span>&nbsp;&nbsp;&lt;label for="email"&gt;email: &lt;/label&gt;</span></p>
                <p><span>&nbsp;&nbsp;&lt;input type="email" name="email" required&gt;</span></p>
                <p><span>&nbsp;&nbsp;&lt;br&gt;</span></p>
                <p><span>&nbsp;&nbsp;&lt;label for="password" &gt;password: &lt;/label&gt;</span></p>
                <p><span>&nbsp;&nbsp;&lt;input type="password" name="password" required&gt;</span></p>
                <p><span>&nbsp;&nbsp;&lt;br&gt;</span></p>
                <p><span>&nbsp;&nbsp;&lt;input type="submit" value="Login!"&gt;</span></p>
                <p>&nbsp;&lt;/form&gt;</p>
                <p>&nbsp;&lt;/body&gt;</p>
                <p>&lt;/html&gt;</p>
            </section>
            <section className="top_view gridcenter">
                <h1 className="top_title">
                    <span>TAKAHIRO</span>
                    <span>YAMADA</span>
                    <span>WEB CREATION</span></h1>
                <h2 className="top_subt">&nbsp;Front-end web developer</h2>
            </section>
            <section className="top_navi">
                <ul>
                    <Link to="/">
                        <li className={""}>Accueil</li>
                    </Link>
                    <Link to="/services">
                        <li className={""}>Services</li>
                    </Link>
                    <Link to="/works">
                        <li className={""}>Projets</li>
                    </Link>
                    <Link to="/about">
                        <li className={""}>A propos</li>
                    </Link>
                    {/*<Link to="/blog">*/}
                    {/*    <li>Blog</li>*/}
                    {/*</Link>*/}
                    <Link to="/contact">
                        <li className={""}>Contact</li>
                    </Link>
                </ul>
            </section>
        </div>
    );
}

export default TopPage;