import React from 'react';
import "./card.styles.css";

export const Card = props => {
  return (
    <div className="card-wrapper">
      <img
        src={`https://robohash.org/${props.alien.id}?set=set3&size=180x180`}
        alt="alien"
      />
      <div>
        <div>{props.alien.name}</div>
        <div>{props.alien.email}</div>
        <div>{props.alien.phone}</div>
      </div>
    </div>
  )
}