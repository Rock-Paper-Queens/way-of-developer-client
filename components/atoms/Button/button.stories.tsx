import Button, { ButtonProps, ButtonType } from "./index";
import Icon from "../Icon";
import { mapPropsToTw } from "../../../utils/mapPropsToTw";

export const DefaultButton = ({ children, ...args }: ButtonProps): React.ReactElement => (
  <Button {...args}>{children}</Button>
);
DefaultButton.args = {
  children: "팔로우",
  onClick: () => console.log("button click!"),
  hover: "hover:o80",
};

export const CheckedButton = ({ children, ...args }: ButtonProps): React.ReactElement => (
  <Button {...args}>{children}</Button>
);
CheckedButton.args = {
  buttonType: ButtonType.checked,
  children: "팔로우 중",
  onClick: () => console.log("button click!"),
};

export const AuthButton = ({ children, ...args }: ButtonProps): React.ReactElement => (
  <Button {...args}>{children}</Button>
);
AuthButton.args = {
  buttonType: ButtonType.auth,
  children: (
    <>
      <Icon iconType="google" iconColor="white" iconSize="lg" m="r2" />
      {"구글로 참여하기"}
    </>
  ),
  onClick: () => console.log("button click!"),
};

export const SelectButton = ({ children, ...args }: ButtonProps): React.ReactElement => (
  <Button {...args}>{children}</Button>
);
SelectButton.args = {
  buttonType: ButtonType.select,
  children: (
    <>
      <Icon iconType="sort-down" iconColor="grey-text" m="r2" />
      {"챕터 선택"}
    </>
  ),
  onClick: () => console.log("button click!"),
};

const ButtonStories = {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    buttonType: {
      control: {
        type: "select",
        options: Object.keys(ButtonType),
      },
    },
    color: {
      control: {
        type: "select",
        options: Object.keys(mapPropsToTw.fontColor),
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

export default ButtonStories;
