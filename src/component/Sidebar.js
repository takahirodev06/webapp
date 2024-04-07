import "../style/Sidebar.css"
import React, {useEffect, useState} from "react";

import sns01 from "../asset/GH3.png";
import sns02 from "../asset/GL.png";
import sns03 from "../asset/GM.png";
import sns04 from "../asset/IS.png";
import sns05 from "../asset/linkdin.webp";
import sns06 from "../asset/TX.png";


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
        <div className={"sidebar_container"}>
            <ul>
                <li><a href="https://github.com/takahirodev06" target={"_blank"}>
                    <span><img src={sns01} alt="github"/></span>
                </a></li>
                <li><a href="https://gitlab.com/Takahi" target={"_blank"}>
                    <img src={sns02} alt="gitlab"/> </a></li>
                <li><a href="https://twitter.com/mr_increment" target={"_blank"}>
                    <span><img src={sns06} alt="x"/></span>
                </a></li>
                <li><a href="https://www.instagram.com/yamada_web_creation/" target={"_blank"}>
                    <img src={sns04} alt="instagram"/></a></li>
                <li><a href="https://www.linkedin.com/in/takahiro-y-551a1918b/" target={"_blank"}>
                    <img src={sns05} alt="Linkd in"/> </a></li>
                <li><a href="mailto:takahirodev06@gmail.com">
                    <img src={sns03} alt="gmail"/> </a></li>
            </ul>
        </div>
    );
}

export default Sidebar;