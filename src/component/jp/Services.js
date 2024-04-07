import "../../style/Services.css"
import "../../style/Service_sp.css"
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import mainte from "../../asset/mainte3.png";

function Services_Jp(props) {

    const [radioChecked, setradioChecked] = useState("");
    const [current_policy, setCurrent_policy] = useState(0);
    const [offset, setOffset] = useState(0);
    const [transdepth, setTransdepth] = useState(null);

    useEffect(() => {
        document.title = 'サービス | TAKAHIRO YAMADA WEB CREATION';
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

    return (<div className="sub_container service_page jp">
        <h2>Services <span> サービス</span></h2>
        <section className="Website_dev">
            <h3>Website development <span>ウェブサイト開発</span></h3>
            <div className={"srv_development_container"}>
                <div className={"srv_development"}>
                    <div className={"srv_dev_hexs hexs_1"}>
                        <div className={"srv_dev_hex"} style={{animationDelay: '0.2s'}}>
                            <h4>新規 <br/>ウェブサイト<br/>制作</h4>
                        </div>
                        <div className={"srv_dev_hex"} style={{animationDelay: '0.9s'}}>
                            <p>LP</p>
                            <p>会社ホームページ、</p>
                            <p>IR サイト、</p>
                            <p>採用サイト、</p>
                            <p>キャンペーンページ、</p>
                            <p>メディアサイト</p>
                        </div>
                    </div>
                    <div className={"srv_dev_hexs  hexs_2"}>
                        <div className={"srv_dev_hex"} style={{animationDelay: '0.7s'}}>
                            <h4>ウェブサイト <br/> リニューアル</h4></div>
                        <div className={"srv_dev_hex"} style={{animationDelay: '1.1s'}}>
                            <p>デザインリニューアル</p>
                            <p>最新化＆効果UP</p>
                            <p>リブランディング</p>
                        </div>
                    </div>
                    <div className={"srv_dev_hexs  hexs_3"}>
                        <div className={"srv_dev_hex"} style={{animationDelay: '0.4s'}}>
                            <h4>ウェブサイト <br/> 変更・更新</h4></div>
                        <div className={"srv_dev_hex"} style={{animationDelay: '1.3s'}}>
                            <p>サイトを最新に更新</p>
                            <p>新規ページ制作、<br/>情報更新など。</p>
                        </div>
                    </div>
                    <div className={"srv_dev_hexs  hexs_4"}>
                        <div className={"srv_dev_hex"} style={{animationDelay: '0.6s'}}>
                            <h4>スマートフォン <br/> 対応サポート</h4></div>
                        <div className={"srv_dev_hex"} style={{animationDelay: '0.3s'}}>
                            <p>アクセスの8割を占める<br/>スマートフォンサイト<br/>の制作、最適化。</p>
                            <p></p>
                        </div>
                    </div>
                    <div className={"srv_dev_hexs  hexs_5"}>
                        <div className={"srv_dev_hex"} style={{animationDelay: '1.2s'}}>
                            <h4>多言語 <br/> 対応サポート</h4></div>
                        <div className={"srv_dev_hex"} style={{animationDelay: '0.8s'}}>
                            <p>翻訳と<br/>ローカリゼーションで <br/>ビジネスを<br/>グローバル化。</p>
                            <p></p>
                            <p>仏 / 英 / 日 </p>
                        </div>
                    </div>
                    <div className={"srv_dev_hexs  hexs_6"}>
                        <div className={"srv_dev_hex"} style={{animationDelay: '0.5s'}}>
                            <h4> SEO対策 <br/>サポート</h4></div>
                        <div className={"srv_dev_hex"} style={{animationDelay: '1s'}}>
                            <p>サイトの検索順位を<br/>向上させます。<br/>
                                コンテンツSEO,<br/> テクニカルSEO</p>
                        </div>
                    </div>
                </div>
                <div className="srv_dev_contact">
                    <Link to="/contact">Contact </Link>
                </div>
            </div>
        </section>
        <section className="Workflow">
            <h3>Website Development Workflow <span>制作の流れ</span></h3>
            <div className={"srv_workflow"}>
                <div className={"srv_workflow_step"}>
                    <h4><span>1.</span>ヒアリング、オリエンテーション</h4>
                    <p>サイトのゴール、ターゲット層、予算、現在の課題はなんですか？</p>
                </div>
                <div className={"srv_workflow_step"}>
                    <h4><span>2.</span>提案、 お見積もり、受注 </h4>
                    <p>プロジェクトの開始です。</p>
                    {/*
                        <p>Based on the information gathered during the needs assessment, we will conduct an analysis of
                            the  current situation, research competitors, and define requirements. We will organize the
                            planned   number of pages and content volume, and provide you with a quotation and proposal document
                            together.</p>
                        <p>When requesting our services, we will exchange order confirmation documents. (Production
                            costs will be invoiced for payment after delivery.)</p>  */}
                </div>
                <div className={"srv_workflow_step"}>
                    <h4><span>3.</span>サイト設計とワイヤーフレーム</h4>
                    <p>あなたのマーケティングゴールのためのサイト設計。UI/UXデザイン</p>
                    {/*<p>During this stage, we will prepare materials such as photos and text for inclusion and finalize   the  content. We will also determine the specifications for the website.</p>*/}
                </div>
                <div className={"srv_workflow_step"}>
                    <h4><span>4.</span>デザイン</h4>
                    <p>魅力的なデザイン、わかりやすさ、使いやすさを大事にしています。</p>
                    {/*<p>We will translate the wireframe into a finalized design.</p>*/}
                </div>
                <div className={"srv_workflow_step"}>
                    <h4><span>5.</span>コーディング</h4>
                    <p>快適な動作、安定性、セキュリティシステムで構築。</p>
                    {/*<p>Based on the approved design and specifications, we will construct the website in a testing*/}
                    {/*    environment. Interactive elements such as slideshows will be developed during this*/}
                    {/*    stage.</p>*/}
                </div>
                <div className={"srv_workflow_step"}>
                    <h4><span>6.</span>テスト、修正、公開 </h4>
                    <p>新しいウェブサイトを安全にリリースします。</p>
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
            <h3>Web Marketing Support <span>ウェブマーケティングサポート</span></h3>
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
                        <h4>サイトデータ分析サポート</h4>
                        <h4>SEO (ネット検索順位最適化) サポート</h4>
                        <h4>ウェブマーケティング戦略サポート</h4>
                        <h4>リスティング広告運用サポート</h4>
                        <h4>SNSマーケ運用サポート</h4>
                    </div>}
                    {radioChecked === "Analyze" && <div className="srv_marketing_detail">
                        <h4>サイトデータ分析サポート</h4>
                        <p>トラッキングを設置し
                            、あなたのユーザーがサイト上でどんな動きをしているかのデータを収集し分析、レポートします。</p>
                        <p>あなたのサイトが今どんな状態かとユーザー理解を深める手掛かりになります。</p>
                        <p>サイトの問題点を的確に定めることでマーケティング効果が倍増します</p>
                        <p>データの収集にはある程度時間がかかります。</p>

                        {/*<p> Install tracking to collect, analyze, and report data on how your users are moving*/}
                        {/*    around your site. </p>*/}
                        {/*<p> This will give you clues as to how your site is performing and help you better*/}
                        {/*    understand your users. </p>*/}
                        {/*<p> Marketing effectiveness is multiplied by pinpointing the problem areas on your*/}
                        {/*    site. </p>*/}
                        {/*<p> Data collection takes some time. </p>*/}
                    </div>}
                    {radioChecked === "SEO" && <div className="srv_marketing_detail">
                        <h4>SEO (ネット検索順位最適化) サポート</h4>
                        <p>あなたのサイトの検索順位を上昇させます。 </p>
                        <p>サイトがユーザーの目につきやすくなると、今までなかった層にアプローチができ新規流入に繋がります。 </p>
                        <p>表示回数が上がるとサイト訪問数も増加しお問い合わせにつながる可能性が高まります。 </p>
                        <p>一度サイト評価が上がると長期的に効果が続きます。 </p>

                        {/*<p>Increase your site's search rankings.</p>*/}
                        {/*<p>When your site is more visible, you can reach a new audience and bring in new*/}
                        {/*    visitors.</p>*/}
                        {/*<p> It is worth doing, because just one rank increase can significantly increase the chances*/}
                        {/*    of your site being seen. </p>*/}
                        {/*<p>This is not a short-term campaign, but a long-term*/}
                        {/*    benefit once your site ranks*/}
                        {/*    higher.</p>*/}
                    </div>}
                    {radioChecked === "Strategy" && <div className="srv_marketing_detail">
                        <h4>ウェブマーケティング戦略サポート</h4>
                        <p>目標に合わせたオンライン戦略を練り、成功への道筋を明確にします。</p>
                        <p>あなたのビジネスの方向性を一緒に分析し、最も適したデジタルマーケティング戦略とデザイン、ブランディング、サイト設計を提案します。</p>
                        <p>優れた設計、魅力的なデザインのサイトははユーザーが離れにくくあなたのビジネスの情報を多く見てくれます</p>
                        <p>最新のデジタルトレンドを把握し、ビジネスの成功に導く最新の手法を提供します。 </p>
                        {/*<p>We analyze the direction of your business together.*/}
                        {/*    We will recommend the most appropriate digital marketing strategy, design, branding, and*/}
                        {/*    site design. </p>*/}
                        {/*<p>A well-designed, attractively designed site will make it harder for users to leave and*/}
                        {/*    see more information about your business. </p>*/}
                    </div>}
                    {radioChecked === "Ado" && <div className="srv_marketing_detail">
                        <h4>リスティング広告運用サポート</h4>
                        <p>商品に興味を持っているユーザーが検索をしたときに自動表示される広告を設計、運用します。 </p>
                        <p>実際の反応を見ながらリアルタイムで運用方法をアジャストでき、即効性があります。</p>
                        <p>予算に合わせて小規模から始められます。</p>
                        <p>ex) Google広告、 Yahoo!広告、 Facebook広告、Instagram広告、 X / twitter広告</p>

                        {/*<p> Listing advertisement operation support</p>*/}
                        {/*<p> We design and submit advertisements that are displayed when users interested in your*/}
                        {/*    products search for them. </p>*/}
                        {/*<p> We can adjust the operation method in real time while watching the actual response. </p>*/}
                        {/*<p> Immediate results, can be started with a small budget.</p>*/}
                    </div>}
                    {radioChecked === "SNS" && <div className="srv_marketing_detail">
                        <h4>SNSマーケ運用サポート</h4>
                        <p>人口の約7割が利用しているSNSを通してユーザーにアプローチし、ブランドや商品の認知度を向上させます。</p>
                        <p>ユーザー同士がシェアすることで認知が増えていきます。</p>
                        <p>ユーザーとの距離が近い、いいイメージをつけられる</p>
                        <p>アカウントコンセプト設計、コンテンツ作成など</p>
                        <p>ex) Facebook、instagram、X / twitter、 TikTok</p>
                        {/*<p>Support social media activities to expand your business.</p>*/}
                        {/*<p> Reach out to users through social networking services, which are used by about 70% of*/}
                        {/*    the population, to increase awareness of brands and products, </p>*/}
                        {/*<p> Awareness increases as users share with each other.</p>*/}
                        {/*<p> Closer proximity to users and a good image.</p>*/}
                        {/*<p> ex ) Facebook, X, Instagram, TikTok</p>*/}
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
            <h3>Site operation and maintenance support <span>サイト保守運用サポート</span></h3>
            <div className="srv_maintenance">
                <div>
                    <p>ウェブサイトの運用の雑務をまとめてサポートします。</p>
                    <p>ウェブページ、サーバー、システムのバージョンを最新かつ安全に保ちます。</p>
                    <p>定期的に情報を更新したり、新しいコンテンツを投稿することでSEO効果が期待できます。</p>
                    <img src={mainte} alt=""/>
                </div>
            </div>
            <div className="srv_dev_contact">
                <Link to="/contact">Contact </Link>
            </div>
        </section>
        <section className="Policy-Value">
            <h3>6 values<span>6つのポリシー</span></h3>
            <div className="srv_policy">
                <div className="srv_p_box_center">
                    <p>ウェブサイトを持つことで認知や売上アップ、ブランディング、
                        会社やあなたのビジネスを表現すること、課題解決、顧客とのコミュニケーションを可能にします。

                        <br/> 更にその後に、達成したいビジョンがあります。
                    </p>
                </div>
                <div className="srv_p_box nth1">
                    <div className="serv_policy1">
                        <p><span>1.</span>事業者の <br/> ポテンシャルを <br/> 最大限引き出す。</p>
                    </div>
                    <div className="serv_policy2">
                        <p><span>2.</span>テクノロジーの <br/> 恩恵を <br/> すべての人に。</p>
                    </div>
                </div>
                <div className="srv_p_box nth2">
                    <div className="serv_policy3">
                        <p><span>3.</span>ユーザーが <br/> 欲しい情報に <br/> ストレスなく<br/> アクセスできる。 </p>
                    </div>
                    <div className="serv_policy4">
                        <p><span>4.</span>Webの可能性を <br/> もっと。</p></div>
                </div>
                <div className="srv_p_box nth3">
                    <div className="serv_policy5">
                        <p><span>5.</span>自社をもっと好きになれるように。</p>
                    </div>
                    <div className="serv_policy6">
                        <p><span>6.</span>未来に向けた <br/> ブランドイメージ <br/> づくり。</p>
                    </div>
                </div>
            </div>
            <div className="srv_dev_contact">
                <Link to="/contact">Contact </Link>
            </div>
        </section>
    </div>);
}

export default Services_Jp;

/*
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