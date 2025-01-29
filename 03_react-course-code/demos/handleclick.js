function handleClick() {
  console.log("clicked");
}

function HandleClickApp() {
  return <button onClick={handleClick}>Click me</button>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<HandleClickApp />);
