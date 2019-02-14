import React from "react";

class Navbar extends React.Component {
    constructor(){
        super();

        this.state = {
            score : 0,
            topScore : 0,
            comment: "Click an image to begin!"
        };
    }

    render(){
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">React Clicky Game</span>
                <span className="comment">{this.state.comment}</span>
                <span className="score">score: {this.state.score}</span>
                <span className="topScore">Top Score: {this.state.topScore}</span>
            </nav>
        );
    }

}

export default Navbar;