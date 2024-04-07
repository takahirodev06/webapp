import "../style/Blog.css";
import React, {useEffect} from "react";

function Blog(props) {

    useEffect(() => {
        document.title = 'Blog | TAKAHIRO YAMADA WEB CREATION';
        window.scroll({
            top: 0,
            // behavior: "smooth",
        });
    }, []);

    return (
        <div className="sub_container">
            <p className={"blog_box_prep"}> in PREPARATION</p>
            <h2>Blog</h2>
            <section className={"blog_box"}>
                <div className={"blog_item"}>
                    <h3 className={"blog_title"}>[Best-of 2023] Les meilleures opérations "food"</h3>
                    <p className={"blog_discrp"}>texttexttext</p>
                    <p className={"blog_tags"}>
                        <span>Tag001</span><span>Tag002</span><span>Tag003</span><span>Tag004</span></p>
                    <p className={"blog_date"}>xx-xx-20xx</p>
                </div>
                <div className={"blog_item"}>
                    <h3 className={"blog_title"}>Generative AI: What Is It, Tools, Models, Applications and Use
                        Cases</h3>
                    <p className={"blog_discrp"}>texttexttext</p>
                    <p className={"blog_tags"}>
                        <span>Tag001</span><span>Tag002</span><span>Tag003</span><span>Tag004</span></p>
                    <p className={"blog_date"}>xx-xx-20xx</p>
                </div>
                <div className={"blog_item"}>
                    <h3 className={"blog_title"}>[Best-of 2023] Les meilleures opérations "food"</h3>
                    <p className={"blog_discrp"}>texttexttext</p>
                    <p className={"blog_tags"}>
                        <span>Tag001</span><span>Tag002</span><span>Tag003</span><span>Tag004</span></p>
                    <p className={"blog_date"}>xx-xx-20xx</p>
                </div>
                <div className={"blog_item"}>
                    <h3 className={"blog_title"}>[Best-of 2023] Les meilleures opérations "food"</h3>
                    <p className={"blog_discrp"}>texttexttext</p>
                    <p className={"blog_tags"}>
                        <span>Tag001</span><span>Tag002</span><span>Tag003</span><span>Tag004</span></p>
                    <p className={"blog_date"}>xx-xx-20xx</p>
                </div>
                <div className={"blog_item"}>
                    <h3 className={"blog_title"}>[Best-of 2023] Les meilleures opérations "food"</h3>
                    <p className={"blog_discrp"}>texttexttext</p>
                    <p className={"blog_tags"}>
                        <span>Tag001</span><span>Tag002</span><span>Tag003</span><span>Tag004</span></p>
                    <p className={"blog_date"}>xx-xx-20xx</p>
                </div>

            </section>


        </div>
    );
}

export default Blog;