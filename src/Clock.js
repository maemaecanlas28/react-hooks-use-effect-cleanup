import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
      console.log("getting triggered");
    }, 1000);
  
    return (() => {
      clearInterval(timerID);
    })
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
