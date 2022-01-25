import React from "react";
import { render, screen } from "@testing-library/react";

import { GameContainer } from "./game.container";

describe("<Component />", () => {
  test("rendered text", () => {
    render(<GameContainer />);
    expect(screen.getByText("sample component")).toBeDefined();
  });
});
