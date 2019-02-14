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
            <nav className="navbar navbar-default fixed-top navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">React Clicky Game</span>
                    <span className="comment h6">{this.state.comment}</span>
                    <span className="score">score: {this.state.score}</span>
                    <span className="topScore">Top Score: {this.state.topScore}</span>
                </div>
            </nav>
        );
    }

}

export default Navbar;