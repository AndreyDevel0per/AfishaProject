import { useEffect, useState } from "react";
import "./CalendarPage.css";
import axios from "axios";
import { useSelector } from "react-redux";
import Event from "../Event/Event";

export default function CalendarPage() {
  const events = useSelector((state) => state.events.events);

  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://78e49fb1217fe058.mokky.dev/orders?user_id=${localStorage.getItem(
          "id"
        )}`
      )
      .then((res) => {
        console.log(res.data);
        setCalendarEvents(res.data);
      });
  }, []);

  return (
    <div className="calendarPage">
      <div className="calendarPage__header">
        <h1>
          {localStorage.getItem("id")
            ? "Your events"
            : "Log in to use calendar"}
        </h1>
      </div>
      <div className="calendarPage__container">
        {calendarEvents.map((event) => (
          <Event
            img={event.img}
            id={event.eventid}
            name={event.name}
            time={event.time}
            place={event.place}
          />
        ))}
      </div>
    </div>
  );
}
