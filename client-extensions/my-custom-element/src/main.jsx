import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

class WebComponent extends HTMLElement {
    root;

    connectedCallback() {
        this.root = ReactDOM.createRoot(this);
        this.root.render(
            <StrictMode>
                <App />
            </StrictMode>
        );
    }

    disconnectedCallback() {
        this.root.unmount();
    }
}

const ELEMENT_ID = "my-custom-element";

if (!customElements.get(ELEMENT_ID)) {
    customElements.define(ELEMENT_ID, WebComponent);
}
