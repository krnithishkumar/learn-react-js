const { useState } = React;

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  function loadData() {
    setLoading((currentLoading) => {
      return true;
    });
    setTimeout(() => {
      setLoading(false);
      setData([1, 2, 3, 4]);
    }, 3000);
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      <pre>{JSON.stringify(data, null, " ")}</pre>
      <button onClick={loadData}>Load Data</button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
