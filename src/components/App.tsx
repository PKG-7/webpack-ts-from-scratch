import { useState } from "react";
import st from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import { SiWebpack } from "react-icons/si";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <main className={st.main}>
      <Navigation />
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
        <button className={st.button} onClick={increment}>
          Click me
        </button>
      </div>
      <Outlet />
    </main>
  );
}

function Navigation() {
  return (
    <div className={st.nav}>
      <Link className={st.link} to="/">
        Home
      </Link>
      <Link className={st.link} to="/about">
        About
      </Link>
      <Link className={st.link} to="/shop">
        Shop
      </Link>
    </div>
  );
}
