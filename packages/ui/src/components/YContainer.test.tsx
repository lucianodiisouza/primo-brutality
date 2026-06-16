import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { YContainer } from "./YContainer";

describe("YContainer", () => {
  it("renders children", () => {
    render(
      <YContainer testID="stack">
        <span>Stacked item</span>
      </YContainer>,
    );

    expect(screen.getByTestId("stack")).toBeTruthy();
    expect(screen.getByText("Stacked item")).toBeTruthy();
  });
});
