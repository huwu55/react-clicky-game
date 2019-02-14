import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <Main />
            <Footer />
        </div>
    );
}

export default App;