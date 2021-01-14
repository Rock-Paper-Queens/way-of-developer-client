import { ReactElement } from "react";
import { BasicButton } from "./button.styled";

export interface ButtonProps {
  hasHover: boolean;
  children: string | ReactElement;
}

const Button: React.FC<ButtonProps> = ({ hasHover, children }) => {
  return <BasicButton hasHover={hasHover}>{children}</BasicButton>;
};

export default Button;
