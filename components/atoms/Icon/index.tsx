import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as fasHeart,
  faBookmark as fasBookmark,
  faShareAlt,
  faEnvelopeOpen,
  faCommentAlt,
  faCommentDots,
  faHome,
  faThumbtack,
  faPlus,
  faMinus,
  faArrowRight,
  faArrowLeft,
  faSortUp,
  faSortDown,
  faChevronUp,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faTimes,
  faSearch,
  faPen,
  faBell as fasBell,
  faUser,
  faEllipsisV,
  faBurn,
  faClock as fasClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faBookmark as farBookmark,
  faBell as farBell,
  faClock as farClock,
} from "@fortawesome/free-regular-svg-icons";
import {
  faGithubSquare,
  faFacebookSquare,
  faTwitterSquare,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { StyledSpan } from "./icon.styled";
import { mapPropsToTw } from "../../../utils/mapPropsToTw";

/* Type Definition */
export const IconType = {
  "heart-active": fasHeart,
  "heart-inActive": farHeart,
  "bookmark-active": fasBookmark,
  "bookmark-inActive": farBookmark,
  share: faShareAlt,
  "github-square": faGithubSquare,
  "facebook-square": faFacebookSquare,
  "twitter-square": faTwitterSquare,
  google: faGoogle,
  github: faGithub,
  email: faEnvelopeOpen,
  comment: faCommentDots,
  "comment-square": faCommentAlt,
  home: faHome,
  pin: faThumbtack,
  plus: faPlus,
  minus: faMinus,
  "arrow-right": faArrowRight,
  "arrow-left": faArrowLeft,
  "sort-up": faSortUp,
  "sort-down": faSortDown,
  "chevron-up": faChevronUp,
  "chevron-down": faChevronDown,
  "chevron-right": faChevronRight,
  "chevron-left": faChevronLeft,
  cancel: faTimes,
  search: faSearch,
  pen: faPen,
  "alert-active": fasBell,
  "alert-inActive": farBell,
  user: faUser,
  more: faEllipsisV,
  fire: faBurn,
  "clock-active": fasClock,
  "clock-inActive": farClock,
};

export const IconColor = {
  black: "#000000",
  white: "#ffffff",
  "grey-primary": "#F0F3F5",
  "grey-line": "#DDDEE0",
  "grey-text": "#8F8F8F",
  "grey-text-light": "#BCBCBC",
  "grey-text-dark": "#606060",
  "grey-light": "#FAFAFB",
};

export type iconSize =
  | "xs"
  | "lg"
  | "sm"
  | "1x"
  | "2x"
  | "3x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x"
  | "10x";

// export enum IconLib {
//   ri = "react-icons",
//   fa = "fontawesome",
// }
export type IconProps = {
  // lib?: IconLib;
  iconType: keyof typeof IconType;
  color?: keyof typeof IconColor;
  size?: iconSize;
  m?: keyof typeof mapPropsToTw.margin;
};

/* Component Creation */
const Icon: React.FC<IconProps> = ({ iconType, color, size, m }) => {
  return (
    <StyledSpan m={m}>
      <FontAwesomeIcon
        icon={IconType[iconType]}
        color={color ? IconColor[color] : IconColor.black}
        size={size}
      />
    </StyledSpan>
  );
};

export default Icon;
