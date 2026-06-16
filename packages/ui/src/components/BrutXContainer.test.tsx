import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrutXContainer } from "./BrutXContainer";

describe("BrutXContainer", () => {
  it("renders children", () => {
    render(
      <BrutXContainer testID="row">
        <span>Row item</span>
      </BrutXContainer>,
    );

    expect(screen.getByTestId("row")).toBeTruthy();
    expect(screen.getByText("Row item")).toBeTruthy();
  });
});
