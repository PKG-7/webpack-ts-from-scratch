import { useState } from "react";
import st from "./App.module.scss";
import { Outlet } from "react-router-dom";
import { SiWebpack } from "react-icons/si";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className={st.main}>
      <h1 className={st.header}>
        <SiWebpack /> Hello, WebPack!
      </h1>
      <div className={st.counter}>
        <p>
          You clicked
          <span className={st.count}> {count}</span> times
        </p>
      </div>

      <div className={st.buttonContainer}>
        <button className={st.button} onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      {/* <Outlet /> */}
    </main>
  );
}
