import React, { useCallback, useMemo, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  console.log("App Rendering...");

  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "hello", id: 1 });

  const greet = useCallback(() => {
    console.log("hello good morning");
  }, []);

  const sum = useMemo(() => {
    let total = 0;
    console.log("calculation Running");
    for (let i = 0; i < 1000; i++) {
      total += i;
    }
    return total;
  }, []);

  return (
    <div>
      <h1>count is :- {count}</h1>
      <h1>Name is :- {user.name}</h1>
      <h1>Sum is :- {sum}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setUser((prev) => ({ ...prev, name: "World" }))}>
        Change name
      </button>
      <Home user={user} />
      <About greet={greet} />
    </div>
  );
};

export default App;
