import tw from "twin.macro";

export const mapPropsToTw = {
  color: {
    transparent: tw`text-transparent`,
    black: tw`text-black`,
    white: tw`text-white`,
    greyPrimary: tw`text-grey-primary`,
    greyText: tw`text-grey-text`,
    greyTextLigth: tw`text-grey-text-light`,
    greyTextDark: tw`text-grey-text-dark`,
    greyLight: tw`text-grey-light`,
    warn: tw`text-warn`,
  },
  bgColor: {
    transparent: tw`bg-transparent`,
    black: tw`bg-black`,
    white: tw`bg-white`,
    greyPrimary: tw`bg-grey-primary`,
    greyText: tw`bg-grey-text`,
    greyTextLigth: tw`bg-grey-text-light`,
    greyTextDark: tw`bg-grey-text-dark`,
    greyLight: tw`bg-grey-light`,
    warn: tw`bg-warn`,
  },
  fontSize: {
    xs: tw`text-xs`, // 12px
    sm: tw`text-sm`, // 14px
    base: tw`text-base`, // 16px
    lg: tw`text-lg`, // 18px
    xl: tw`text-xl`, // 20px
    "2xl": tw`text-2xl`, // 24px
    "3xl": tw`text-3xl`, // 30px
    "4xl": tw`text-4xl`, // 36px
    "5xl": tw`text-5xl`, // 48px
    "6xl": tw`text-6xl`, // 60px
    "7xl": tw`text-7xl`, // 72px
    "8xl": tw`text-8xl`, // 96px
    "9xl": tw`text-9xl`, // 128px
  },
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
    "0": tw`border-0`,
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
  width: {
    0: tw`w-0`,
    auto: tw`w-auto`,
    "1rem": tw`w-4`,
    "10rem": tw`w-40`,
    "50%": tw`w-1/2`,
    full: tw`w-full`,
    screen: tw`w-screen`,
  },
  height: {
    0: tw`h-0`,
    auto: tw`h-auto`,
    "1rem": tw`h-4`,
    "28px": tw`h-7`,
    "10rem": tw`h-40`,
    "50%": tw`h-1/2`,
    full: tw`h-full`,
    screen: tw`h-screen`,
  },
  margin: {
    0: tw`m-0`,
  },
  padding: {
    0: tw`p-0`,
    x5: tw`px-5`,
  },
};
