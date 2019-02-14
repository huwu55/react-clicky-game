import React from "react";
import "./css/style.css";
import p0 from "./images/reborn-p0.jpg";
import p1 from "./images/reborn-p1.jpg";
import p2 from "./images/reborn-p2.jpg";
import p3 from "./images/reborn-p3.jpg";
import p4 from "./images/reborn-p4.jpg";
import p5 from "./images/reborn-p5.jpg";
import p6 from "./images/reborn-p6.jpg";
import p7 from "./images/reborn-p7.jpg";
import p8 from "./images/reborn-p8.jpg";
import p9 from "./images/reborn-p9.jpg";
import p10 from "./images/reborn-p10.jpg";
import p11 from "./images/reborn-p11.jpg";
import p12 from "./images/reborn-p12.jpg";
import p13 from "./images/reborn-p13.jpg";
import p14 from "./images/reborn-p14.jpg";
import p15 from "./images/reborn-p15.jpg";


class Main extends React.Component {
    constructor(){
        super();

        this.state = {
            images : [
                {
                    url : p0,
                    clicked: false
                },
                {
                    url : p1,
                    clicked: false
                },
                {
                    url : p2,
                    clicked: false
                },
                {
                    url : p3,
                    clicked: false
                },
                {
                    url : p4,
                    clicked: false
                },
                {
                    url : p5,
                    clicked: false
                },
                {
                    url : p6,
                    clicked: false
                },
                {
                    url : p7,
                    clicked: false
                },
                {
                    url : p8,
                    clicked: false
                },
                {
                    url : p9,
                    clicked: false
                },
                {
                    url : p10,
                    clicked: false
                },
                {
                    url : p11,
                    clicked: false
                },
                {
                    url : p12,
                    clicked: false
                },
                {
                    url : p13,
                    clicked: false
                },
                {
                    url : p14,
                    clicked: false
                },
                {
                    url : p15,
                    clicked: false
                }
            ]
        }
    }

    render(){
        return(
            <main className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        {this.state.images.map((img, index)=>
                            <div key={img.url} className="click-item col-3">
                                <img src={img.url} aria-lable="click item" alt="reborn" className="img-thumbnail"></img>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;