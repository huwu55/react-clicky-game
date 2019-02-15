import React from "react";
import "./css/style.css";

function Jumbotron(){
    return(
        <div className="jumbotron">
            <h1 className="display-4 gameName">React Clicky Game!</h1>
            <hr className="my-4"></hr>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
    );
}

export default Jumbotron;