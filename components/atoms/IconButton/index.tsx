import { ChangeEvent } from "react";
import {
  DefaultButton,
  RoundIconButton,
  SquareIconButton,
  StyledIconButtonProps,
} from "./iconButton.styled";
import Icon, { IconProps } from "../Icon";

export enum IconButtonType {
  default = "button that only has icon",
  round = "round button",
  square = "square button",
}

export type IconButtonProps = IconProps &
  StyledIconButtonProps & {
    alt: string;
    buttonType: IconButtonType;
    onClick: (e: ChangeEvent<HTMLInputElement>) => void;
  };

const IconButton: React.FC<IconButtonProps> = ({
  buttonType,
  alt,
  onClick,
  iconType,
  color,
  size,
  ...args
}) => {
  const buttonConfig = { onClick };
  const buttonStyleConfig = { ...args };
  const iconConfig = { iconType, color };

  switch (buttonType) {
    case IconButtonType.round:
      return (
        <RoundIconButton aria-label={alt} {...buttonConfig} {...buttonStyleConfig}>
          <Icon size={size || "lg"} {...iconConfig} />
        </RoundIconButton>
      );
    case IconButtonType.square:
      return (
        <SquareIconButton aria-label={alt} {...buttonConfig} {...buttonStyleConfig}>
          <Icon size={size || "lg"} {...iconConfig} />
        </SquareIconButton>
      );
    default:
      return (
        <DefaultButton aria-label={alt} {...buttonConfig} {...buttonStyleConfig}>
          <Icon size={size || "lg"} {...iconConfig} />
        </DefaultButton>
      );
  }
};

export default IconButton;
