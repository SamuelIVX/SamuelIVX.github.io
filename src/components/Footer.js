import React from "react"

export default function Footer(){
    return(
        <footer className = "footer">
            <h1 className = "footer--contact">Contact me for any inquiries: <span className = "footer--email"><a href="mailto:samuel05.hb@gmail.com">samuel05.hb@gmail.com</a></span></h1>
            <div className = "footer--description">
                <p className = "footer--rights">Copyright © 2024; Designed By <span className = "footer--designer">SAMUEL HERNANDEZ BALDERAS</span></p>
            </div>
        </footer>
    )
}