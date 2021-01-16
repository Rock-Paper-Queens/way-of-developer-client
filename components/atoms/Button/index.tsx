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
  buttonType: ButtonType;
  children: ReactNode;
  onClick: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ children, buttonType, onClick, ...args }) => {
  const buttonConfig = { onClick };

  switch (buttonType) {
    case ButtonType.checked:
      return (
        <CheckedButton {...buttonConfig} {...args}>
          {children}
        </CheckedButton>
      );
    case ButtonType.auth:
      return (
        <AuthButton {...buttonConfig} {...args}>
          {children}
        </AuthButton>
      );
    case ButtonType.select:
      return (
        <SelectButton {...buttonConfig} {...args}>
          {children}
        </SelectButton>
      );
    default:
      return (
        <DefaultButton {...buttonConfig} {...args}>
          {children}
        </DefaultButton>
      );
  }
};

export default Button;
