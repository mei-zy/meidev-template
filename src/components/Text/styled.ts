import { styled } from "styled-components";

import type { FontSizeMapType, FontSizeType, FontWeightType } from "./type";

const FontSizeMap: FontSizeMapType = {
  sm: {
    mobile: 22,
    desktop: 23,
  },
  s: {
    mobile: 10,
    desktop: 13,
  },
  default: {
    mobile: 12,
    desktop: 15,
  },
  l: {
    mobile: 15,
    desktop: 20,
  },
  lg: {
    mobile: 17,
    desktop: 22,
  },
};

const getFontWeight = (weight?: FontWeightType, isEn?: boolean) => {
  if (isEn) {
    if (weight === "l") return 300;
    if (weight === "b") return 700;
    return 400;
  } else {
    if (weight === "l") return 300;
    if (weight === "b") return 500;

    return 400;
  }
};

const TextWrapper = styled.div<{
  isEn: boolean;
  color?: string;
  size?: FontSizeType;
  weight?: FontWeightType;
}>`
  font-family: ${({ isEn }) => (isEn ? "Poppins" : "Noto Sans KR")}, sans-serif;
  ${({ color }) => color && `color:${color}`}
  font-size:${({ size }) =>
    size ? FontSizeMap[size].desktop : FontSizeMap.default.desktop}px;
  font-weight: ${({ weight, isEn }) => getFontWeight(weight, isEn)};
`;

const TextStyle = { TextWrapper };

export default TextStyle;
