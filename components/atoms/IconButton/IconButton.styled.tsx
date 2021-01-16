import { HTMLProps } from "react";
import tw, { styled } from "twin.macro";
import { mapPropsToTw } from "../../../utils/mapPropsToTw";

export type StyledIconButtonProps = HTMLProps<HTMLButtonElement> & {
  /* button props */
  bgColor?: keyof typeof mapPropsToTw.bgColor;
  border?: keyof typeof mapPropsToTw.border;
  borderColor?: keyof typeof mapPropsToTw.borderColor;
  borderRadius?: keyof typeof mapPropsToTw.rounded;
  /* size, spacing props */
  w?: keyof typeof mapPropsToTw.width;
  h?: keyof typeof mapPropsToTw.height;
  m?: keyof typeof mapPropsToTw.margin;
  p?: keyof typeof mapPropsToTw.padding;
  minW?: keyof typeof mapPropsToTw.minWidth;
  maxW?: keyof typeof mapPropsToTw.maxWidth;
  /* event props */
  disabled?: boolean;
  hidden?: boolean;
  hover?: keyof typeof mapPropsToTw.event;
};

export const DefaultButton = styled.button<StyledIconButtonProps>((props) => {
  /* button props */
  const { bgColor, border, borderColor, borderRadius } = props;
  /* size, spacing props */
  const { w, h, m, p, minW, maxW } = props;
  /* event props */
  const { disabled, hidden, hover } = props;

  return [
    /* button style */
    bgColor ? mapPropsToTw.bgColor[bgColor] : mapPropsToTw.bgColor.transparent,
    border ? mapPropsToTw.border[border] : mapPropsToTw.border.none,
    borderColor ? mapPropsToTw.borderColor[borderColor] : mapPropsToTw.borderColor.black,
    borderRadius ? mapPropsToTw.rounded[borderRadius] : mapPropsToTw.rounded.base,

    /* size, spacing style */
    w && mapPropsToTw.width[w],
    h && mapPropsToTw.height[h],
    m ? mapPropsToTw.margin[m] : mapPropsToTw.margin.none,
    p ? mapPropsToTw.padding[p] : mapPropsToTw.padding["1.5"],
    minW ? mapPropsToTw.minWidth[minW] : mapPropsToTw.minWidth.min,
    maxW && mapPropsToTw.maxWidth[maxW],

    /* event style */
    disabled && mapPropsToTw.event["disabled:o30"],
    hidden && mapPropsToTw.display.hidden,
    hover && mapPropsToTw.event[hover],

    /* default reset */
    tw`outline-none`,
    tw`cursor-pointer`,
  ];
});

export const RoundIconButton = styled(DefaultButton)<StyledIconButtonProps>(
  ({ bgColor, border, borderColor }) => [
    bgColor ? mapPropsToTw.bgColor[bgColor] : mapPropsToTw.bgColor.white,
    border ? mapPropsToTw.border[border] : mapPropsToTw.border["1"],
    borderColor ? mapPropsToTw.borderColor[borderColor] : mapPropsToTw.borderColor.black,
  ]
);

export const SquareIconButton = styled(DefaultButton)<StyledIconButtonProps>(
  ({ bgColor, borderRadius, w, h }) => [
    bgColor ? mapPropsToTw.bgColor[bgColor] : mapPropsToTw.bgColor.warn,
    borderRadius ? mapPropsToTw.rounded[borderRadius] : mapPropsToTw.rounded.lg,
    w ? mapPropsToTw.width[w] : mapPropsToTw.width.full,
    h ? mapPropsToTw.height[h] : mapPropsToTw.height["12"],
  ]
);
