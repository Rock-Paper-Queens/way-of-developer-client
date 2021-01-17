import { mapPropsToTw } from "./mapPropsToTw";

/* background props */
export type BackgroundProps = {
  bgColor?: keyof typeof mapPropsToTw.bgColor;
};

/* border props */
export type BorderProps = {
  border?: keyof typeof mapPropsToTw.border;
  borderColor?: keyof typeof mapPropsToTw.borderColor;
  borderRadius?: keyof typeof mapPropsToTw.rounded;
};

/* font props */
export type FontProps = {
  fontColor?: keyof typeof mapPropsToTw.fontColor;
  fontSize?: keyof typeof mapPropsToTw.fontSize;
};

/* size props */
export type SizeProps = {
  w?: keyof typeof mapPropsToTw.width;
  h?: keyof typeof mapPropsToTw.height;
  minW?: keyof typeof mapPropsToTw.minWidth;
  maxW?: keyof typeof mapPropsToTw.maxWidth;
  minH?: keyof typeof mapPropsToTw.minHeight;
  maxH?: keyof typeof mapPropsToTw.maxHeight;
};

/* spacing props */
export type SpacingProps = {
  m?: keyof typeof mapPropsToTw.margin;
  p?: keyof typeof mapPropsToTw.padding;
};

/* display props */
export type DisplayProps = {
  flex?: boolean;
};

/* position props */
export type PositionProps = {
  position?: keyof typeof mapPropsToTw.position;
  positionDir?: keyof typeof mapPropsToTw.positionDir;
};

/* eventProps */
export type EventProps = {
  hidden?: boolean;
  hover?: keyof typeof mapPropsToTw.event;
};

/* combine */
export type StyleProps = BackgroundProps &
  BorderProps &
  FontProps &
  SizeProps &
  SpacingProps &
  DisplayProps &
  PositionProps &
  EventProps;
