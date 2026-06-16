import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrutText, BrutHeading } from "./BrutText";

describe("BrutText", () => {
  it("renders children", () => {
    render(<BrutText>Body copy</BrutText>);
    expect(screen.getByText("Body copy")).toBeTruthy();
  });
});

describe("BrutHeading", () => {
  it("renders with header accessibility role", () => {
    render(<BrutHeading level={2}>Page title</BrutHeading>);
    expect(screen.getByRole("heading", { name: "Page title" })).toBeTruthy();
  });
});
