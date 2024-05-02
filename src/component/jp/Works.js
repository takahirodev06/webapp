import "../../style/Works.css"
import React, {useEffect} from "react";
import work2 from "../../asset/0021.webp";
import work3 from "../../asset/0023.webp";
import work4 from "../../asset/0031.webp";
import work5 from "../../asset/0032.webp";
import work6 from "../../asset/0041.webp";
import work7 from "../../asset/0042.webp";
import work8 from "../../asset/0051.webp";
import work9 from "../../asset/0052.webp";

import css3 from "../../asset/css3.svg";
import html5 from "../../asset/html5.svg";
import JS from "../../asset/JS.png";
import Ts from "../../asset/Ts.png";
import nodejs from "../../asset/nodejs.svg";
import firebase from "../../asset/firebase.png";
import react from "../../asset/React-icon.svg.png";
import angularjs from "../../asset/icon angularjs.png";
import wp from "../../asset/wordpress.png";

function Works_Jp(props) {

    useEffect(() => {
        document.title = '実績 | TAKAHIRO YAMADA WEB CREATION';
        window.scroll({
            top: 0, // behavior: "smooth",
        });
    }, []);
    return (<div className="sub_container jp">
        <h2 className={""}>Work <span> 実績</span></h2>
        <section className="works_box">
            <div className="work_item"><h3 className="hide_pctab">Hiroki KURODA Site Officiel</h3>
                <div className="work_thumbnail">
                    <div className="thumbnail_pc"><img src={work5} alt=""/></div>
                    <div className="thumbnail_sp"><span></span><img src={work4} alt=""/></div>
                    <p><span><img src={react} alt="icon"/><img src={nodejs} alt="icon"/>
                            <img src={firebase} alt="icon"/></span><img src={html5} alt="icon"/>
                        <img src={css3} alt="icon"/><img src={Ts} alt="icon"/></p>
                </div>
                <div className="work_detail">
                    <h3 className="hide_sp">Hiroki KURODA Site Officiel</h3>
                    <h4><i>Artist, Peintre, Tarologue</i></h4>
                    <h4><a target="_blank" href="https://hirokikuroda.fr/"><u> https://hirokikuroda.fr</u></a></h4>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p><a target="_blank" href="https://hirokikuroda.fr/"
                          className={"visitsite"}><span>サイトを開く</span></a></p>

                </div>
            </div>

            <div className="work_item"><h3 className="hide_pctab">Atelier Sachiko | Fleuriste design floral à
                Paris</h3>
                <div className="work_thumbnail">
                    <div className="thumbnail_pc "><img src={work7} alt=""/></div>
                    <div className="thumbnail_sp"><span></span><img src={work6} alt=""/></div>
                    <p><img src={wp} alt="icon"/><img src={html5} alt="icon"/><img src={css3} alt="icon"/><span><img
                        src={JS} alt="icon"/></span></p>
                </div>
                <div className="work_detail">
                    <h3 className="hide_sp">Atelier Sachiko | Fleuriste design floral à Paris</h3>
                    <h4><i>Fleuriste indépendante</i></h4>
                    <h4><a target="_blank"
                           href="https://ateliersachiko.com/"><u>https://ateliersachiko.com</u></a></h4>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p><a target="_blank" href="https://ateliersachiko.com/"
                          className={"visitsite"}><span>サイトを開く</span></a>
                    </p>

                </div>
            </div>

            <div className="work_item"><h3 className="hide_pctab">Erika BEAUMEL | Psychologue et Coach spirituelle</h3>

                <div className="work_thumbnail">
                    <div className="thumbnail_pc"><img src={work3} alt=""/></div>
                    <div className="thumbnail_sp violet"><span></span><img src={work2} alt=""/></div>
                    <p><img src={angularjs} alt="icon"/><img src={nodejs} alt="icon"/><span><img src={firebase}
                                                                                                 alt="icon"/></span><img
                        src={html5} alt="icon"/><img src={css3} alt="icon"/><span><img src={Ts} alt="icon"/></span>
                    </p>
                </div>
                <div className="work_detail">
                    <h3 className="hide_sp">Erika BEAUMEL | Psychologue et Coach spirituelle</h3>
                    <h4><i>Psychologue clinicien, Coach spirituel</i></h4>
                    <h4><a target="_blank"
                           href="https://erikabeaumel-yamamoto.fr"><u> https://erikabeaumel-yamamoto.fr</u></a></h4>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p><a target="_blank" href="https://erikabeaumel-yamamoto.fr" className={"visitsite"}>
                        <span>サイトを開く</span></a>
                    </p>


                </div>
            </div>

            <div className="work_item"><h3 className="hide_pctab">Yukiyo Nomura | Coach professionnel</h3>
                <div className="work_thumbnail">
                    <div className="thumbnail_pc "><img src={work8} alt=""/></div>
                    <div className="thumbnail_sp"><span></span><img src={work9} alt=""/></div>
                    <p><img src={wp} alt="icon"/><img src={html5} alt="icon"/><img src={css3} alt="icon"/><span><img
                        src={JS} alt="icon"/></span></p>
                </div>
                <div className="work_detail ">
                    <h3 className="hide_sp">Yukiyo Nomura | Coach professionnel</h3>
                    <h4><i>Coach professionnel, Coach adolescent</i></h4>
                    <h4><a target="_blank"
                           href="http://shiawasenakaigaiseikatsu.com/"><u>https://shiawasenakaigaiseikatsu.com</u></a>
                    </h4>

                    <p></p>
                    <p></p>
                    <p></p>
                    <p><a target="_blank" href="http://shiawasenakaigaiseikatsu.com/"
                          className={"visitsite"}><span>サイトを開く</span></a>
                    </p>
                </div>
            </div>

        </section>
    </div>);
}

export default Works_Jp;