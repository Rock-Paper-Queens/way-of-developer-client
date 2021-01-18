import { HTMLProps } from "react";
import tw, { styled } from "twin.macro";
import { mapPropsToTw } from "../../../utils/mapPropsToTw";
import {
  BackgroundProps,
  BorderProps,
  FontProps,
  SizeProps,
  SpacingProps,
  PositionProps,
  EventProps,
} from "../../../utils/styleProps";

export type StyledButtonProps = HTMLProps<HTMLButtonElement> &
  BackgroundProps &
  BorderProps &
  FontProps &
  SizeProps &
  SpacingProps &
  PositionProps &
  EventProps & {
    disabled?: boolean;
  };

export const DefaultButton = styled.button<StyledButtonProps>((props) => {
  /* button props */
  const { bgColor, border, borderColor, borderRadius } = props;
  /* font props */
  const { fontColor, fontSize } = props;
  /* size, spacing props */
  const { w, h, m, p, minW, maxW } = props;
  /* event props */
  const { disabled, hidden, hover } = props;

  return [
    /* button style */
    bgColor ? mapPropsToTw.bgColor[bgColor] : mapPropsToTw.bgColor.black,
    border ? mapPropsToTw.border[border] : mapPropsToTw.border.none,
    borderColor ? mapPropsToTw.borderColor[borderColor] : mapPropsToTw.borderColor.black,
    borderRadius ? mapPropsToTw.rounded[borderRadius] : mapPropsToTw.rounded.base,

    /* font style */
    fontColor ? mapPropsToTw.fontColor[fontColor] : mapPropsToTw.fontColor.white,
    fontSize ? mapPropsToTw.fontSize[fontSize] : mapPropsToTw.fontSize.sm,

    /* size, spacing style */
    w ? mapPropsToTw.width[w] : mapPropsToTw.width.auto,
    h ? mapPropsToTw.height[h] : mapPropsToTw.height["7"],
    m ? mapPropsToTw.margin[m] : mapPropsToTw.margin.none,
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

export const CheckedButton = styled(DefaultButton)<StyledButtonProps>(
  ({ fontColor, bgColor, border, borderColor }) => [
    fontColor ? mapPropsToTw.fontColor[fontColor] : mapPropsToTw.fontColor.black,
    bgColor ? mapPropsToTw.bgColor[bgColor] : mapPropsToTw.bgColor.white,
    border ? mapPropsToTw.border[border] : mapPropsToTw.border["1"],
    borderColor ? mapPropsToTw.borderColor[borderColor] : mapPropsToTw.borderColor.black,
  ]
);

export const AuthButton = styled(DefaultButton)<StyledButtonProps>(
  ({ bgColor, fontSize, borderRadius, w, h }) => [
    bgColor ? mapPropsToTw.bgColor[bgColor] : mapPropsToTw.bgColor.warn,
    fontSize ? mapPropsToTw.fontSize[fontSize] : mapPropsToTw.fontSize.base,
    borderRadius ? mapPropsToTw.rounded[borderRadius] : mapPropsToTw.rounded.lg,
    w ? mapPropsToTw.width[w] : mapPropsToTw.width.full,
    h ? mapPropsToTw.height[h] : mapPropsToTw.height["12"],
  ]
);

export const SelectButton = styled(DefaultButton)<StyledButtonProps>(
  ({ bgColor, fontColor, fontSize, h }) => [
    fontColor ? mapPropsToTw.fontColor[fontColor] : mapPropsToTw.fontColor.greyText,
    bgColor ? mapPropsToTw.bgColor[bgColor] : mapPropsToTw.bgColor.greyPrimary,
    fontSize ? mapPropsToTw.fontSize[fontSize] : mapPropsToTw.fontSize.xs,
    h ? mapPropsToTw.height[h] : mapPropsToTw.height["6"],
  ]
);
