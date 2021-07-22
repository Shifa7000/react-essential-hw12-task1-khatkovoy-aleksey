import React, { useEffect, useState } from "react";
import "./index.css";

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
      console.log("clearInterval for ID: " + timerID);
    };
  }, []);

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h1>Hello, world!</h1>
      <FormattedDate date={date} />
    </div>
  );
}

export default Clock;
