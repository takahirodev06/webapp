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

function App() {

    const [isLoading, setIsLoading] = useState(false);
    const [loadtimer, setLoadtimer] = useState(false);


    setInterval(() => setLoadtimer(true)
        , 2500);

    window.onload = function () {
        setIsLoading(true);
    }

    const location = useLocation();


    useEffect(() => {
        console.log(location.pathname);
        console.log("isLoading :  " + isLoading);
        console.log("loadtimer :  " + loadtimer);
    },);

    return (
        <div className="App" onLoad={() => setIsLoading(true)}>
            <div id="top"></div>

            <main>
                <Routes>
                    <Route path="/" element={isLoading && loadtimer ? <TopPage/> : <Loading/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/works" element={<Works/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/blog" element={<Blog/>}>
                        <Route path=":blogid" element={<Article/>}/>
                    </Route>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>

            {loadtimer && <Sidebar/>}
            {loadtimer && location.pathname !== "/contact" && <Sidebutton/>}
            {loadtimer && <Navi/>}
            <Header/>
        </div>)
}

export default App;
