import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Main from "./components/Main";
import Image from "./components/Image";
import Footer from "./components/Footer";

import p0 from "./components/images/reborn-p0.jpg";
import p1 from "./components/images/reborn-p1.jpg";
import p2 from "./components/images/reborn-p2.jpg";
import p3 from "./components/images/reborn-p3.jpg";
import p4 from "./components/images/reborn-p4.jpg";
import p5 from "./components/images/reborn-p5.jpg";
import p6 from "./components/images/reborn-p6.jpg";
import p7 from "./components/images/reborn-p7.jpg";
import p8 from "./components/images/reborn-p8.jpg";
import p9 from "./components/images/reborn-p9.jpg";
import p10 from "./components/images/reborn-p10.jpg";
import p11 from "./components/images/reborn-p11.jpg";
import p12 from "./components/images/reborn-p12.jpg";
import p13 from "./components/images/reborn-p13.jpg";
import p14 from "./components/images/reborn-p14.jpg";
import p15 from "./components/images/reborn-p15.jpg";

// function App() {
//     return (
//         <div>
//             <Navbar />
//             <Jumbotron />
//             <Main />
//             <Footer />
//         </div>
//     );
// }

class App extends React.Component {
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
        };
        // this.state.images.map(img =>{
        //     console.log(img.url, img.clicked);
        // });
    }

    shuffle = () => {
        let images = this.state.images;

        for (let i = 15; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [images[i], images[j]] = [images[j], images[i]];
        }
        this.setState({images});
    }

    render(){
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <Main>
                    {this.state.images.map((img, index)=>(
                        <Image url={img.url} shuffle={this.shuffle} />
                    ))}
                </Main>
                <Footer />
            </div>
        );
    }
}


export default App;