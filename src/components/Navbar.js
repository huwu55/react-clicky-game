import React from "react";

function Navbar(props){
    return (
        <nav className="navbar navbar-default fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">React Clicky Game</span>
                <span className="comment h6">{props.comment}</span>
                <span className="score">score: {props.score}</span>
                <span className="topScore">Top Score: {props.topScore}</span>
            </div>
        </nav>
    );
}

export default Navbar;