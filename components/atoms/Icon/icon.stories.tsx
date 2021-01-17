import Icon, { IconProps, IconType, IconColor } from "./index";

export const BasicIcon = ({ ...args }: IconProps): React.ReactElement => <Icon {...args} />;
BasicIcon.args = {
  iconType: "heart-active",
};

const IconStories = {
  title: "atoms/Icon",
  component: Icon,
  argTypes: {
    iconType: {
      control: {
        type: "select",
        options: Object.keys(IconType),
      },
    },
    iconColor: {
      control: {
        type: "select",
        options: Object.keys(IconColor),
      },
    },
    iconSize: {
      control: {
        type: "select",
        options: ["xs", "lg", "sm", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"],
      },
    },
  },
};

export default IconStories;
