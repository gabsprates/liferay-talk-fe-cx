import { setupCounter } from "./counter";
import { setupDecounter } from "./decounter";

declare global {
    interface Window {
        PROJECT_ID: {
            setupCounter: typeof setupCounter;
            setupDecounter: typeof setupDecounter;
        };
    }
}

window.PROJECT_ID = {
    setupCounter,
    setupDecounter,
};
