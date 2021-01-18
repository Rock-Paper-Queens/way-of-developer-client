import tw from "twin.macro";

export const positionProps = {
  position: {
    relative: tw`relative`,
    absolute: tw`absolute`,
    fixed: tw`fixed`,
    sticky: tw`sticky`,
  },
  positionDir: {
    mid: tw`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`,
  },
};
