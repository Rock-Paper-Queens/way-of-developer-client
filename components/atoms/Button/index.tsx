import { ChangeEvent, ReactNode } from "react";
import {
  DefaultButton,
  CheckedButton,
  AuthButton,
  SelectButton,
  StyledButtonProps,
} from "./button.styled";
import { getStyleConfigFromArgs } from "../../../utils/getStyleConfigFromArg";

/* Type Definition */
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

/* Component Creation */
const Button: React.FC<ButtonProps> = ({ children, buttonType, onClick, ...args }) => {
  const buttonConfig = { onClick };
  const buttonStyleConfig = getStyleConfigFromArgs(args);

  switch (buttonType) {
    case ButtonType.checked:
      return (
        <CheckedButton {...buttonConfig} {...buttonStyleConfig}>
          {children}
        </CheckedButton>
      );
    case ButtonType.auth:
      return (
        <AuthButton {...buttonConfig} {...buttonStyleConfig}>
          {children}
        </AuthButton>
      );
    case ButtonType.select:
      return (
        <SelectButton {...buttonConfig} {...buttonStyleConfig}>
          {children}
        </SelectButton>
      );
    default:
      return (
        <DefaultButton {...buttonConfig} {...buttonStyleConfig}>
          {children}
        </DefaultButton>
      );
  }
};

export default Button;
