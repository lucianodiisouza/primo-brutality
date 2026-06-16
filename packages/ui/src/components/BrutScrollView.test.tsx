import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrutScrollView } from "./BrutScrollView";

describe("BrutScrollView", () => {
  it("renders scrollable children", () => {
    render(
      <BrutScrollView>
        <span>Scroll item</span>
      </BrutScrollView>,
    );

    expect(screen.getByTestId("scroll-view")).toBeTruthy();
    expect(screen.getByText("Scroll item")).toBeTruthy();
  });
});
