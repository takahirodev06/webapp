import * as PropTypes from "prop-types";
import "../style/About.css"
import React, {useEffect} from "react";
import portait from "../asset/takahiro.jpg"
import {Link} from "react-router-dom";

import sns01 from "../asset/GH3.png";
import sns02 from "../asset/GL.png";
import sns03 from "../asset/GM.png";
import sns04 from "../asset/IS.png";
import sns05 from "../asset/linkdin.webp";
import sns06 from "../asset/TX.png";


function About(props) {

    useEffect(() => {
        document.title = 'A propos | TAKAHIRO YAMADA WEB CREATION';
        document.querySelector('meta[name="description"]').setAttribute("content", "Porfolio de Takahiro Yamada. Développeur Web Front-end  Spécialiste de React App, React Native, AngularJS, JavaScript, TypeScript. Production de sites web, renouvellement et rebranding disponibles.");

        window.scroll({
            top: 0, // behavior: "smooth",
        });
    }, []);

    return (<div className="sub_container about_page">
        <h2 className={""}>A propos</h2>
        <section className={"about_box"}>
            <div className={"about_photo"}>
                <img src={portait} alt=""/>
            </div>
            <div className={"about_txt"}>
                <h3>
                    <span className="about_txtjp">山田 隆広</span> <br/>
                    <span className="Gruppo">Takahiro YAMADA</span>
                </h3>
                <h4 className="Gruppo">Front-end web developer</h4>
                <div>
                    <p>Née en 1995 à Nagoya, au Japon.</p>
                    <br/>
                    <p><span>L</span>ors d'un séjour linguistique en France, je
                        suis tombée amoureuse de ce pays et j'ai décidé de m'y installer. J'ai quitté l'université et
                        suivi une
                        formation en javascript à Paris, et maintenant je travaille en tant que freelance.
                    </p>
                    <p> Je suis actuellement à la recherche d'un emploi.</p>
                </div>
                <div>
                    <p><span>J</span>e suis une personne curieuse, qui aime apprendre de nouvelles compétences liées au
                        web : graphisme, UI design, web marketing, etc. Je les mets en pratique dans mes projets web. Je
                        les mets en pratique dans mes projets web. J'apprends actuellement Photoshop et After Effects.

                    </p>
                    <p><span>M</span>es loisirs sont variés : internet en général, community management, lecture de
                        magazines, rugby, breakdance, cuisine internationale.
                    </p>
                </div>
            </div>
        </section>
        <div className={"about_sns"}>
            <a href="https://github.com/takahirodev06" target={"_blank"}>
                <span><img src={sns01} alt="github"/></span>
            </a>
            <a href="https://gitlab.com/Takahi" target={"_blank"}>
                <img src={sns02} alt="gitlab"/> </a>
            <a href="https://twitter.com/mr_increment" target={"_blank"}>
                <span><img src={sns06} alt="x"/></span>
            </a>
            <a href="https://www.instagram.com/yamada_web_creation/" target={"_blank"}>
                <img src={sns04} alt="instagram"/></a>
            <a href="https://www.linkedin.com/in/takahiro-y-551a1918b/" target={"_blank"}>
                <img src={sns05} alt="Linkd in"/> </a>
            <a href="mailto:takahirodev06@gmail.com">
                <img src={sns03} alt="gmail"/> </a>
        </div>

        <h2>About</h2>
        <section className={"about_box"}>
            <div className={"about_photo"}>
                <img src={portait} alt=""/>
            </div>
            <div className={"about_txt"}>
                <h3>
                    <span className="about_txtjp">山田 隆広</span> <br/>
                    <span className="Gruppo">Takahiro YAMADA</span>
                </h3>
                <h4 className="Gruppo">Front-end web developer</h4>
                <div>
                    <p> Born in 1995 in Nagoya, Japan.</p>
                    <br/>
                    <p><span>D</span>uring a language stay in France while studying international relations, I fell in
                        love with this country and decided to move there. I left university and followed a javascript
                        training in, Paris, where I now work as a freelancer.
                    </p>
                    <p> I am currently looking for a job. </p>
                </div>

                <div>
                    <p><span>I</span> am a curious person, who likes to learn new skills related to the web: graphic
                        design, UI
                        design, web marketing, etc. I put them into practice in my web projects. I am currently learning
                        Photoshop and After Effects.
                    </p>
                    <p><span>M</span>y hobbies are varied: internet in general, community management, reading magazines
                        rugby,
                        breakdance, international cooking.
                    </p>
                </div>


            </div>
        </section>
        <div className={"about_sns"}>
            <a href="https://github.com/takahirodev06" target={"_blank"}>
                <span><img src={sns01} alt="github"/></span>
            </a>
            <a href="https://gitlab.com/Takahi" target={"_blank"}>
                <img src={sns02} alt="gitlab"/> </a>
            <a href="https://twitter.com/mr_increment" target={"_blank"}>
                <span><img src={sns06} alt="x"/></span>
            </a>
            <a href="https://www.instagram.com/yamada_web_creation/" target={"_blank"}>
                <img src={sns04} alt="instagram"/></a>
            <a href="https://www.linkedin.com/in/takahiro-y-551a1918b/" target={"_blank"}>
                <img src={sns05} alt="Linkd in"/> </a>
            <a href="mailto:takahirodev06@gmail.com">
                <img src={sns03} alt="gmail"/> </a>
        </div>
    </div>)

}

export default About;


/*

1995年生まれ　出身　名古屋/日本

外国部に在籍時代にワーキングホリデーで初渡仏したあと、フランス移住を決意。
大学を中退してフランスパリのジャバスクリプトの専門学校に通った後フリーランスとして活動開始した。
求職中

現在はフォトショップとアフターエフェクトを勉強中。

趣味　
インターネット全般
コミュニティ運営
ラグビー
ブレイクダンス
各国料理

Je suis née en 1995 à Nagoya, au Japon.

Lors d’un séjour linguistique en France pendant mes études en relations internationales, j’ai eu le coup de foudre pour ce pays et j’ai décidé de m’y installer. J’ai quitté l’université et suivi une formation en javascript à Paris, où je travaille désormais en tant que freelance.

Je suis actuellement à la recherche d’un emploi.

Je suis une personne curieuse, qui aime apprendre de nouvelles compétences liées au web : design graphique, UI design, web marketing, etc. Je les mets en pratique dans mes projets web. Je me forme actuellement à Photoshop et After Effects.

Mes loisirs sont variés : internet en général, gestion de communautés, rugby, breakdance, cuisine internationale.





 */
