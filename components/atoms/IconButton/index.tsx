import { useState, ChangeEvent } from "react";
import {
  DefaultIconButton,
  RoundIconButton,
  SquareIconButton,
  StyledIconButtonProps,
} from "./iconButton.styled";
import Icon, { IconColor, IconProps } from "../Icon";

/* Type Definition */
export enum IconButtonType {
  default = "button that only has icon",
  round = "round button",
  square = "square button",
}

export type IconButtonProps = IconProps &
  StyledIconButtonProps & {
    alt: string;
    buttonType: IconButtonType;
    iconHover?: keyof typeof IconColor;
    onClick: (e: ChangeEvent<HTMLInputElement>) => void;
  };

/* Component Creation */
const IconButton: React.FC<IconButtonProps> = ({
  buttonType,
  alt,
  onClick,
  iconType,
  iconHover,
  color,
  size,
  ...args
}) => {
  /* State */
  const [isHover, setIsHover] = useState(false);

  /* Props Config */
  const buttonConfig = { onClick };
  const buttonStyleConfig = { ...args };
  const iconConfig = {
    iconType,
    size: size || "lg",
  };

  /* Helper Func */
  const renderHoverIconColor = (): keyof typeof IconColor => {
    if (!iconHover) return color || "grey-text";
    return isHover ? iconHover : color || "grey-text";
  };

  switch (buttonType) {
    case IconButtonType.round:
      return (
        <RoundIconButton
          aria-label={alt}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          {...buttonConfig}
          {...buttonStyleConfig}
        >
          <Icon color={renderHoverIconColor()} {...iconConfig} />
        </RoundIconButton>
      );
    case IconButtonType.square:
      return (
        <SquareIconButton aria-label={alt} {...buttonConfig} {...buttonStyleConfig}>
          <Icon {...iconConfig} />
        </SquareIconButton>
      );
    default:
      return (
        <DefaultIconButton aria-label={alt} {...buttonConfig} {...buttonStyleConfig}>
          <Icon {...iconConfig} />
        </DefaultIconButton>
      );
  }
};

export default IconButton;
