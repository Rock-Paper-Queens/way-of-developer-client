import { HTMLProps } from "react";
import tw, { styled } from "twin.macro";
import { mapPropsToTw } from "../../../utils/mapPropsToTw";

export type StyledButtonProps = HTMLProps<HTMLButtonElement> & {
  hasHover?: boolean;
  fullWidth?: boolean;
  color?: keyof typeof mapPropsToTw.color;
  bgColor?: keyof typeof mapPropsToTw.bgColor;
  fontSize?: keyof typeof mapPropsToTw.fontSize;
  border?: keyof typeof mapPropsToTw.border;
  borderColor?: keyof typeof mapPropsToTw.borderColor;
  borderRadius?: keyof typeof mapPropsToTw.rounded;
  w?: keyof typeof mapPropsToTw.width;
  h?: keyof typeof mapPropsToTw.height;
  m?: keyof typeof mapPropsToTw.margin;
  p?: keyof typeof mapPropsToTw.padding;
};

export const DefaultButton = styled.button<StyledButtonProps>(
  ({ bgColor, color, fontSize, borderRadius, border, borderColor, w, h, m, p }) => [
    color ? mapPropsToTw.color[color] : mapPropsToTw.color.white,
    bgColor ? mapPropsToTw.bgColor[bgColor] : mapPropsToTw.bgColor.black,
    fontSize ? mapPropsToTw.fontSize[fontSize] : mapPropsToTw.fontSize.sm,
    border ? mapPropsToTw.border[border] : mapPropsToTw.border["0"],
    borderColor ? mapPropsToTw.borderColor[borderColor] : mapPropsToTw.borderColor.black,
    borderRadius ? mapPropsToTw.rounded[borderRadius] : mapPropsToTw.rounded.base,
    w ? mapPropsToTw.width[w] : mapPropsToTw.width.auto,
    h ? mapPropsToTw.height[h] : mapPropsToTw.height["7"],
    m ? mapPropsToTw.margin[m] : mapPropsToTw.margin["0"],
    p ? mapPropsToTw.padding[p] : mapPropsToTw.padding.x5,

    tw`outline-none`,
    tw`cursor-pointer`,
  ]
);

export const CheckedButton = styled(DefaultButton)<StyledButtonProps>(
  ({ color, bgColor, border, borderColor, w, h }) => [
    color ? mapPropsToTw.color[color] : mapPropsToTw.color.black,
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

export const SelectButton = styled.button<StyledButtonProps>(
  ({ bgColor, color, fontSize, borderRadius, border, borderColor, w, h, m, p }) => [
    color ? mapPropsToTw.color[color] : tw`text-white`,
    bgColor ? mapPropsToTw.bgColor[bgColor] : tw`bg-black`,
    fontSize ? mapPropsToTw.fontSize[fontSize] : tw`text-sm`,
    border ? mapPropsToTw.border[border] : tw`border-0`,
    borderColor ? mapPropsToTw.borderColor[borderColor] : tw`border-black`,
    borderRadius ? mapPropsToTw.rounded[borderRadius] : tw`rounded`,
    w ? mapPropsToTw.width[w] : tw`w-auto`,
    h ? mapPropsToTw.height[h] : tw`h-7`,
    m ? mapPropsToTw.margin[m] : tw`m-0`,
    p ? mapPropsToTw.padding[p] : tw`px-5`,

    tw`outline-none`,
    tw`cursor-pointer`,
  ]
);
