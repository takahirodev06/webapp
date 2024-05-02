import {Link} from "react-router-dom";
import "../../style/Navi.css"
import sns01 from "../../asset/GH3.png";
import sns02 from "../../asset/GL.png";
import sns06 from "../../asset/TX.png";
import sns04 from "../../asset/IS.png";
import sns05 from "../../asset/linkdin.webp";
import sns03 from "../../asset/GM.png";
import React, {useCallback, useEffect, useState} from "react";
import About_Jp from "./About";

function Navi_En(props) {

    const [isNavi_on, setisNavi_on] = useState(false);

    useEffect(() => {
        if (isNavi_on) {
            document.body.classList.add('lockscr');
        } else {
            document.body.classList.remove('lockscr');
        }
    },);

    const SetScroll = () => {
        const button = document.querySelector("input[type='checkbox']")
        if (!isNavi_on) {
            setisNavi_on(true);
        } else {
            button.checked = false;
            setisNavi_on(false);
        }
    };


    return (
        <nav className="navi hide_pc">
            <input type="checkbox" id={"navi_toggle"} className={"navi_toggle"}/>
            {!isNavi_on ?
                <label htmlFor="navi_toggle" className={"btn_navi_toggle toggle_lines"} onClick={SetScroll}></label>
                :
                <label htmlFor="navi_toggle" className={"btn_navi_toggle toggle_linecross"} onClick={SetScroll}></label>
            }
            {isNavi_on && <div className={"navi_container"} onClick={SetScroll}>
                <ul className="navi_page">
                    <Link to="/en">
                        <li>Home</li>
                    </Link>
                    <Link to="/en/services">
                        <li>Services</li>
                    </Link>
                    <Link to="/en/works">
                        <li>Works</li>
                    </Link>
                    <Link to="/en/about">
                        <li>About</li>
                    </Link>
                    {/*<Link to="/en/blog">*/}
                    {/*    <li>Blog</li>*/}
                    {/*</Link>*/}
                    <Link to="/en/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
                <ul className="navi_sns">
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
            </div>}
        </nav>
    )
        ;
}

export default Navi_En;