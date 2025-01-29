const { useState, useEffect } = React;

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  function loadData() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData([1, 2, 3, 4, 5]);
    }, 1000);
  }

  useEffect(loadData, []);

  return (
    <>
      {console.log("render")}
      {loading && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 1)}</pre>}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
