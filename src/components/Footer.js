import React from "react";
import "./css/style.css";

class Footer extends React.Component {
    constructor(){
        super();

    }

    render(){
        return(
            <footer className="footer bg-light">
                <p>React Clicky Game</p>
            </footer>
        );
    }
}

export default Footer;