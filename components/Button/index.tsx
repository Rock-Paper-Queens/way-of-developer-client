import { ChangeEvent, ReactNode } from 'react';
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { StyledButtonProps } from './button.styled';

/* Type Definition */
export enum ButtonType {
  default = 'default styled button',
  checked = 'already checked button (default base)',
  auth = 'social login button',
  select = 'select button',
}

export type ButtonProps = StyledButtonProps & {
  buttonType: ButtonType;
  children: ReactNode;
  onClick: (e: ChangeEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ children, buttonType, ...args }) => {
  // switch (buttonType) {
  //   case ButtonType.checked:
  //     return <CheckedButton {...args}>{children}</CheckedButton>;
  //   case ButtonType.auth:
  //     return (
  //       <AuthButton {...buttonConfig} {...buttonStyleConfig}>
  //         {children}
  //       </AuthButton>
  //     );
  //   case ButtonType.select:
  //     return (
  //       <SelectButton {...buttonConfig} {...buttonStyleConfig}>
  //         {children}
  //       </SelectButton>
  //     );
  //   default:
  //     return (
  //       <DefaultButton {...buttonConfig} {...buttonStyleConfig}>
  //         {children}
  //       </DefaultButton>
  //     );
  // }
  return <ChakraButton {...args}>{children}</ChakraButton>;
};

export default Button;
