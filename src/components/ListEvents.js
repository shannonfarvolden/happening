import React, { useState, useEffect } from "react";
import axios from "axios";
import Event from "./Event";
function ListEvents() {
  const [events, setEvents] = useState([]);

  async function fetchData() {
    const reponse = await axios
      .get("https://cors-anywhere.herokuapp.com/api.smarkets.com/v3/events")
      .catch(error => {
        console.log("Error returning reponse:", error);
      });
    console.log("request", reponse.data.events);
    setEvents(reponse.data.events);
  }

  useEffect(() => {
    fetchData();
  }, [events]);

  return (
    <div>
      {events.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
}

export default ListEvents;
