import Button, { IconButtonProps, IconButtonType } from "./index";
import Icon from "../Icon";
import { mapPropsToTw } from "../../../utils/mapPropsToTw";

export const DefaultIconButton = ({ children, ...args }: IconButtonProps): React.ReactElement => (
  <Button {...args}>{children}</Button>
);
DefaultIconButton.args = {
  children: "팔로우",
  onClick: () => console.log("button click!"),
  hover: "hover:o80",
};

export const RoundIconButton = ({ children, ...args }: IconButtonProps): React.ReactElement => (
  <Button {...args}>{children}</Button>
);
RoundIconButton.args = {
  buttonType: IconButtonType.round,
  children: "팔로우 중",
  onClick: () => console.log("button click!"),
};

export const SquareIconButton = ({ children, ...args }: IconButtonProps): React.ReactElement => (
  <Button {...args}>{children}</Button>
);
SquareIconButton.args = {
  buttonType: IconButtonType.square,
  children: (
    <>
      <Icon type="google" color="white" size="lg" m="r2" />
      {"구글로 참여하기"}
    </>
  ),
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
        options: Object.keys(mapPropsToTw.color),
      },
    },
    bgColor: {
      control: {
        type: "select",
        options: Object.keys(mapPropsToTw.bgColor),
      },
    },
    fontSize: {
      control: {
        type: "select",
        options: Object.keys(mapPropsToTw.fontSize),
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
    minW: {
      control: {
        type: "select",
        options: Object.keys(mapPropsToTw.minWidth),
      },
    },
    maxW: {
      control: {
        type: "select",
        options: Object.keys(mapPropsToTw.maxWidth),
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
    hover: {
      control: {
        type: "select",
        options: Object.keys(mapPropsToTw.event),
      },
    },
  },
};

export default IconButtonStories;
