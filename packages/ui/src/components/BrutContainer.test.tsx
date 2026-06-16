import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrutContainer } from "./BrutContainer";

describe("BrutContainer", () => {
  it("renders children", () => {
    render(
      <BrutContainer testID="page">
        <span>Inside container</span>
      </BrutContainer>,
    );

    expect(screen.getByTestId("page")).toBeTruthy();
    expect(screen.getByText("Inside container")).toBeTruthy();
  });
});
