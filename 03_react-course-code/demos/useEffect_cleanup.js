function Clock() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const timerID = setInterval(refresh, 1000);
    console.log(timerID);
    // return () => {
    //   clearInterval(timerID);
    // };
  }, []);

  const refresh = () => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <div>
      <p>{time}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Clock />);
