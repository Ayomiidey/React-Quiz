import { useEffect } from "react";

function Timer({ dispatch, count }) {
  const min = Math.floor(count / 60);
  const secs = count % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
