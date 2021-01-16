import { ChangeEvent } from "react";
import {
  DefaultButton,
  RoundIconButton,
  SquareIconButton,
  StyledIconButtonProps,
} from "./IconButton.styled";
import Icon, { IconType, IconProps } from "../Icon";

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
  const iconConfig = { iconType, color, size };

  switch (buttonType) {
    case IconButtonType.round:
      return (
        <RoundIconButton aria-label={alt} {...buttonConfig} {...args}>
          <Icon {...iconConfig} />
        </RoundIconButton>
      );
    case IconButtonType.square:
      return (
        <SquareIconButton aria-label={alt} {...buttonConfig} {...args}>
          <Icon {...iconConfig} />
        </SquareIconButton>
      );
    default:
      return (
        <DefaultButton aria-label={alt} {...buttonConfig} {...args}>
          <Icon {...iconConfig} />
        </DefaultButton>
      );
  }
};

export default IconButton;
