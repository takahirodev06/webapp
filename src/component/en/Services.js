import "../../style/Services.css"
import "../../style/Service_sp.css"
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import mainte from "../../asset/mainte3.png";

function Services_En(props) {

    const [radioChecked, setradioChecked] = useState("");
    const [current_policy, setCurrent_policy] = useState(0);
    const [offset, setOffset] = useState(0);
    const [transdepth, setTransdepth] = useState(null);

    useEffect(() => {
        document.title = 'Services | TAKAHIRO YAMADA WEB CREATION';
        window.scroll({
            top: 0,
        });
        return () => {
        }
    }, []);

    useEffect(() => {
        function onScroll() {
            setOffset(window.pageYOffset)
            /*　スクロール量 */
            const offsetY = (window.pageYOffset - 100);
            /*　今なん個め　*/
            const current_policy = Math.floor(offsetY / 1800);
            setCurrent_policy(current_policy)
            /*　ひとつのスクロール量　*/
            const offset_policy = Math.floor(offsetY % 1800);

            const depth = -900 + offset_policy

            const translateZ = 'perspective(1000px) translateZ(-800px);';
            const lineh = () => {
                if (offset_policy < 1500) {
                    return "100%"
                } else {
                    return (offset_policy - 1500) / 10 + 100 + "%"
                }
            }
            const kerning = () => {
                if (offset_policy < 1500) {
                    return "0"
                } else {
                    return (offset_policy - 1500) / 1500 + "em"
                }
            }
            const N_opacity = () => {
                if (offset_policy < 1500) {
                    return "1"
                } else {
                    return (offset_policy - 1500) / 10
                }
            }

            setTransdepth({
                transform: translateZ,
            })
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);

    }, [offset]);

    const handleRadio = (value) => {
        if (value === radioChecked) {
            const chbx = document.querySelectorAll("input[name='radio_slide']");
            for (let i = 0; i < chbx.length; i++) {
                chbx[i].checked = false;
            }
            const cible = document.querySelector(".srv_marketing");
            cible.classList.remove("s_m_checking");
            setradioChecked("");
        } else if (value === "reset") {
            const chbx = document.querySelectorAll("input[name='radio_slide']");
            for (let i = 0; i < chbx.length; i++) {
                chbx[i].checked = false;
            }
            const cible = document.querySelector(".srv_marketing");
            cible.classList.remove("s_m_checking");
            setradioChecked("");
        } else {
            const cible = document.querySelector(".srv_marketing");
            cible.classList.add("s_m_checking");
            setradioChecked(value);
        }
    };

    return (<div className="sub_container service_page">
        <h2>Services</h2>
        <section className="Website_dev">
            <h3>Website development</h3>
            <div className={"srv_development_container"}>
                <div className={"srv_development"}>
                    <div className={"srv_dev_hexs hexs_1"}>
                        <div className={"srv_dev_hex"} style={{animationDelay: '0.2s'}}>
                            <h4>Build <br/>new Website</h4>
                        </div>
                        <div className={"srv_dev_hex"} style={{animationDelay: '0.9s'}}>
                            <p>LP</p>
                            <p>HP for enterprise,</p>
                            <p>IR sites,</p>
                            <p>Recruiting pages,</p>
                            <p>Campaign Pages, </p>
                            <p>Media sites</p>
                        </div>
                    </div>
                    <div className={"srv_dev_hexs  hexs_2"}>
                        <div className={"srv_dev_hex"} style={{animationDelay: '0.7s'}}>
                            <h4>Website <br/> redesign</h4></div>
                        <div className={"srv_dev_hex"} style={{animationDelay: '1.1s'}}>
                            <p>Update and optimise website performance</p>
                            <p>Rebranding your business</p>
                        </div>
                    </div>
                    <div className={"srv_dev_hexs  hexs_3"}>
                        <div className={"srv_dev_hex"} style={{animationDelay: '0.4s'}}>
                            <h4>Webite <br/> modifications</h4></div>
                        <div className={"srv_dev_hex"} style={{animationDelay: '1.3s'}}>
                            <p>Update informations</p>
                            <p>Add new pages or new datas</p>
                        </div>
                    </div>
                    <div className={"srv_dev_hexs  hexs_4"}>
                        <div className={"srv_dev_hex"} style={{animationDelay: '0.6s'}}>
                            <h4>Smartphone <br/> support</h4></div>
                        <div className={"srv_dev_hex"} style={{animationDelay: '0.3s'}}>
                            <p>Adopt your website <br/> to mobile</p>
                            <p>Optimise all contents Mobile Friendly</p>
                        </div>
                    </div>
                    <div className={"srv_dev_hexs  hexs_5"}>
                        <div className={"srv_dev_hex"} style={{animationDelay: '1.2s'}}>
                            <h4>Multilingual <br/> support</h4></div>
                        <div className={"srv_dev_hex"} style={{animationDelay: '0.8s'}}>
                            <p>Globalise your business through translation and localisation</p>
                            <p></p>
                            <p>FR / EN /JP </p>
                        </div>
                    </div>
                    <div className={"srv_dev_hexs  hexs_6"}>
                        <div className={"srv_dev_hex"} style={{animationDelay: '0.5s'}}>
                            <h4> SEO <br/> support</h4></div>
                        <div className={"srv_dev_hex"} style={{animationDelay: '1s'}}>
                            <p>Improving your website’s visibility <br/>
                                in terms of technical and content</p>
                        </div>
                    </div>
                </div>
                <div className="srv_dev_contact">
                    <Link to="/contact">Contact </Link>
                </div>
            </div>
        </section>
        <section className="Workflow">
            <h3>Website Development Workflow</h3>
            <div className={"srv_workflow"}>
                <div className={"srv_workflow_step"}>
                    <h4><span>1.</span>Meeting and Needs Assessment</h4>
                    <p>Purpose, target, budget,current issues?</p>
                </div>

                <div className={"srv_workflow_step"}>
                    <h4><span>2.</span>Proposal, Quotation, and Order Confirmation
                    </h4>
                    <p>Launch our new project</p>

                    {/*
                        <p>Based on the information gathered during the needs assessment, we will conduct an analysis of
                            the  current situation, research competitors, and define requirements. We will organize the
                            planned   number of pages and content volume, and provide you with a quotation and proposal document
                            together.</p>
                        <p>When requesting our services, we will exchange order confirmation documents. (Production
                            costs will be invoiced for payment after delivery.)</p>  */}
                </div>
                <div className={"srv_workflow_step"}>
                    <h4><span>3.</span>Structure and Wireframe</h4>
                    <p>Design UI / UX to achieve your marketing goal</p>

                    {/*<p>During this stage, we will prepare materials such as photos and text for inclusion and finalize   the  content. We will also determine the specifications for the website.</p>*/}
                </div>
                <div className={"srv_workflow_step"}>
                    <h4><span>4.</span>Design</h4>
                    <p>Make site visual attractive, clean and touchable</p>

                    {/*<p>We will translate the wireframe into a finalized design.</p>*/}
                </div>
                <div className={"srv_workflow_step"}>
                    <h4><span>5.</span>Coding</h4>
                    <p>Build system rapid, stable and secured</p>
                    {/*<p>Based on the approved design and specifications, we will construct the website in a testing*/}
                    {/*    environment. Interactive elements such as slideshows will be developed during this*/}
                    {/*    stage.</p>*/}
                </div>
                <div className={"srv_workflow_step"}>
                    <h4><span>6.</span>Test,review and publish </h4>
                    <p>Release new /redesigned site for the whole world safely.</p>

                    {/*<p>You will review the appearance and functionality in the testing environment. Upon completion,*/}
                    {/*    the*/}
                    {/*    website will be moved to the live environment and delivered.</p>*/}
                    {/*<p>Please note that the translations are provided for reference and might need to be further*/}
                    {/*    reviewed by a native speaker for precise comprehension in a professional context.</p>*/}
                </div>
            </div>
            <div className="srv_dev_contact">
                <Link to="/contact">Contact </Link>
            </div>
        </section>
        <section className="webMarketing" id={"webMarketing"}>
            <h3>Web Marketing Support</h3>
            <div className={"srv_marketing"}>
                <div className="srv_marketing_switch">
                    <div className={"srv_marketing_item"}>
                        <input type="radio" id={"radio_slide1"} name='radio_slide'
                               onClick={() => handleRadio("Analyze")}/>
                        <label htmlFor="radio_slide1"><span></span></label>

                    </div>
                    <div className={"srv_marketing_item"}>
                        <input type="radio" id={"radio_slide2"} name='radio_slide'
                               onClick={() => handleRadio("SEO")}/>
                        <label htmlFor="radio_slide2"><span></span></label>

                    </div>
                    <div className={"srv_marketing_item"}>
                        <input type="radio" id={"radio_slide3"} name='radio_slide'
                               onClick={() => handleRadio("Strategy")}/>
                        <label htmlFor="radio_slide3"> <span></span></label>

                    </div>
                    <div className={"srv_marketing_item"}><input type="radio" id={"radio_slide4"} name='radio_slide'
                                                                 onClick={() => handleRadio("Ado")}/>
                        <label htmlFor="radio_slide4"> <span></span></label>

                    </div>
                    <div className={"srv_marketing_item"}><input type="radio" id={"radio_slide5"} name='radio_slide'
                                                                 onClick={() => handleRadio("SNS")}/>
                        <label htmlFor="radio_slide5"><span></span></label>

                    </div>
                </div>
                <div className="srv_marketing_main">
                    {radioChecked === "" && <div className="srv_marketing_detail unselected">

                        <h4>Track and Analyze Site Data support</h4>
                        <h4>SEO (Search Engine Optimization) support</h4>
                        <h4>Architecture and Web marketing strategy support</h4>
                        <h4>Paid Advertising support</h4>
                        <h4>Social Media Marketing Support</h4>
                    </div>}
                    {radioChecked === "Analyze" && <div className="srv_marketing_detail">
                        <h4>Track and Analyze Site Data support</h4>
                        {/*<p>トラッキングを設置し 、あなたのユーザーがサイト上でどんな動きをしているかのデータを収集し分析、レポートします。</p>*/}
                        {/*<p>あなたのサイトが今どんな状態かや、ユーザー理解を深める手掛かりになります。</p>*/}
                        {/*<p>サイトの問題点を的確に定めることでマーケティング効果が倍増します</p>*/}
                        {/*<p>データの収集にはある程度時間がかかります。</p>*/}

                        <p> Install tracking to collect, analyze, and report data on how your users are moving
                            around your site. </p>
                        <p> This will give you clues as to how your site is performing and help you better
                            understand your users. </p>
                        <p> Marketing effectiveness is multiplied by pinpointing the problem areas on your
                            site. </p>
                        <p> Data collection takes some time. </p>

                    </div>}
                    {radioChecked === "SEO" && <div className="srv_marketing_detail">

                        <h4>SEO (Search Engine Optimization) support</h4>
                        {/*<p> あなたのサイトの検索順位を上昇させます。 </p>*/}
                        {/*<p> サイトがユーザー～の目につきやすくなると、今までなかった層にアプローチができ、新規流入に繋がります。 </p>*/}
                        {/*<p> 順位が一つ上がるだけでサイトを見てもらえる機会がかなり大きなるのでやる価値があります。 </p>*/}
                        {/*<p> 短期的なキャンペーンではなく、一度上がったサイト順位は長期的なメリットがあります。 </p>*/}

                        <p>Increase your site's search rankings.</p>
                        <p>When your site is more visible, you can reach a new audience and bring in new
                            visitors.</p>
                        <p> It is worth doing, because just one rank increase can significantly increase the chances
                            of your site being seen. </p>
                        <p>This is not a short-term campaign, but a long-term
                            benefit once your site ranks
                            higher.</p>
                    </div>}
                    {radioChecked === "Strategy" && <div className="srv_marketing_detail">

                        <h4>Site architecture and <br/> Web marketing strategy support</h4>
                        {/*<p>あなたのビジネスの方向性を一緒に分析し。*/}
                        {/*    最も適したデジタルマーケティング戦略とデザイン、ブランディング、サイト設計を提案します。</p>*/}
                        {/*<p>優れた設計、魅力的なデザインのサイトははユーザーが離れにくくあなたのビジネスの情報を多く見てくれます</p>*/}
                        <p>We analyze the direction of your business together.
                            We will recommend the most appropriate digital marketing strategy, design, branding, and
                            site design. </p>
                        <p>A well-designed, attractively designed site will make it harder for users to leave and
                            see more information about your business. </p>
                    </div>}
                    {radioChecked === "Ado" && <div className="srv_marketing_detail">

                        <h4>Invest in Paid Advertising support</h4>
                        {/*<p> リスティング広告運用サポート</p>*/}
                        {/*<p> 商品に興味を持っているユーザーが検索をしたときに表示される広告を設計、出稿します。 </p>*/}
                        {/*<p> 実際の反応を見ながら、リアルタイムで運用方法をアジャストできます。 </p>*/}
                        {/*<p> 即効性◎、少ない予算で始められる</p>*/}

                        <p> Listing advertisement operation support</p>
                        <p> We design and submit advertisements that are displayed when users interested in your
                            products search for them. </p>
                        <p> We can adjust the operation method in real time while watching the actual response. </p>
                        <p> Immediate results, can be started with a small budget.</p>
                        <p>Google, Yahoo facebook, X / twitter, instagram</p>
                    </div>}
                    {radioChecked === "SNS" && <div className="srv_marketing_detail">

                        <h4>Social Media Marketing Support</h4>
                        {/*SNSアカウント運用サポート*/}
                        {/*<p> 人口の約7割が利用しているSNSを通してユーザーにアプローチし、ブランドや商品の認知度を向上させる、</p>*/}
                        {/*<p> ユーザー同士がシェアすることで認知が増えていく</p>*/}
                        {/*<p> ユーザーとの距離が近い、いいイメージをつけられる</p>*/}
                        {/*<p> アカウントコンセプト、コンテンツ作成、</p>*/}
                        {/*<p> ex ) Facebook,X,Instagram, TikTok</p>*/}
                        <p>Support social media activities to expand your business.</p>
                        <p> Reach out to users through social networking services, which are used by about 70% of
                            the population, to increase awareness of brands and products, </p>
                        <p> Awareness increases as users share with each other.</p>
                        <p> Closer proximity to users and a good image.</p>
                        <p> ex ) Facebook, X, Instagram, TikTok</p>
                    </div>}
                </div>
            </div>
            <div className="srv_dev_contact s_m_m_back">
                {radioChecked !== "" ? <a href={"#webMarketing"} className={"hide_pc "}
                                          onClick={() => handleRadio("reset")}> &#x3c;&#x3c; </a> : <p></p>}
                <p className="hide_pc hide_sp"></p>
                <Link to="/contact">Contact </Link>
            </div>
        </section>
        <section className="maintenance">
            <h3>Site operation and maintenance support</h3>
            <div className="srv_maintenance">
                <div>
                    <p>Services to keep site, server, and system versions up-to-date and secure.</p>
                    <p>Regularly posting new content can be effective in driving traffic from search engines.</p>
                    <img src={mainte} alt=""/>

                </div>
            </div>
            <div className="srv_dev_contact">
                <Link to="/contact">Contact </Link>
            </div>
        </section>
        <section className="Policy-Value">
            <h3>My 6 values</h3>
            <div className="srv_policy">
                <div className="srv_p_box_center">
                    <p><span>A</span> website is an effective tool for your business. It can help you increase
                        sales, build your brand, showcase your company and your products, solve problems, and
                        communicate with your customers. <br/> But beyond that, we also have a vision that we want
                        to achieve.</p>
                </div>
                <div className="srv_p_box nth1">
                    <div className="serv_policy1">
                        <p><span>1.</span>Unlock and maximize the hidden potential of your business</p>
                    </div>
                    <div className="serv_policy2">
                        <p><span>2.</span>Enabling the advantages of technology to reach every business and user.
                        </p>
                    </div>
                </div>
                <div className="srv_p_box nth2">
                    <div className="serv_policy3">
                        <p><span>3.</span>Seamlessly provide users with information through an optimal UI
                            experience,
                            free from any stress. </p>
                    </div>
                    <div className="serv_policy4">
                        <p><span>4.</span>Prove that the Web is fun and full of possibilities.</p>
                    </div>
                </div>
                <div className="srv_p_box nth3">
                    <div className="serv_policy5">
                        <p><span>5.</span>Helping you to love your jobs more</p>
                    </div>
                    <div className="serv_policy6">
                        <p><span>6.</span>An image-building brand for the future era</p></div>
                </div>
            </div>
            <div className="srv_dev_contact">
                <Link to="/contact">Contact </Link>
            </div>
        </section>
    </div>);
}

