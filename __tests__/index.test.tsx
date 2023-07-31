import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomePage from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    const mock = {
      user: {
        id: "",
      },
      expires: "",
    };

    render(<HomePage session={mock} />);

    const heading = screen.getByRole("heading", {
      name: /Asong Blog App/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
