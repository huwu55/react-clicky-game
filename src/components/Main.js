import React from "react";
import "./css/style.css";

function Main(props){
    return(
        <main className="container">
            <div className="row justify-content-center">
                <div className="col-10">
                    {props.children}
                </div>
            </div>
        </main>
    );
}

export default Main;