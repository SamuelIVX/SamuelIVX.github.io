import React from "react"
export default function LeftSideNavbar(){

    return(
    <div class="wrapper">
        <div class="sidebar">
            <h2 className="fullName">Samuel Hernandez Balderas</h2>
            <p className="occupation">Aspiring Software Engineer/Web Developer</p>

            <ul>
                <li><a href="#"><i className="fas fa-address-card ABOUT"></i> About</a></li>
                <li><a href="#"><i className="fa-solid fa-user-tie"></i> Experience</a></li>
                <li><a href="#"><i className="fa-solid fa-laptop-code experience"></i> Projects</a></li>
                <li><a href="../public/SHB_Resume.pdf" download><i className="fas fa-project-diagram"></i> Resume</a></li>
                <li><a href="#"><i className="fa-solid fa-file CV"></i> CV</a></li>
            </ul> 

            <div className="social_media">
                    <a href="https://www.linkedin.com/in/samuel-hernandez-balderas-a77a31260/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/SamuelIVX">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.instagram.com/samuel05.hb/">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>

        </div>
    </div>
    )
}