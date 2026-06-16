import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { XContainer } from "./XContainer";

describe("XContainer", () => {
  it("renders children", () => {
    render(
      <XContainer testID="row">
        <span>Row item</span>
      </XContainer>,
    );

    expect(screen.getByTestId("row")).toBeTruthy();
    expect(screen.getByText("Row item")).toBeTruthy();
  });
});
