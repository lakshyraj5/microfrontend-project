import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Button from 'remoteApp/Button';

const Layout = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite & React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Button />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <nav>
        <Link to="/contact">Contact </Link>
        <Link to="/about"> About</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;