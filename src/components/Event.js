import React from "react";
import "./styles/Event.css";

function Event(props) {
  return <div className="card">{props.event.name}</div>;
}

export default Event;
