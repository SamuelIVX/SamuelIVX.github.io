import React from "react"
import Navbar from "./components/Navbar.js"
import Header from "./components/Header.js"
import Card from "./components/Card.js"
import Footer from "./components/Footer.js"

export default function App(){
    return(
        <div>
            <Navbar/>
            <Header/>
            <Card/>
            <Footer/>
        </div>
    )
}