import { StyleProps } from "./styleProps";

export const getStyleConfigFromArgs = (args: StyleProps): StyleProps => {
  const {
    /* background props */
    bgColor,
    /* border props */
    border,
    borderColor,
    borderRadius,
    /* font props */
    fontColor,
    fontSize,
    fontFamily,
    fontWeight,
    letterSpacing,
    lineHeight,
    textVerticalAlign,
    textStyle,
    textDecoration,
    textTransform,
    textOverflow,
    placeHolderColor,
    /* size props */
    w,
    h,
    minW,
    maxW,
    minH,
    maxH,
    /* spacing props */
    m,
    p,
    /* display props */
    hidden,
    /* position props */
    position,
    positionDir,
    /* eventProps */
    hover,
  } = args;
  return {
    /* background props */
    bgColor,
    /* border props */
    border,
    borderColor,
    borderRadius,
    /* font props */
    fontColor,
    fontSize,
    fontFamily,
    fontWeight,
    letterSpacing,
    lineHeight,
    textVerticalAlign,
    textStyle,
    textDecoration,
    textTransform,
    textOverflow,
    placeHolderColor,
    /* size props */
    w,
    h,
    minW,
    maxW,
    minH,
    maxH,
    /* spacing props */
    m,
    p,
    /* display props */
    hidden,
    /* position props */
    position,
    positionDir,
    /* eventProps */
    hover,
  };
};
