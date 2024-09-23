import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} alt={props.item.title} className="card--image" />
        <p className="card--title"><b>{props.item.title}</b></p>
        <p className="card--description">{props.item.description}</p>
        <div className="card--usages">
          {props.item.servicesUsed.map((service, index) => (
            <div key={index} className="service-item">
              {service}
            </div>
          ))}
        </div>
    </div>
  );
}
