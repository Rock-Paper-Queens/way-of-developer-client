import Button, { IconButtonProps, IconButtonType } from "./index";
import { IconColor } from "../Icon";
import { mapPropsToTw } from "../../../utils/mapPropsToTw";

export const DefaultIconButton = ({ children, ...args }: IconButtonProps): React.ReactElement => (
  <Button {...args}>{children}</Button>
);
DefaultIconButton.args = {
  iconType: "heart-active",
  onClick: () => console.log("button click!"),
  hover: "hover:o80",
};

export const RoundIconButton = ({ children, ...args }: IconButtonProps): React.ReactElement => (
  <Button {...args}>{children}</Button>
);
RoundIconButton.args = {
  buttonType: IconButtonType.round,
  iconType: "user",
  iconHover: "black",
  onClick: () => console.log("button click!"),
};

export const SquareIconButton = ({ children, ...args }: IconButtonProps): React.ReactElement => (
  <Button {...args}>{children}</Button>
);
SquareIconButton.args = {
  buttonType: IconButtonType.square,
  iconType: "plus",
  onClick: () => console.log("button click!"),
};

const IconButtonStories = {
  title: "atoms/IconButton",
  component: Button,
  argTypes: {
    buttonType: {
      control: {
        type: "select",
        options: Object.keys(IconButtonType),
      },
    },
    color: {
      control: {
        type: "select",
        options: Object.keys(IconColor),
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "lg", "sm", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"],
      },
    },
    bgColor: {
      control: {
        type: "select",
        options: Object.keys(mapPropsToTw.bgColor),
      },
    },
    border: {
      control: {
        type: "select",
        options: Object.keys(mapPropsToTw.border),
      },
    },
    borderColor: {
      control: {
        type: "select",
        options: Object.keys(mapPropsToTw.borderColor),
      },
    },
    borderRadius: {
      control: {
        type: "select",
        options: Object.keys(mapPropsToTw.rounded),
      },
    },
    w: {
      control: {
        type: "select",
        options: Object.keys(mapPropsToTw.width),
      },
    },
    h: {
      control: {
        type: "select",
        options: Object.keys(mapPropsToTw.height),
      },
    },
    m: {
      control: {
        type: "select",
        options: Object.keys(mapPropsToTw.margin),
      },
    },
    p: {
      control: {
        type: "select",
        options: Object.keys(mapPropsToTw.padding),
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    hidden: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default IconButtonStories;
