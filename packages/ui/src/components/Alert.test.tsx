import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders title and message", () => {
    render(
      <Alert variant="success" title="Saved" message="Profile updated." />,
    );

    expect(screen.getByRole("alert")).toBeTruthy();
    expect(screen.getByText("Saved")).toBeTruthy();
    expect(screen.getByText("Profile updated.")).toBeTruthy();
  });

  it("renders title only when message is omitted", () => {
    render(<Alert title="Heads up" />);
    expect(screen.getByText("Heads up")).toBeTruthy();
  });
});
