import './App.css';
import TopPage from "./component/TopPage";
import {Route, Routes, useLocation, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Blog from "./component/Blog";
import Works from "./component/Works";
import Services from "./component/Services";
import NotFound from "./component/NotFound";
import Article from "./component/Article";
import Contact from "./component/Contact";
import Loading from "./component/Loading";
import About from "./component/About";
import Navi from "./component/Navi";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Sidebutton from "./component/Sidebutton";
import TopPage_En from "./component/en/TopPage";
import Services_En from "./component/en/Services";
import Works_En from "./component/en/Works";
import About_En from "./component/en/About";
import Contact_En from "./component/en/Contact";
import Contact_Jp from "./component/jp/Contact";
import About_Jp from "./component/jp/About";
import Works_Jp from "./component/jp/Works";
import Services_Jp from "./component/jp/Services";
import TopPage_Jp from "./component/jp/TopPage";
import Header_En from "./component/en/Header";
import Navi_En from "./component/en/Navi";
import Header_Jp from "./component/jp/Header";
import Navi_Jp from "./component/jp/Navi";
import Sidebutton_en from "./component/en/Sidebutton";
import Sidebutton_jp from "./component/jp/Sidebutton";

function App() {

    const [isLoading, setIsLoading] = useState(false);
    const [loadtimer, setLoadtimer] = useState(false);
    const [language, setLanguage] = useState("fr");


    setInterval(() => setLoadtimer(true), 2500);

    window.onload = function () {
        setIsLoading(true);
    }

    const location = useLocation();


    useEffect(() => {
        const langue = location.pathname.slice(1, 3);
        console.log(langue);
        if (langue === "en") {
            setLanguage('en')
        } else if (langue === "jp") {
            setLanguage('jp')
        } else {
            setLanguage('')
        }
    },);


    useEffect(() => {
        const numFlakes = 20; // 雪の数

        for (let i = 0; i < numFlakes; i++) {
            createSnowflake();
        }

        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.animationDuration = `${Math.random() * 6 + 5}s`;
            document.body.appendChild(snowflake);

            setTimeout(() => {
                snowflake.remove();
                createSnowflake();
            }, 5000000);
        }

        function createSnowflake_2() {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
            document.body.appendChild(snowflake);
            setTimeout(() => {
                snowflake.remove();
                createSnowflake();
            }, 60000);
        }
    }, []);


    return (<div className="App" onLoad={() => setIsLoading(true)}>
        <div id="top"></div>
        <main>
            {isLoading && loadtimer ? <Routes>
                <Route path="/" element={<TopPage/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/works" element={<Works/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/blog" element={<Blog/>}>
                    <Route path=":blogid" element={<Article/>}/>
                </Route>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/*" element={<NotFound/>}/>
                <Route path="/en" element={<TopPage_En/>}/>
                <Route path="/en/services" element={<Services_En/>}/>
                <Route path="/en/works" element={<Works_En/>}/>
                <Route path="/en/about" element={<About_En/>}/>
                <Route path="/en/contact" element={<Contact_En/>}/>
                <Route path="/jp" element={<TopPage_Jp/>}/>
                <Route path="/jp/services" element={<Services_Jp/>}/>
                <Route path="/jp/works" element={<Works_Jp/>}/>
                <Route path="/jp/about" element={<About_Jp/>}/>
                <Route path="/jp/contact" element={<Contact_Jp/>}/>
            </Routes> : <Loading/>}
        </main>
        <Footer/>
        {loadtimer && <Sidebar/>}
        {loadtimer && location.pathname !== "/contact" && language === "" && <Sidebutton/>}
        {loadtimer && location.pathname !== "/en/contact" && language === "en" && <Sidebutton_en/>}
        {loadtimer && location.pathname !== "/jp/contact" && language === "jp" && <Sidebutton_jp/>}
        {loadtimer && language === "" && <Navi/>}
        {loadtimer && language === "en" && <Navi_En/>}
        {loadtimer && language === "jp" && <Navi_Jp/>}
        {loadtimer && language === "" && <Header/>}
        {loadtimer && language === "en" && <Header_En/>}
        {loadtimer && language === "jp" && <Header_Jp/>}
    </div>)
}

export default App;
