function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

function Clock() {
  const [time, setTime] = React.useState(new Date());

  const handleClick1 = () => {
    setTime(addMinutes(time, 10));
    setTime(addMinutes(time, 10));
  };

  const handleClick2 = () => {
    setTime((previousTime) => {
      console.log(previousTime, "handleClick2 - setTime 1");
      return addMinutes(previousTime, 10);
    });
    setTime((previousTime) => {
      console.log(previousTime, "handleClick2 - setTime 2");
      return addMinutes(previousTime, 10);
    });
  };

  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
      <button onClick={handleClick1}>+ 10 Minutes</button>
      <button onClick={handleClick2}>+ 10 Minutes</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Clock />);
