import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrutCard } from "./BrutCard";
import { BrutText } from "./BrutText";

describe("BrutCard", () => {
  it("renders children", () => {
    render(
      <BrutCard testID="card">
        <BrutText>Card content</BrutText>
      </BrutCard>,
    );

    expect(screen.getByTestId("card")).toBeTruthy();
    expect(screen.getByText("Card content")).toBeTruthy();
  });
});
