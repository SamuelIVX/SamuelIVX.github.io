import React from "react"

export default function Navbar(){
    return(
        <div className="navbar">
            <img src = "../images/technology.png" className="navbar--img"/>
            <h1 className="navbar--title">SamTech</h1>
            <div> 
                <a href ="https://www.linkedin.com/in/samuel-hernandez-balderas-a77a31260/" alt="" target="_blank"><img src = "../images/linkedin.jpeg" className="socials"/></a>
                <a href ="https://github.com/SamuelIVX" alt="" target="_blank"><img src = "../images/github.png"className="socials"/></a>
                <a href ="https://www.instagram.com/samuel05.hb/" alt="" target="_blank"><img src = "../images/instagram.webp"className="socials"/></a>
            </div>
        </div>
    )
}