export default Services_En;

/*
webサイトを持つことは効果的です。
売上アップ、ブランディングをする、会社やあなたのビジネスを表現する、課題解決、あなたのお客さんとのコミュニケーションを可能にします。


更にその後に、私には到達したいビジョンがあります。

ブランディング、名刺になる
売上アップ、課題解決の更に先に実現したいこと


1
ブランディング、名刺になる
売上アップ、課題解決の更に先に実現したいこと


1
事業者のポテンシャルを最大限引き出す

Assister les entreprises pour maximiser et exploiter leur potentiel latent.



2
テクノロジーの恩恵をすべての人に(企業、ユーザー)

Les avantages de la technologie s'étendent à tous,

3
webは楽しい
le web est une expérience divertissante.
The Web is fun and full of possibilities

4
自社をもっと好きになれるように

Pour vous aider à développer un sentiment plus profond d'appréciation envers votre entreprise.



5
わかりやすく伝える ユーザーが欲しい情報をストレスなく提供する

Delivering the information users seek without causing stress.
Stress-free provision of the information users want, thanks to the best UI experience


6
時代にあったイメージづくりブランド




HPをつくる、HPを流行らせる











お打ち合わせ・ヒアリング

提案・お見積もり・発注決定
ヒアリング内容をもとに現状の分析、競合の調査、要件定義をおこないます。
制作予定のページ数やボリュームを整理し、お見積もりと提案資料を合わせてご提出いたします。
弊社にご依頼いただく際は発注書の取り交わしをいたします。（製作費は納品後のご入金となります。）

構成・ワイヤーフレーム
この段階で写真、掲載テキストなどの素材を用意していき、内容を確定します。
また、サイトの仕様も決めていきます。


デザイン
ワイヤーフレームをもとにデザインに落とし込みます。

ーディング
決定デザイン・仕様をもとにテスト環境で構築していきます。
スライドショーなどの動きのある部分はこの段階で作っていきます。

テストサイトで確認・修正、納品
テスト環境で見た目や不具合をご確認いただきます。
完成したら本番の環境に移して納品となります。
*/