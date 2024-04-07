import "../../style/Sidebutton.css"
import {useEffect, useState} from "react";
import send from "../../asset/icon_send.png";
import {Link} from "react-router-dom";

function Helmet(props) {
    return null;
}

function Sidebutton_jp(props) {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
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
        <div className={"sidebutton_container jp"}>
            <Link to="/jp/contact">Contact <img src={send} alt="send"/></Link>
        </div>
    );
}

export default Sidebutton_jp;