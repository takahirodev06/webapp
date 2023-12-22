import "../style/Sidebar.css"
import {useEffect, useState} from "react";
import sns06 from "../asset/TX.png";
import sns04 from "../asset/IS.png";
import sns05 from "../asset/linkdin.webp";
import sns01 from "../asset/GH3.png";
import sns02 from "../asset/GL.png";
import sns03 from "../asset/GM.png";

function Helmet(props) {
    return null;
}

function Sidebar(props) {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        document.title = 'TAKAHIRO YAMADA WEB CREATION';
        window.scroll({
            top: 0,
            behavior: "smooth",
        });

        const onScroll = () => setOffset(window.pageYOffset / 1.5);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);

    }, []);


    return (
        <div  className={"sidebar_container"}>
            <ul>
                <li><a href="#" target={"_blank"}><span><img src={sns01} alt="sns"/></span></a></li>
                <li><a href="#" target={"_blank"}><img src={sns02} alt="sns"/></a></li>
                <li><a href="#" target={"_blank"}><span><img src={sns06} alt="sns"/></span></a></li>
                <li><a href="#" target={"_blank"}><img src={sns04} alt="sns"/></a></li>
                <li><a href="#" target={"_blank"}><img src={sns05} alt="sns"/></a></li>
                <li><a href="#" target={"_blank"}><img src={sns03} alt="sns"/></a></li>
            </ul>

        </div>
    );
}

export default Sidebar;