import tw from "twin.macro";

export const borderProps = {
  rounded: {
    none: tw`rounded-none`,
    base: tw`rounded`, // 2.5px
    sm: tw`rounded-sm`, // 5px
    lg: tw`rounded-lg`, // 10px
    xl: tw`rounded-xl`,
    "2xl": tw`rounded-2xl`,
    "3xl": tw`rounded-3xl`,
    full: tw`rounded-full`,
  },
  border: {
    none: tw`border-0`,
    "1": tw`border`,
    "2": tw`border-2`,
    "4": tw`border-4`,
    "8": tw`border-8`,
    t: tw`border-t`,
    r: tw`border-r`,
    l: tw`border-l`,
    b: tw`border-b`,
  },
  borderColor: {
    transparent: tw`border-transparent`,
    black: tw`border-black`,
    white: tw`border-white`,
    greyPrimary: tw`border-grey-primary`,
    greyText: tw`border-grey-text`,
    greyTextLigth: tw`border-grey-text-light`,
    greyTextDark: tw`border-grey-text-dark`,
    greyLight: tw`border-grey-light`,
    warn: tw`border-warn`,
  },
};
