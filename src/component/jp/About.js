import "../../style/About.css"
import React, {useEffect} from "react";
import portait from "../../asset/takahiro.jpg"

import sns01 from "../../asset/GH3.png";
import sns02 from "../../asset/GL.png";
import sns03 from "../../asset/GM.png";
import sns04 from "../../asset/IS.png";
import sns05 from "../../asset/linkdin.webp";
import sns06 from "../../asset/TX.png";

function About_Jp(props) {

    useEffect(() => {
        document.title = 'プロフィール | TAKAHIRO YAMADA WEB CREATION';
        document.querySelector('meta[name="description"]').setAttribute("content", "Porfolio de Takahiro Yamada. Développeur Web Front-end  Spécialiste de React App, React Native, AngularJS, JavaScript, TypeScript. Production de sites web, renouvellement et rebranding disponibles.");

        window.scroll({
            top: 0, // behavior: "smooth",
        });
    }, []);

    return (<div className="sub_container about_page">
        <h2>About <span> プロフィール</span></h2>
        <section className={"about_box"}>
            <div className={"about_photo"}>
                <img src={portait} alt=""/>
            </div>
            <div className={"about_txt about_jp"}>
                <h3>
                    <span className="about_txtjp">山田 隆広</span> <br/>
                    <span className="Gruppo">Takahiro YAMADA</span>
                </h3>
                <h4 className="Gruppo">Front-end web developer<br/> <span>フロントエンドエンジニア</span></h4>
                <div>
                    <p>1995年生 名古屋出身</p>
                    <br/>
                    <p>フランス・パリ在住。自分の体験したことのない世界を求めて海外移住を決意、フランスのjavascript専門学校に通い、2022年よりフリーランスとして活動しています。パリでは２００人規模の日本人コミュニティも運営しています。</p>
                </div>
                <div>
                    <p>総合的な視点からものをつくりたいのでグラフィックデザインやUIデザイン、webマーケティングにも日々勉強しております。</p>
                    <p>趣味 :
                        インターネット、雑誌、ラグビー、ブレイクダンス、歴史観光、各国料理etc </p>
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

export default About_Jp;


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
