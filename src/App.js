import React from "react"
import Navbar from "./components/Navbar.js"
import Header from "./components/Header.js"
import Card from "./components/Card.js"
import cardData from "./cardData.js"
import Footer from "./components/Footer.js"

export default function App(){

const cards = cardData.map( item => <Card key = {item.id} item = {item}/> )

    return(
        <div>
            <Navbar/>

            <Header/>

            <section className = "card--list">
                <h1 className = "section--name"> Recent Projects | </h1>
                {cards}
            </section>

            <hr color = "orange"></hr>
            <Footer/>
        </div>
    )
}