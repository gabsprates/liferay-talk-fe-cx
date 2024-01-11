import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
    it("should render title with content from my-js-import-maps-entry", () => {
        render(<App />);

        const title = screen.getByRole("heading");
        expect(title).toHaveTextContent("Vite + React");
    });
});
