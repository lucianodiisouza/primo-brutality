/** Gap preset aligned with design token spacing scale. */
export type BrutLayoutGap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

/** Cross-axis alignment for flex layouts. */
export type BrutLayoutAlign = "start" | "center" | "end" | "stretch";

/** Main-axis distribution for flex layouts. */
export type BrutLayoutJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

export const gapClasses: Record<BrutLayoutGap, string> = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
  "2xl": "gap-12",
};

export const alignClasses: Record<BrutLayoutAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

export const justifyClasses: Record<BrutLayoutJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};
