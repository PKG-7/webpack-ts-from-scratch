import { useState } from "react";
import st from "./App.module.scss";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1> classNameHello, world!</h1>
      <p>You clicked {count} times</p>
      <div className={st.dik}>asd</div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
