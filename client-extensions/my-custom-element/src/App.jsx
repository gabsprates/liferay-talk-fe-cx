import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { myDate, myString } from "my-js-import-maps-entry";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="text-center mb-3">
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>

            <h1 className="text-center mb-3">
                &lt; Vite + React | {myDate()} : {myString()} &gt;
            </h1>

            <div className="card text-center p-3">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p className="mt-3 mb-0">
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>

            <p className="read-the-docs text-center">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
