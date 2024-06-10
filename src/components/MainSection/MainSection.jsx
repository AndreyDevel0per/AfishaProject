import axios from "axios";
import Day from "../Day/Day";
import "./MainSection.css";
import { useEffect, useState } from "react";

export default function MainSection() {
  const [date, setDate] = useState([]);

  useEffect(() => {
    axios.get(`https://78e49fb1217fe058.mokky.dev/date`).then((res) => {
      //   dispatch(setEvents(res.data));
      setDate(res.data);
      console.log(res.data)
    });
  }, []);

  return (
    <section className="mainSection">
      {date.map(day => <Day date={day.date}/>)}
    </section>
  );
}
