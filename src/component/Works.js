import "../style/Works.css"
import {useEffect} from "react";
import work2 from "../asset/0021.png";
import work3 from "../asset/0023.png";
import work4 from "../asset/0031.png";
import work5 from "../asset/0032.png";
import work6 from "../asset/0041.png";
import work7 from "../asset/0042.png";

import css3 from "../asset/css3.svg";
import html5 from "../asset/html5.svg";
import JS from "../asset/JS.png";
import Ts from "../asset/Ts.png";
import nodejs from "../asset/nodejs.svg";
import firebase from "../asset/firebase.png";
import react from "../asset/React-icon.svg.png";
import angularjs from "../asset/angularjs (1).png";


import wp from "../asset/wordpress.png";
import table from "../asset/table.png";
import {Link} from "react-router-dom";


function Works(props) {

    useEffect(() => {
        document.title = 'Works | TAKAHIRO YAMADA WEB CREATION';
        window.scroll({
            top: 0,
            // behavior: "smooth",
        });
    }, []);

    return (
        <div className="sub_container">
            <h2>Works</h2>
            <div className="work_border">
                <div></div>
            </div>
            <section className="work_box">
                <div className="work_item">
                    <div className="work_thumbnail">
                        <div className="thumbnail_pc"><img src={work5} alt=""/></div>
                        <div className="thumbnail_sp"><img src={work4} alt=""/></div>
                        <p><span><img src={react} alt="icon"/><img src={nodejs} alt="icon"/>
                            <img src={firebase} alt="icon"/></span><img src={html5} alt="icon"/>
                            <img src={css3} alt="icon"/><img src={Ts} alt="icon"/></p>
                        <a target="_blank" href="https://hirokikuroda.fr/"><span>Visit this page</span></a>
                    </div>
                    <div className="work_detail">
                        <h3>Hiroki KURODA Site Officiel</h3>
                        <h4><i>Artist, Peintre, Tarologue</i></h4>
                        <h4><a target="_blank" href="https://hirokikuroda.fr/"><u>https://hirokikuroda.fr</u></a></h4>
                        <p>Where does it come from?
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                                       amet..", comes from a line in section 1.10.32.</p>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                            Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin
                            words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                        </p>
                    </div>
                </div>
                <div className="work_item">
                    <div className="work_detail h3_right">
                        <h3 className="">Atelier Sachiko | Fleuriste design floral à Paris</h3>
                        <h4><i>Fleuriste indépendante</i></h4>
                        <h4><a target="_blank"
                               href="https://atelier-sachiko.com/"><u>https://atelier-sachiko.com</u></a></h4>
                        <p>Where does it come from?
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            amet..", comes from a line in section 1.10.32.</p>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                            Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin
                            words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                        </p>
                    </div>
                    <div className="work_thumbnail">
                        <div className="thumbnail_pc"><img src={work7} alt=""/></div>
                        <div className="thumbnail_sp"><img src={work6} alt=""/></div>
                        <p><img src={wp} alt="icon"/><img src={html5} alt="icon"/><img src={css3} alt="icon"/><span><img
                            src={JS} alt="icon"/></span></p>
                        <a target="_blank" href="https://atelier-sachiko.com/"><span>Visit this page</span></a>
                    </div>
                </div>
                <div className="work_item">
                    <div className="work_thumbnail">
                        <div className="thumbnail_pc"><img src={work3} alt=""/></div>
                        <div className="thumbnail_sp"><img src={work2} alt=""/></div>
                        <p><img src={angularjs} alt="icon"/><img src={nodejs} alt="icon"/><span><img src={firebase}
                                                                                                     alt="icon"/></span><img
                            src={html5} alt="icon"/><img src={css3} alt="icon"/><span><img src={Ts} alt="icon"/></span>
                        </p>
                        <a target="_blank" href="https://erikabeaumel-yamamoto.fr"><span>Visit this page</span></a>
                    </div>
                    <div className="work_detail">
                        <h3 className="">Erika BEAUMEL | Psychologue et Coach spirituelle</h3>
                        <h4><i>Psychologue clinicien, Coach spirituel</i></h4>
                        <h4><a target="_blank"
                               href="https://erikabeaumel-yamamoto.fr"><u>https://erikabeaumel-yamamoto.fr</u></a></h4>
                        <p>Where does it come from?
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            amet..", comes from a line in section 1.10.32.</p>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                            Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin
                            words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                        </p>
                    </div>
                </div>
                <div className="contact_btn">
                <u><Link to="/contact"><span>G</span>et in Touch</Link></u>
                </div>

            </section>
        </div>
    )
        ;
}

export default Works;