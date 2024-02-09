import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [Jokes, setJokes] = useState(0);
  const [loading, setLoadind] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setError("");
        setLoadind(true);
        const responce = await axios.get("/api/jokes?search=" + search);
        console.log(responce.data);
        setJokes(responce.data);
        setLoadind(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    })();
    () => {
      controller.abort();
    };
  }, [search]);

  if (loading) {
    <>
      {error && <h1>{error}</h1>}
      return <div>Loading ...</div>;
    </>;
  }

  return (
    <>
      <h1>React api handling </h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {Jokes &&
          Jokes?.map((joke) => (
            <div key={joke.id}>
              <p>{joke.name}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
