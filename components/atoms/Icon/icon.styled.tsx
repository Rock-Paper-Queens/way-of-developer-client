import { HTMLProps } from "react";
import { styled } from "twin.macro";
import { mapPropsToTw } from "../../../utils/mapPropsToTw";
import { PositionProps } from "../../../utils/styleProps";

export type StyledSpanProps = HTMLProps<HTMLSpanElement> &
  PositionProps & {
    w?: keyof typeof mapPropsToTw.width;
    h?: keyof typeof mapPropsToTw.height;
    m?: keyof typeof mapPropsToTw.margin;
  };

export const StyledSpan = styled.span<StyledSpanProps>(({ m, w, h, position, positionDir }) => [
  m ? mapPropsToTw.margin[m] : mapPropsToTw.margin.none,
  w ? mapPropsToTw.width[w] : mapPropsToTw.width.auto,
  h && mapPropsToTw.height[h],
  position && mapPropsToTw.position[position],
  positionDir && mapPropsToTw.positionDir[positionDir],
]);
