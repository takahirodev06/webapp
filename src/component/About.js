import * as PropTypes from "prop-types";
import "../style/About.css"
import React, {useEffect} from "react";
import portait from "../asset/takahiro.jpg"
import {Link} from "react-router-dom";

import sns01 from "../asset/github.png";
import sns02 from "../asset/gitlab.png";
import sns03 from "../asset/gmail.png";
import sns04 from "../asset/insta.png";
import sns05 from "../asset/linkdin.webp";
import sns06 from "../asset/xicongray.png";


function About(props) {

    useEffect(() => {
        document.title = 'About | TAKAHIRO YAMADA WEB CREATION';
        window.scroll({
            top: 0,
            // behavior: "smooth",
        });
    }, []);

    return (<div className="sub_container about_page">
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
                    <p> born in 1995 in Nagoya, Japan.</p>
                    <br/>
                    <p> During a language stay in France while studying international relations, I fell in love with
                        this
                        country and decided to move there. I left university and followed a javascript training in
                        Paris,
                        where I now work as a freelancer.
                    </p>
                    <p>
                        I am currently looking for a job.
                    </p>
                </div>

                <div>
                    <p>I am a curious person, who likes to learn new skills related to the web: graphic design, UI
                        design,
                        web marketing, etc. I put them into practice in my web projects. I am currently learning
                        Photoshop
                        and After Effects.
                    </p>
                    <p> My hobbies are varied: internet in general, community management, reading magazines rugby,
                        breakdance, international cooking.
                    </p>
                </div>


            </div>
        </section>
        <div className={"about_sns"}>
            <p>
                <span><img src={sns06} alt="sns"/></span>
                <span><img src={sns04} alt="sns"/></span>
                <span><img src={sns05} alt="sns"/></span>
                <img src={sns01} alt="sns"/>
                <img src={sns02} alt="sns"/>
                <img src={sns03} alt="sns"/>
            </p>
        </div>
        <div className="contact_btn">
            <u><Link to="/contact"><span>G</span>et in Touch</Link></u>
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
