import { backgroundProps } from "./background";
import { borderProps } from "./border";
import { fontProps } from "./font";
import { sizeProps } from "./size";
import { spacingProps } from "./spacing";
import { displayProps } from "./display";
import { positionProps } from "./position";
import { eventProps } from "./event";

export const mapPropsToTw = {
  ...backgroundProps,
  ...fontProps,
  ...borderProps,
  ...sizeProps,
  ...spacingProps,
  ...displayProps,
  ...positionProps,
  ...eventProps,
};
