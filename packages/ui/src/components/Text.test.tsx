import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Text, Heading } from "./Text";

describe("Text", () => {
  it("renders children", () => {
    render(<Text>Body copy</Text>);
    expect(screen.getByText("Body copy")).toBeTruthy();
  });
});

describe("Heading", () => {
  it("renders with header accessibility role", () => {
    render(<Heading level={2}>Page title</Heading>);
    expect(screen.getByRole("heading", { name: "Page title" })).toBeTruthy();
  });
});
