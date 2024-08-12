import "./counter.css";
import { setCounter } from "./shared";

export function setupDecounter(element: HTMLButtonElement) {
    let counter = 0;
    element.addEventListener("click", () => setCounter(--counter, element));
    setCounter(0, element);
}
