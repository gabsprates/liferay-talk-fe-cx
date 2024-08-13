import App from "./App";

import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";

describe("Component: <App />", () => {
    it("should start counter", () => {
        render(<App />);

        const button = screen.getByRole<HTMLButtonElement>("button");
        expect(button).toHaveTextContent("count is 0");
    });

    it("should add counter when click on the button", async () => {
        const user = userEvents.setup();

        render(<App />);

        const button = screen.getByRole<HTMLButtonElement>("button");

        expect(button).toHaveTextContent("count is 0");

        await user.click(button);

        expect(button).toHaveTextContent("count is 1");
    });
});
