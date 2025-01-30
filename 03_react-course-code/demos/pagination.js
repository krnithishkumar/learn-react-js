const { useState, useEffect } = React;

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  console.log("Intial render");
  function loadData() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (page === 1) {
        setData([1, 2, 3, 4, 5]);
      } else if (page === 2) {
        setData([6, 7, 8, 9, 10]);
      } else {
        setData(null);
      }
    }, 1000);
  }

  useEffect(loadData, [page]);

  function handleNext() {
    setPage((currentPage) => currentPage + 1);
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 1)}</pre>}
      <span>Current Page: {page}</span>
      <button onClick={handleNext}>Next</button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
