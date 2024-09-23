import React from "react"

export default function TreeTimeline(){
    return(
        <div className="timeline">

            <div className="container left-container">
                <img src="./images/aot.jpeg" alt=""/>
                <div className="text-box">
                    <h2>TECH360 Student • America On Tech</h2>
                    <small>August 2022</small>
                    <p>
                        Engaged with technology professionals to develop a portfolio of technology projects that illustrates an
                        understanding of web development. Such as the creation of a mock business and an accompanying website.
                    </p>
                    <span className="left-container-arrow"></span>
                </div>
            </div>

            <div className="container right-container">
                <img src="./images/aot.jpeg" alt=""/>
                <div className="text-box">
                    <h2>Tech Flex Leader • America On Tech</h2>
                    <small>September 2022 - May 2023</small>
                    <p>
                        Attended weekly sessions with software engineers in the fields of Web Development and UX Design. 
                        Paired with technology mentors to focus on college and career readiness skills. Developed a portfolio
                        of technology projects that illustrate an understanding of Advanced Web Development and critical UX Design skills.
                    </p>
                    <span className="right-container-arrow"></span>
                </div>
            </div>

            <div className="container left-container">
                <img src="./images/btt.png" alt=""/>
                <div className="text-box">
                    <h2>Summer Guild Student</h2>
                    <small>July 2023</small>
                    <p>
                        Collaborated with a team and professionals to build a strong foundation in HTML, CSS, and Javascript.
                        Built a website from scratch, leveraging the role of a leader, demonstrating coding proficiency and 
                        communication skills. 
                    </p>    
                    <span className="left-container-arrow"></span>
                </div>
            </div>

            <div className="container right-container">
                <img src="./images/amazon.jpg" alt=""/>
                <div className="text-box">
                    <h2>AFE SDE Intern • Amazon</h2>
                    <small>June 2024 - August 2024</small>
                    <p>
                        Developed an intern project leveraging AWS services such as S3, SQS, Lambda, and Glue.
                        Collaborated with an established team leveraging internal tools and learning the 
                        importance of time management, communication, code structure + readability + and refactoring.
                    </p>
                    <span className="right-container-arrow"></span>
                </div>
            </div>

        </div>
    )
}