import { HTMLProps } from "react";
import { styled } from "twin.macro";
import { mapPropsToTw } from "../../../utils/mapPropsToTw";

export type StyledSpanProps = HTMLProps<HTMLSpanElement> & {
  m?: keyof typeof mapPropsToTw.margin;
};

export const StyledSpan = styled.span<StyledSpanProps>(({ m }) => [
  m ? mapPropsToTw.margin[m] : mapPropsToTw.margin["r3"],
]);
