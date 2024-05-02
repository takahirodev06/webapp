import "../style/Loading.css";

function Loading(props) {

    return (<div className="loading gridcenter">
            <p className={"Gruppo"}>Loading<span>.</span><span>.</span><span>.</span></p>
            <div className="circlew"></div>
            <div className="circlew"></div>
            <div className="circlew"></div>
    </div>);
}

export default Loading;