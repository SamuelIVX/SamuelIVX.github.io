import React from "react"

export default function Footer(){
    return(
        <footer className = "footer">
            <div className = "footer--end">
                Coded in  <strong style={{ color: "orange" }}>Visual Studio Code</strong>, built with  <strong style={{ color: "orange" }}>React</strong> and deployed with  <strong style={{ color: "orange" }}>Github</strong>.
            </div>
            <div className = "footer--description">
                <p className = "footer--rights">Copyright © 2024; Designed By <span className="footer--designer">SAMUEL HERNANDEZ BALDERAS</span></p>
            </div>
        </footer>
    )
}