import { useState, ChangeEvent } from "react";
import {
  DefaultIconButton,
  RoundIconButton,
  SquareIconButton,
  StyledIconButtonProps,
} from "./iconButton.styled";
import Icon, { IconColor, IconProps } from "../Icon";
import { getStyleConfigFromArgs } from "../../../utils/getStyleConfigFromArg";

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
  iconColor,
  iconSize,
  ...args
}) => {
  /* State */
  const [isHover, setIsHover] = useState(false);

  /* Props Config */
  const buttonConfig = { onClick };
  const buttonStyleConfig = getStyleConfigFromArgs(args);

  /* Helper Func */
  const renderHoverIconColor = (): keyof typeof IconColor => {
    if (!iconHover) return iconColor || "grey-text";
    return isHover ? iconHover : iconColor || "grey-text";
  };

  /* render */
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
          <Icon iconType={iconType} iconColor={renderHoverIconColor()} />
        </RoundIconButton>
      );

    case IconButtonType.square:
      return (
        <SquareIconButton
          aria-label={alt}
          position="relative"
          {...buttonConfig}
          {...buttonStyleConfig}
        >
          <Icon
            iconType={iconType}
            iconColor={iconColor || "white"}
            iconSize={iconSize || "sm"}
            w="10"
            h="6"
            position="absolute"
            positionDir="mid"
          />
        </SquareIconButton>
      );

    default:
      return (
        <DefaultIconButton aria-label={alt} {...buttonConfig} {...buttonStyleConfig}>
          <Icon iconType={iconType} iconColor={iconColor || "black"} />
        </DefaultIconButton>
      );
  }
};

export default IconButton;

// TODO
/*
1. icon size
2. icon color
3. button error
4. global style
*/
