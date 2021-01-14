import Icon, { IconProps, iconType, iconColor, iconSize } from "./index";

export const BasicIcon = ({ ...args }: IconProps): React.ReactElement => <Icon {...args} />;
BasicIcon.args = {
  type: "heart-active",
};

const IconStories = {
  title: "atoms/Icon",
  component: Icon,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: Object.keys(iconType),
      },
    },
    color: {
      control: {
        type: "select",
        options: Object.keys(iconColor),
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "lg", "sm", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"],
      },
    },
  },
};

export default IconStories;
