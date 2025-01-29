function addMinutes(date, minutes) {
  //we multiply minutes by 60000 is to convert minutes to milliseconds
  return new Date(date.getTime() + minutes * 60000);
}

function Clock() {
  let [time, setTime] = React.useState(new Date());

  const handleClick = () => {
    //doesn't update the DOM
    // time = addMinutes(time, 10);
    // console.log(time);
    //updates the DOM
    setTime(addMinutes(time, 10));
  };

  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
      <button onClick={handleClick}>+ 10 Minutes</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Clock />);
