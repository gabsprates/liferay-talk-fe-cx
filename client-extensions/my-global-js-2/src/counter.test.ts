import { setupCounter } from "./counter";

import { screen } from "@testing-library/dom";
import userEvents from "@testing-library/user-event";

describe("Function: setupCounter", () => {
    beforeEach(() => {
        document.body.innerHTML = `<button id="counter" type="button"></button>`;
    });

    it("should start counter", () => {
        const button = screen.getByRole<HTMLButtonElement>("button");

        setupCounter(button);

        expect(button).toHaveTextContent("count is 0");
    });

    it("should add counter when click on the button", async () => {
        const user = userEvents.setup();
        const button = screen.getByRole<HTMLButtonElement>("button");

        setupCounter(button);

        expect(button).toHaveTextContent("count is 0");

        await user.click(button);

        expect(button).toHaveTextContent("count is 1");
    });
});
