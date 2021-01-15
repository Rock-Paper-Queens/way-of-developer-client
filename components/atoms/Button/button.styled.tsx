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

export const BasicButton = styled.button``;

export const DefaultButton = styled.button<StyledButtonProps>(
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

export const AuthButton = styled.button<StyledButtonProps>(
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
