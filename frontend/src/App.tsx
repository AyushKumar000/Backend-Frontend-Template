import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("");
  

  useEffect(() => {
    fetch("/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);
        }
        return res.json();  // Make sure it's parsed as JSON
      })
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
