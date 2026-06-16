import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Container } from "./Container";

describe("Container", () => {
  it("renders children", () => {
    render(
      <Container testID="page">
        <span>Inside container</span>
      </Container>,
    );

    expect(screen.getByTestId("page")).toBeTruthy();
    expect(screen.getByText("Inside container")).toBeTruthy();
  });
});
