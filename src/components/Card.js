import React from "react"

export default function Card(props){
    return(
        <div className = "card">
            <img src = {`../images/${props.item.imageUrl}`} className = "card--image"/>
            <p className = "card--title"><b>{props.item.title}</b></p>
            <p className = "card--description">{props.item.description}</p>
        </div>
    )
}