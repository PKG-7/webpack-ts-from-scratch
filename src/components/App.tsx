import { useState } from "react";
import st from "./App.module.scss";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <main className={st.main}>
      <h1 className={st.header}> classNameHello, world!</h1>
      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </main>
  );
}
