import Button, { ButtonProps } from "./index";

export const BasicButton = ({ children, ...args }: ButtonProps): React.ReactElement => (
  <Button {...args}>{children}</Button>
);
BasicButton.args = {
  children: "Basic Button",
  hasHover: true,
};

const ButtonStories = {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    hasHover: "boolean",
  },
};

export default ButtonStories;
