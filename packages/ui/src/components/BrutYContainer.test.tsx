import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrutYContainer } from "./BrutYContainer";

describe("BrutYContainer", () => {
  it("renders children", () => {
    render(
      <BrutYContainer testID="stack">
        <span>Stacked item</span>
      </BrutYContainer>,
    );

    expect(screen.getByTestId("stack")).toBeTruthy();
    expect(screen.getByText("Stacked item")).toBeTruthy();
  });
});
