import "./EventPage.css";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Button/Button";

export default function EventPage({ calendar }) {
  const { id } = useParams();

  const [event, setEvent] = useState({});

  const [signIn, setSignIn] = useState("You need to log in");

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    axios.get(`https://78e49fb1217fe058.mokky.dev/events/` + id).then((res) => {
      setEvent(res.data);
    });

    const res = fetch("https://78e49fb1217fe058.mokky.dev/auth_me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage
          .getItem("token")
          ?.replace(/"/g, "")}`,
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.fullName) {
          setSignIn("Add to calendar");
          axios
            .get(
              `https://78e49fb1217fe058.mokky.dev/orders?eventid=${id}&user_id=${localStorage.getItem(
                "id"
              )}`
            )
            .then((res) => {
              if (res.data.length !== 0) {
                setSignIn("In calendar");
              }
            });
        } else console.log("login!");
      });
  }, []);

  const addToCalendar = async () => {
    const res = await fetch("https://78e49fb1217fe058.mokky.dev/auth_me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage
          .getItem("token")
          ?.replace(/"/g, "")}`,
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.fullName) {
          axios
            .get(
              `https://78e49fb1217fe058.mokky.dev/orders?eventid=${id}&user_id=${localStorage.getItem(
                "id"
              )}`
            )
            .then((res) => {
              if (res.data.length === 0) {
                axios.post("https://78e49fb1217fe058.mokky.dev/orders", {
                  eventid: `${id}`,
                  name: `${event.name}`,
                  user_id: `${localStorage.getItem("id")}`,
                  img: `${event.img}`,
                  date: `${event.date}`,
                  time: `${event.time}`,
                  place: `${event.place}`,
                });
                setSignIn("In calendar");
              } else setSignIn("In calendar");
            });
        } else console.log("login!");
      });
  };

  return (
    <div className="eventPage">
      <div className="eventPage__header">
        <div className="eventPage__img">
          <img src={event.img} alt="" />
        </div>
        <div className="eventPage__text">
          <div className="eventPage__container">
            <h1>{event.name}</h1>
            <div className="eventPage__info">
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                ullam provident architecto eligendi praesentium? Quibusdam
                itaque ipsum molestiae blanditiis ullam, vero autem totam rerum
                harum. Tenetur quam consectetur quidem voluptatum.
              </span>
            </div>
            <div className="eventPage__date">
              <span>{event.date}</span>
              <span>{event.time}</span>
            </div>
            <div className="eventPage__place">
              <span>{event.place}</span>
            </div>
            <div className="eventPage__button">
              <Button onClick={addToCalendar}>{signIn}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
