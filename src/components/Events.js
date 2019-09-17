import React, { useState, useEffect } from "react";
import { Card, Layout } from "antd";
import axios from "axios";
import "./styles/Events.css";

function Events(props) {
  const [events, setEvents] = useState([]);

  async function fetchData() {
    const eventData = await axios
      .get(
        `https://cors-anywhere.herokuapp.com/api.smarkets.com/v3/popular/event_ids${props.match.url}`
      )
      .catch(error => {
        console.log("Error returning eventData:", error);
      });

    let url =
      "https://cors-anywhere.herokuapp.com/api.smarkets.com/v3/events/?";

    eventData.data.popular_event_ids.forEach((id, i) => {
      url += `id=${id}&`;
    });
    url = url.slice(0, -1);
    const eventDetails = await axios.get(url).catch(error => {
      console.log("Error returning eventData:", error);
    });

    setEvents(eventDetails.data.events);
  }

  useEffect(() => {
    fetchData();
  }, [props]);

  return (
    <Layout className="container">
      {events.map((event, i) => (
        <Card key={i} title={event.name} className="card">
          <p>Start Time: {event.start_datetime}</p>
          <p>Status: {event.state}</p>
        </Card>
      ))}
    </Layout>
  );
}

export default Events;
