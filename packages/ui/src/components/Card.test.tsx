import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "./Card";
import { Text } from "./Text";

describe("Card", () => {
  it("renders children", () => {
    render(
      <Card testID="card">
        <Text>Card content</Text>
      </Card>,
    );

    expect(screen.getByTestId("card")).toBeTruthy();
    expect(screen.getByText("Card content")).toBeTruthy();
  });
});
