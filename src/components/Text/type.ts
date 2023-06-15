export type FontSizeType = "sm" | "s" | "default" | "l" | "lg";
export type FontWeightType = "l" | "r" | "b";

type FontSizeMapInnerType = {
  mobile: number;
  desktop: number;
};

export type FontSizeMapType = {
  [key in FontSizeType]: FontSizeMapInnerType;
};

export interface TextProps {
  children: string;
  color?: string;
  size?: FontSizeType;
  weight?: FontWeightType;
}
