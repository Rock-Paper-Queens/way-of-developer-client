import { HTMLProps } from "react";
import tw, { styled } from "twin.macro";
import { mapPropsToTw } from "../../../utils/mapPropsToTw";
import {
  BackgroundProps,
  BorderProps,
  SizeProps,
  SpacingProps,
  PositionProps,
  EventProps,
} from "../../../utils/styleProps";

export type StyledIconButtonProps = HTMLProps<HTMLButtonElement> &
  BackgroundProps &
  BorderProps &
  SizeProps &
  SpacingProps &
  PositionProps &
  EventProps & {
    disabled?: boolean;
  };

export const DefaultIconButton = styled.button<StyledIconButtonProps>((props) => {
  /* button props */
  const { bgColor, border, borderColor, borderRadius } = props;
  /* size, spacing props */
  const { w, h, m, p, minW, maxW, minH, maxH } = props;
  /* position props */
  const { position, positionDir } = props;
  /* event props */
  const { disabled, hidden, hover } = props;

  return [
    /* button style */
    bgColor ? mapPropsToTw.bgColor[bgColor] : mapPropsToTw.bgColor.transparent,
    border ? mapPropsToTw.border[border] : mapPropsToTw.border.none,
    borderColor ? mapPropsToTw.borderColor[borderColor] : mapPropsToTw.borderColor.black,
    borderRadius ? mapPropsToTw.rounded[borderRadius] : mapPropsToTw.rounded.none,

    /* size, spacing style */
    w && mapPropsToTw.width[w],
    h && mapPropsToTw.height[h],
    m ? mapPropsToTw.margin[m] : mapPropsToTw.margin.none,
    p ? mapPropsToTw.padding[p] : mapPropsToTw.padding["1.5"],
    minW ? mapPropsToTw.minWidth[minW] : mapPropsToTw.minWidth.min,
    maxW && mapPropsToTw.maxWidth[maxW],
    minH && mapPropsToTw.minHeight[minH],
    maxH && mapPropsToTw.maxHeight[maxH],

    /* position style */
    position && mapPropsToTw.position[position],
    positionDir && mapPropsToTw.positionDir[positionDir],

    /* event style */
    disabled && mapPropsToTw.event["disabled:o30"],
    hidden && mapPropsToTw.display.hidden,
    hover && mapPropsToTw.event[hover],

    /* default reset */
    tw`outline-none`,
    tw`cursor-pointer`,
  ];
});

export const RoundIconButton = styled(DefaultIconButton)<StyledIconButtonProps>(
  ({ w, h, bgColor, borderRadius }) => [
    w ? mapPropsToTw.width[w] : mapPropsToTw.width["10"],
    h ? mapPropsToTw.height[h] : mapPropsToTw.height["10"],
    bgColor ? mapPropsToTw.bgColor[bgColor] : mapPropsToTw.bgColor.greyPrimary,
    borderRadius ? mapPropsToTw.rounded[borderRadius] : mapPropsToTw.rounded.full,
  ]
);

export const SquareIconButton = styled(DefaultIconButton)<StyledIconButtonProps>(
  ({ bgColor, borderRadius, w, h }) => [
    w ? mapPropsToTw.width[w] : mapPropsToTw.width["6"],
    h ? mapPropsToTw.height[h] : mapPropsToTw.height["6"],
    bgColor ? mapPropsToTw.bgColor[bgColor] : mapPropsToTw.bgColor.black,
    borderRadius ? mapPropsToTw.rounded[borderRadius] : mapPropsToTw.rounded.base,
  ]
);
