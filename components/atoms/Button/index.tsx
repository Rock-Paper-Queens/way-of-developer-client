import { ChangeEvent, ReactNode } from "react";
import {
  DefaultButton,
  CheckedButton,
  AuthButton,
  SelectButton,
  StyledButtonProps,
} from "./button.styled";

export enum ButtonType {
  default = "default styled button",
  checked = "already checked button (default base)",
  auth = "social login button",
  select = "select button",
}

export type ButtonProps = StyledButtonProps & {
  // HTMLProps<HTMLButtonElement> & {
  buttonType: ButtonType;
  children: ReactNode;
  onClick: (e: ChangeEvent<HTMLInputElement>) => void;
  // hasHover: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, buttonType, ...args }) => {
  switch (buttonType) {
    case ButtonType.checked:
      return <CheckedButton {...args}>{children}</CheckedButton>;
    case ButtonType.auth:
      return <AuthButton {...args}>{children}</AuthButton>;
    case ButtonType.select:
      return <SelectButton {...args}>{children}</SelectButton>;

    default:
      return <DefaultButton {...args}>{children}</DefaultButton>;
  }
};

export default Button;

// background-color
// border
// text color
// font-family
// width / full-width
// onClick
// hover
// active
// disable
// hidden
// border-radius
