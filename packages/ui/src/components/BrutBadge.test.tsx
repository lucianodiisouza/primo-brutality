import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrutBadge } from "./BrutBadge";

describe("BrutBadge", () => {
  it("renders label text", () => {
    render(<BrutBadge label="New" variant="pink" />);
    expect(screen.getByText("New")).toBeTruthy();
  });
});
