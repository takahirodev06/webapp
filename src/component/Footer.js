import "../style/Footer.css"
import sns06 from "../asset/xicongray.png";
import sns04 from "../asset/insta.png";
import sns05 from "../asset/linkdin.webp";
import sns01 from "../asset/github.png";
import sns02 from "../asset/gitlab.png";
import sns03 from "../asset/gmail.png";

function Footer(props) {
    return (
        <footer className="footer Basic">
            <p>Copyright © 2023 YAMADA TAKAHIRO WEB CREATION</p>
            <div className="hideall">
                <p className="">No set © 2023 YAMADA TAKAHIRO WEB C 隆広</p>
                <p className="Basic">Basic © 2023 YAMADA TAKAHIRO WEB C 隆広</p>
                <p className="Gruppo">Gruppo © 2023 YAMADA TAKAHIRO WEB C 隆広</p>
                <p className="Vollkorn">Vollkorn © 2023 YAMADA TAKaushanKAHIRO WEB C 隆広</p>
                <p className="Allura">Allura © 2023 YAMADA TAKAHIRO WEB C 隆広</p>
                <p className="Kaushan">Kaushan © 2023 YAMADA TAKAHIRO WEB C 隆広</p>
                <p className="Parisienne">Parisienne © 2023 YAMADA TAKAHIRO WEB C 隆広</p>
                <p className="Yuji">Yuji © 2023 YAMADA TAKAHIRO WEB C 隆広</p>
                <p className="ZenAntique">ZenAntique © 2023 YAMADA TAKAHIRO WEB C 隆広</p>
                <p className="ZenDots">ZenDots © 2023 YAMADA TAKAHIRO WEB C 隆広</p>
            </div>
        </footer>
    );
}

export default Footer;