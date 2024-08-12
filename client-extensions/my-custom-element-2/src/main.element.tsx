import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

class MyCustomElement2 extends HTMLElement {
  root: null | Root = null;

  connectedCallback() {
    this.root = createRoot(this);
    this.root.render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
    }
  }
}

const ELEMENT_ID = "my-custom-element-2";

if (!customElements.get(ELEMENT_ID)) {
  customElements.define(ELEMENT_ID, MyCustomElement2);
}
