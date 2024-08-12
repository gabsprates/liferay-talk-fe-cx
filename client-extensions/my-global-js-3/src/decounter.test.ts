import { setupDecounter } from "./decounter";

import { screen } from "@testing-library/dom";
import userEvents from "@testing-library/user-event";

describe("Function: setupDecounter", () => {
    beforeEach(() => {
        document.body.innerHTML = `<button id="counter" type="button"></button>`;
    });

    it("should start counter", () => {
        const button = screen.getByRole<HTMLButtonElement>("button");

        setupDecounter(button);

        expect(button).toHaveTextContent("count is 0");
    });

    it("should decrease counter when click on the button", async () => {
        const user = userEvents.setup();
        const button = screen.getByRole<HTMLButtonElement>("button");

        setupDecounter(button);

        expect(button).toHaveTextContent("count is 0");

        await user.click(button);

        expect(button).toHaveTextContent("count is -1");
    });
});
