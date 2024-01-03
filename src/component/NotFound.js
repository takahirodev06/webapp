import "../style/NotFound.css"
import {useEffect} from "react";
import {Link} from "react-router-dom";

function NotFound(props) {
    useEffect(() => {
        document.title = '404 error |TAKAHIRO YAMADA WEB CREATION';
        window.scroll({
            top: 0,
            // behavior: "smooth",
        });
    }, []);
    return (
        <div className="sub_container gridcenter notfound">
            <h1>404 <br/> Page Not Found</h1>
            <p>Sorry. The page you are looking for might have been removed or is temporarily unavailable.</p>
            <p>Désolé. La page que vous recherchez a peut-être été supprimée ou est temporairement indisponible.</p>
            <p><span>お探しのページは削除されたか、または一時的に利用できなくなっている可能性があります。</span></p>
            <Link to="/" className={'Gruppo'}>Home</Link>
        </div>
    );
}

export default NotFound;