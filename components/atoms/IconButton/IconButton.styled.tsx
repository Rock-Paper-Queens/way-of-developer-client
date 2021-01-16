import { HTMLProps } from "react";
import tw, { styled } from "twin.macro";
import { mapPropsToTw } from "../../../utils/mapPropsToTw";

export type StyledIconButtonProps = HTMLProps<HTMLButtonElement> & {
  /* button props */
  bgColor?: keyof typeof mapPropsToTw.bgColor;
  border?: keyof typeof mapPropsToTw.border;
  borderColor?: keyof typeof mapPropsToTw.borderColor;
  borderRadius?: keyof typeof mapPropsToTw.rounded;
  /* font props */
  color?: keyof typeof mapPropsToTw.color;
  fontSize?: keyof typeof mapPropsToTw.fontSize;
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
  /* font props */
  const { color, fontSize } = props;
  /* size, spacing props */
  const { w, h, m, p, minW, maxW } = props;
  /* event props */
  const { disabled, hidden, hover } = props;

  return [
    /* button style */
    bgColor ? mapPropsToTw.bgColor[bgColor] : mapPropsToTw.bgColor.black,
    border ? mapPropsToTw.border[border] : mapPropsToTw.border["0"],
    borderColor ? mapPropsToTw.borderColor[borderColor] : mapPropsToTw.borderColor.black,
    borderRadius ? mapPropsToTw.rounded[borderRadius] : mapPropsToTw.rounded.base,

    /* font style */
    color ? mapPropsToTw.color[color] : mapPropsToTw.color.white,
    fontSize ? mapPropsToTw.fontSize[fontSize] : mapPropsToTw.fontSize.sm,

    /* size, spacing style */
    w ? mapPropsToTw.width[w] : mapPropsToTw.width.auto,
    h ? mapPropsToTw.height[h] : mapPropsToTw.height["7"],
    m ? mapPropsToTw.margin[m] : mapPropsToTw.margin["0"],
    p ? mapPropsToTw.padding[p] : mapPropsToTw.padding.x5,
    minW && mapPropsToTw.minWidth[minW],
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
  ({ color, bgColor, border, borderColor }) => [
    color ? mapPropsToTw.color[color] : mapPropsToTw.color.black,
    bgColor ? mapPropsToTw.bgColor[bgColor] : mapPropsToTw.bgColor.white,
    border ? mapPropsToTw.border[border] : mapPropsToTw.border["1"],
    borderColor ? mapPropsToTw.borderColor[borderColor] : mapPropsToTw.borderColor.black,
  ]
);

export const SquareIconButton = styled(DefaultButton)<StyledIconButtonProps>(
  ({ bgColor, fontSize, borderRadius, w, h }) => [
    bgColor ? mapPropsToTw.bgColor[bgColor] : mapPropsToTw.bgColor.warn,
    fontSize ? mapPropsToTw.fontSize[fontSize] : mapPropsToTw.fontSize.base,
    borderRadius ? mapPropsToTw.rounded[borderRadius] : mapPropsToTw.rounded.lg,
    w ? mapPropsToTw.width[w] : mapPropsToTw.width.full,
    h ? mapPropsToTw.height[h] : mapPropsToTw.height["12"],
  ]
);
